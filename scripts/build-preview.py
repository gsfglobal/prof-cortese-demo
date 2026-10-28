"""
Genera preview/anteprima-cortese.html: un unico file autonomo con tutte le pagine
(routing via #hash), CSS e font incorporati. Serve solo per l'anteprima privata.
Uso: STATIC_EXPORT=1 npm run build && python3 scripts/build-preview.py
"""
import base64, pathlib, re, sys
from bs4 import BeautifulSoup

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "out"
PAGES = [("home", "index.html"), ("il-professore", "il-professore/index.html"),
         ("specializzazioni", "specializzazioni/index.html"), ("lo-studio", "lo-studio/index.html"),
         ("contatti", "contatti/index.html"), ("privacy", "privacy/index.html"), ("cookie", "cookie/index.html")]
ROUTE_OF = {"/": "home", "/il-professore/": "il-professore", "/specializzazioni/": "specializzazioni",
            "/lo-studio/": "lo-studio", "/contatti/": "contatti", "/privacy/": "privacy", "/cookie/": "cookie"}

def norm(path):
    path = path if path.endswith("/") else path + "/"
    return ROUTE_OF.get(path)

def rewrite_links(soup):
    for a in soup.find_all("a", href=True):
        h = a["href"]
        if not h.startswith("/"):
            continue
        path, _, anchor = h.partition("#")
        route = norm(path) or "home"
        a["href"] = "#" + (anchor or route)
        a["data-route"] = route

def inline_images(soup):
    for img in soup.find_all("img", src=True):
        src = img["src"]
        if src.startswith("/") and not src.startswith("//"):
            f = OUT / src.lstrip("/").split("?")[0]
            mime = "image/webp" if f.suffix == ".webp" else "image/png" if f.suffix == ".png" else "image/jpeg"
            img["src"] = f"data:{mime};base64," + base64.b64encode(f.read_bytes()).decode()
            for attr in ("srcset", "srcSet"):
                if img.has_attr(attr):
                    del img[attr]

def font_face(family, file, style="normal", weight="400"):
    data = base64.b64encode((ROOT / "node_modules" / file).read_bytes()).decode()
    return (f"@font-face{{font-family:'{family}';font-style:{style};font-weight:{weight};font-display:swap;"
            f"src:url(data:font/woff2;base64,{data}) format('woff2')}}")

home = BeautifulSoup((OUT / "index.html").read_text(), "html.parser")
css = ""
for link in home.find_all("link", rel="stylesheet"):
    css += (OUT / link["href"].lstrip("/")).read_text()
css = re.sub(r"@font-face\{[^}]*\}", "", css)
cg = "@fontsource/cormorant-garamond/files/cormorant-garamond-latin-"
fonts = "".join([
    font_face("Cormorant Garamond", cg + "400-normal.woff2"),
    font_face("Cormorant Garamond", cg + "400-italic.woff2", "italic"),
    font_face("Cormorant Garamond", cg + "500-normal.woff2", weight="500"),
    font_face("Cormorant Garamond", cg + "600-normal.woff2", weight="600"),
    font_face("Manrope Variable", "@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2", weight="200 800"),
])

body = home.body
header = body.find("header")
footer = body.find("footer")
extras = [el for el in footer.find_next_siblings() if el.name in ("a", "div")]
for el in [header, footer] + extras:
    rewrite_links(el)
demo_bar = ""
wa = "".join(str(e) for e in extras)

sections = []
for route, f in PAGES:
    s = BeautifulSoup((OUT / f).read_text(), "html.parser")
    main = s.find("main")
    for sc in main.find_all("script"):
        sc.decompose()
    rewrite_links(main)
    inline_images(main)
    hidden = "" if route == "home" else " hidden"
    sections.append(f'<div class="route" data-page="{route}"{hidden}>{main.decode_contents()}</div>')

JS = r"""
(function(){
  var root=document.documentElement;
  var routes=[].slice.call(document.querySelectorAll('.route'));
  var header=document.querySelector('header');
  var menuBtn=header.querySelector('button[aria-controls="mobile-menu"]');
  var menu=document.getElementById('mobile-menu');
  function setMenu(open){ menu.hidden=!open; menuBtn.setAttribute('aria-expanded',open);
    menuBtn.setAttribute('aria-label',open?'Chiudi il menu':'Apri il menu');
    document.body.style.overflow=open?'hidden':''; if(open) header.setAttribute('data-open','true'); else header.removeAttribute('data-open'); }
  menuBtn.addEventListener('click',function(){ setMenu(menu.hidden); });
  function show(){
    var h=decodeURIComponent((location.hash||'#home').slice(1))||'home';
    var page=routes.find(function(r){return r.dataset.page===h;});
    var target=null;
    if(!page){ target=document.getElementById(h); page=target?target.closest('.route'):routes[0]; }
    var changed=page.hidden;
    routes.forEach(function(r){ r.hidden=(r!==page); });
    document.querySelectorAll('a[data-route]').forEach(function(a){
      var active=a.dataset.route===page.dataset.page && a.getAttribute('href')==='#'+page.dataset.page;
      if(active) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
    });
    setMenu(false);
    if(target){ target.scrollIntoView({behavior:'instant'}); } else if(changed || h===page.dataset.page){ window.scrollTo({top:0,behavior:'instant'}); }
    if(changed){ page.querySelectorAll('.split-load,.fade-up').forEach(function(el){ el.style.animation='none'; el.offsetHeight; el.style.animation=''; }); }
    reveal(); onScroll();
  }
  var io='IntersectionObserver' in window ? new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target);} });
  },{rootMargin:'0px 0px -8% 0px',threshold:0.05}) : null;
  function reveal(){
    document.querySelectorAll('.route:not([hidden]) :is(.reveal,.reveal-plain):not(.is-visible)').forEach(function(el){
      var r=el.getBoundingClientRect();
      if(!io || r.top<innerHeight){ el.classList.add('is-visible'); } else { io.observe(el); }
    });
  }
  function onScroll(){
    var y=scrollY;
    root.toggleAttribute('data-scrolled', y>24);
    root.toggleAttribute('data-scrolled-far', y>innerHeight*0.6);
    document.querySelectorAll('.route:not([hidden]) [data-progress]').forEach(function(el){
      var r=el.getBoundingClientRect(), start=innerHeight*0.75;
      var p=Math.min(1,Math.max(0,(start-r.top)/(r.height*0.85)));
      el.style.setProperty('--p',p.toFixed(3));
      el.querySelectorAll('[data-step]').forEach(function(s){ s.classList.toggle('is-on', p>=Number(s.dataset.step)); });
    });
  }
  window.addEventListener('hashchange',show);
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll);
  document.querySelectorAll('form').forEach(function(form){
    var out=form.querySelector('[aria-live]');
    form.addEventListener('submit',function(e){ e.preventDefault(); if(!form.reportValidity()) return;
      out.innerHTML='<div class="border-l-2 border-teal bg-white/70 p-5 text-sm leading-relaxed text-graphite"><p class="font-semibold text-midnight">Richiesta non inviata.</p><p class="mt-1">Questo modulo è dimostrativo e non trasmette dati. Per contattare lo studio usare telefono, WhatsApp o email.</p></div>'; });
  });
  show();
})();
"""

EXTRA_CSS = """
header.sticky{top:env(safe-area-inset-top,0px)}
body::before{content:"";position:fixed;inset:0 0 auto;height:env(safe-area-inset-top,0px);z-index:60;background:#F7F5F0}
body{background:#F7F5F0}
.demo-pill{bottom:calc(0.75rem + env(safe-area-inset-bottom,0px))}
"""

html = f"""<title>Prof. Antonio Cortese</title>
<meta name="robots" content="noindex, nofollow">
<style>{fonts}{css}{EXTRA_CSS}</style>
{demo_bar}{header}
<main id="contenuto">{''.join(sections)}</main>
{footer}{wa}
<script>{JS}</script>
"""
dest = ROOT / "preview" / "anteprima-cortese.html"
dest.parent.mkdir(exist_ok=True)
dest.write_text(html)
print(dest, round(len(html) / 1024), "KB")
