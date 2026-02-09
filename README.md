# Jentu.it - React/Next.js Version

Il sito Jentu.it completamente rifatto in React/Next.js per sostituire WordPress.

## 🚀 Quick Start

### Prerequisiti
- Node.js 18+ installato
- npm o yarn

### Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:3000`

### Build per produzione

```bash
# Crea la build ottimizzata
npm run build

# Avvia il server di produzione
npm start
```

## 📁 Struttura del Progetto

```
jentu-react/
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx           # Homepage
│   ├── itria/             # Pagina Brindisi & Taranto
│   ├── galleria/          # Pagina Galleria
│   ├── info/              # Pagina Info/Contatti
│   ├── webcam/            # Pagina Webcam
│   ├── download-app/      # Pagina Download App
│   ├── chi-siamo/         # Pagina Chi Siamo
│   ├── eventi/            # Pagina Eventi
│   ├── layout.tsx         # Layout principale
│   └── globals.css        # Stili globali
├── components/            # Componenti React riutilizzabili
│   ├── Header.tsx         # Header/Navigation
│   ├── Footer.tsx         # Footer
│   └── WaveMap.tsx        # Componente mappa onde
├── data/                  # Dati statici
│   └── proverbs.ts        # Proverbi salentini
├── public/                # File statici (immagini, logo, ecc.)
└── package.json
```

## 🎨 Personalizzazione

### Colori
I colori principali sono definiti in `tailwind.config.ts`:
- `jentu-teal`: #20B2AA (colore principale)
- `jentu-dark`: #0A1628 (colore scuro)

### Logo e Immagini
Inserisci le tue immagini nella cartella `public/`:
- `public/logo.png` - Logo principale
- Altre immagini statiche

### Proverbi
I proverbi salentini sono in `data/proverbs.ts`. Puoi:
1. Aggiungere più proverbi all'array
2. Importare da CSV (vedi sezione sotto)

### Endpoint Railway
Gli URL delle immagini sono configurati in `components/WaveMap.tsx`:
```typescript
const baseUrl = "https://jentu-production.up.railway.app/static/";
```

## 📊 Importare Proverbi da CSV

Se hai un file CSV con i proverbi, puoi convertirlo facilmente:

```typescript
// Esempio di conversione da CSV a TypeScript
// Formato CSV: salentino,italiano,spiegazione

export const proverbs: Proverb[] = [
  {
    salentino: "...",
    italian: "...",
    explanation: "..."
  },
  // ... altri proverbi
];
```

## 🌐 Deploy

### Vercel (Consigliato - Gratuito)
1. Push il codice su GitHub
2. Vai su [vercel.com](https://vercel.com)
3. Importa il repository
4. Deploy automatico ✅

### Netlify (Alternativa gratuita)
1. Push su GitHub
2. Collega su [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Railway (Se vuoi tutto insieme)
Puoi hostare sia il backend che il frontend su Railway:
1. Aggiungi un `Dockerfile` o usa il buildpack Node.js
2. Deploy su Railway
3. Configura le variabili d'ambiente se necessario

## 🔧 Funzionalità Implementate

✅ Homepage con mappa interattiva
✅ Pagina Brindisi & Taranto (Itria)
✅ Toggle Oggi/Domani per le previsioni
✅ Legenda stati del mare
✅ Proverbio del giorno (rotazione automatica)
✅ Top 3 località (placeholder - puoi collegare a API Railway)
✅ Header responsive con menu mobile
✅ Footer con credits Copernicus
✅ Tutte le pagine di navigazione (Galleria, Info, Webcam, ecc.)
✅ Design mobile-first completamente responsive

## 🚧 Da Implementare (Opzionale)

- [ ] Connessione API Railway per Top 3 dinamica
- [ ] Sistema di notifiche/newsletter
- [ ] Sezione commenti/recensioni spiagge
- [ ] Integrazione analytics
- [ ] PWA (Progressive Web App) per installazione mobile
- [ ] Dark mode

## 🆘 Supporto

Per domande o problemi:
- Controlla la documentazione Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Documentazione Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 📝 Note

- Le immagini vengono caricate da Railway tramite `next/image` ottimizzato
- Il sito è completamente SEO-friendly con metadata appropriati
- Tutte le pagine sono server-side rendered per performance ottimali
- Componenti "use client" solo dove necessario (interattività)

## 🎯 Prossimi Passi

1. **Aggiungi le tue immagini** nella cartella `public/`
2. **Personalizza i contenuti** delle pagine placeholder
3. **Testa il sito** localmente con `npm run dev`
4. **Deploy su Vercel** per andare online gratuitamente
5. **Configura il dominio** jentu.it su Vercel

Buon lavoro! 🚀🌊
