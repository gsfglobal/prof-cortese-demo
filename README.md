# Prof. Antonio Cortese — demo di restyling

Proposta di restyling del sito professionale del Prof. Dott. Antonio Cortese (Chirurgia Maxillo-Facciale, Napoli), realizzata da Dental Go.
**Stato: anteprima riservata.** Contenuti in attesa di validazione del Professore; il sito è impostato come non indicizzabile.

Fonte dei contenuti: sito attuale www.antoniocortesemaxillo.it (consultato il 28/10/2026) e archivi bibliografici pubblici (IRIS UniNa/UniSa, PubMed, IntechOpen). Nessun dato è stato inventato: quello che manca è segnalato come "da confermare".

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Lucide React · font self-hosted (Cormorant Garamond + Manrope via Fontsource, nessuna chiamata a Google). Nessun tracker, nessun cookie, nessun iframe di terze parti.

## Linguaggio visivo

Allineato al concept Dental Go del Dott. Mazzetti (stessa famiglia di siti), con la palette del Professore:
header che si stringe in una "pillola" allo scroll, titoli che compaiono parola per parola, card delle specializzazioni sfalsate,
percorso del paziente con linea di avanzamento, FAQ, contatti scuri con modulo in card, barra Chiama/WhatsApp fissa su smartphone,
etichetta discreta "Concept dimostrativo". Tutte le animazioni rispettano `prefers-reduced-motion`.

## Comandi

```bash
npm install          # installazione
npm run dev          # sviluppo: http://localhost:3000
npm run lint         # controllo codice
npm run build        # build di produzione
npm start            # avvia la build
```

Anteprima statica in un unico file (usata per la preview privata su Claude):

```bash
STATIC_EXPORT=1 npm run build && python3 scripts/build-preview.py
# → preview/anteprima-cortese.html
```

## Pagine

| Percorso | Contenuto |
|---|---|
| `/` | Hero, credenziali, presentazione, 6 specializzazioni, approccio, ricerca, équipe, contatti |
| `/il-professore` | Biografia editoriale, timeline, esperienze estere, attività accademica, 6 pubblicazioni verificate con link |
| `/specializzazioni` | 6 sezioni con ancore: descrizione, finalità, ambiti clinici, CTA |
| `/lo-studio` | Studio, galleria (segnaposto), équipe, percorso di primo contatto |
| `/contatti` | Telefono, WhatsApp, email, indicazioni, mappa grafica, modulo dimostrativo |
| `/privacy`, `/cookie` | Bozze **non pubblicabili**, `noindex` |

Inoltre: `sitemap.xml`, `robots.txt`, canonical e Open Graph per pagina, dati strutturati schema.org (`Physician` + `Person`, senza rating), 404 personalizzata.

## Variabili d'ambiente

| Variabile | Default | Uso |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.antoniocortesemaxillo.it` | URL canonico, sitemap, Open Graph |
| `NEXT_PUBLIC_DEMO_MODE` | attivo | Barra "Anteprima riservata" + `noindex` + `robots: Disallow /`. Impostare `false` **solo** al go-live approvato |

## Immagini

Foto autentiche prese dal sito attuale del Professore (`public/images/`). Prima della pubblicazione va confermato il permesso di riutilizzarle:
- `professore/prof-cortese-studio.webp`: ritratto nello studio (hero, pagina Il Professore, équipe)
- `professore/prof-cortese-archivio.webp`: foto d'archivio (home, sezione Il Professore)
- `studio/equipe-studio.webp`: foto di gruppo dell'équipe (Lo Studio)
- `team/dott-maurizio-del-gaudio.webp`, `team/dott-giovanni-del-gaudio.webp`

Le foto cliniche dei pazienti e le immagini di repertorio del vecchio sito sono state escluse di proposito.
Restano due spazi segnaposto in Lo Studio (Accoglienza, Sala d'attesa). `FacialStudy`, `SpecialtyGlyph` e `MapCard` sono grafiche SVG originali.
Le foto attuali sono a 585×780 px: per la versione definitiva servono originali ad alta risoluzione (lato lungo ≥ 2000 px). Per sostituirle basta salvare i file con lo stesso nome.

`public/og-image.png` (1200×630) è l'immagine di condivisione.

## Modulo contatti

È **dimostrativo**: non invia né salva dati (nessuna chiamata di rete). Per attivarlo servono: endpoint sicuro (es. Route Handler con invio email tramite provider UE), informativa privacy validata, consenso, antispam. Il modulo non chiede dati sanitari.

## Checklist prima della pubblicazione

Dati professionali
- [ ] Numero di iscrizione all'Albo e Ordine dei Medici Chirurghi e Odontoiatri di appartenenza (Professore e collaboratori)
- [ ] P.IVA / ragione sociale del titolare del sito
- [ ] Direttore sanitario, se lo studio è una struttura autorizzata che lo richiede
- [ ] Sedi delle specializzazioni 1987 (Chirurgia Maxillo-Facciale) e 1991 (Stomatologia)
- [ ] Denominazione italiana del ruolo 1990–2006 ("Assistant Professor" sul CV)
- [ ] Stato attuale dell'incarico di Professore Aggregato all'Università di Salerno
- [ ] Numero pubblicazioni ("oltre 100" / 104 sul CV) e conferma delle 6 pubblicazioni selezionate
- [ ] Qualifiche e brevi profili di Dott. Maurizio e Dott. Giovanni Del Gaudio
- [ ] Orari di segreteria
- [ ] Conferma delle 6 aree e degli ambiti clinici elencati

Immagini e contenuti
- [ ] Autorizzazione a riusare le foto del sito attuale e originali ad alta risoluzione
- [ ] Foto di accoglienza e sala d'attesa, con liberatorie
- [ ] Approvazione dei testi da parte del Professore

Privacy e conformità
- [ ] Informativa privacy e cookie redatte dal consulente privacy
- [ ] Banner cookie solo se si aggiungono strumenti non tecnici (statistiche, mappe incorporate, pixel)
- [ ] Verifica della comunicazione sanitaria (L. 145/2018, c. 525; Codice deontologico) ed eventuali comunicazioni all'Ordine
- [ ] `NEXT_PUBLIC_DEMO_MODE=false` solo dopo l'approvazione

## Anteprima su GitHub Pages

Online su https://gsfglobal.github.io/prof-cortese-demo/ (ramo `gh-pages`, contenuto della cartella `out/`).
Per aggiornarla:

```bash
BASE_PATH=/prof-cortese-demo NEXT_PUBLIC_ASSET_URL=https://gsfglobal.github.io/prof-cortese-demo STATIC_EXPORT=1 npm run build
touch out/.nojekyll   # poi pubblicare out/ sul ramo gh-pages
```

Il link è pubblico per chi lo riceve ma non indicizzato (`noindex` e robots `Disallow`).

## Preview privata su Vercel (senza pubblicazione pubblica)

1. Caricare la cartella su un repository GitHub **privato**.
2. Su vercel.com → Add New → Project → importare il repository (preset Next.js, nessuna configurazione extra).
3. Lasciare `NEXT_PUBLIC_DEMO_MODE` non impostata: il sito resta `noindex`.
4. Project → Settings → Deployment Protection → attivare **Vercel Authentication** (o password) per rendere l'URL accessibile solo a chi è autorizzato.
5. Condividere il link di preview al Professore. Non collegare il dominio antoniocortesemaxillo.it finché il sito non è approvato.
