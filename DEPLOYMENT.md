# 🚀 Guida Deployment Jentu.it

## Opzione 1: Vercel (CONSIGLIATO - 100% Gratuito)

Vercel è la piattaforma ufficiale di Next.js ed è completamente gratuita per progetti personali.

### Step 1: Prepara il Repository
```bash
cd jentu-react
git init
git add .
git commit -m "Initial commit - Jentu.it React"
```

### Step 2: Pusha su GitHub
```bash
# Crea un nuovo repository su github.com
# Poi:
git remote add origin https://github.com/TUO_USERNAME/jentu-react.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy su Vercel
1. Vai su [vercel.com](https://vercel.com)
2. Clicca "Sign Up" e usa GitHub per registrarti
3. Clicca "Add New Project"
4. Importa il repository `jentu-react`
5. Vercel rileva automaticamente Next.js - clicca "Deploy"
6. ✅ Dopo 2-3 minuti il sito è LIVE!

### Step 4: Configura il Dominio Personalizzato
1. Nel dashboard Vercel, vai su "Settings" → "Domains"
2. Aggiungi `jentu.it` e `www.jentu.it`
3. Vercel ti darà i DNS records da configurare:
   - Vai sul tuo provider DNS (dove hai comprato il dominio)
   - Aggiungi i record A/CNAME che Vercel ti indica
   - Attendi 24-48h per la propagazione DNS
4. ✅ Il sito sarà su jentu.it!

### Aggiornamenti Automatici
Ogni volta che fai `git push` su GitHub, Vercel deploierà automaticamente! 🎉

---

## Opzione 2: Netlify (Alternativa Gratuita)

### Step 1-2: Come Vercel (GitHub)

### Step 3: Deploy su Netlify
1. Vai su [netlify.com](https://netlify.com)
2. "Add new site" → "Import an existing project"
3. Connetti GitHub e seleziona il repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Deploy!

### Configura Dominio
Similar a Vercel, in Settings → Domain Management

---

## Opzione 3: Railway (Backend + Frontend Insieme)

Se vuoi hostare tutto (backend Python + frontend React) su Railway:

### Step 1: Crea Dockerfile per Frontend
```dockerfile
# /jentu-react/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
```

### Step 2: Deploy su Railway
1. Nel tuo progetto Railway, clicca "New Service"
2. Seleziona "GitHub Repo" e importa jentu-react
3. Railway rileva automaticamente il Dockerfile
4. Deploy!

### Step 3: Configura Dominio
In Settings → Domains → Add Domain

---

## Opzione 4: VPS (Avanzato)

Se hai già un VPS:

```bash
# Sul server
sudo apt update
sudo apt install nodejs npm

cd /var/www/
git clone https://github.com/TUO_USERNAME/jentu-react.git
cd jentu-react
npm install
npm run build

# Setup con PM2
npm install -g pm2
pm2 start npm --name "jentu-frontend" -- start
pm2 save
pm2 startup

# Nginx reverse proxy
sudo nano /etc/nginx/sites-available/jentu.it
```

Configurazione Nginx:
```nginx
server {
    listen 80;
    server_name jentu.it www.jentu.it;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/jentu.it /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# SSL con Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d jentu.it -d www.jentu.it
```

---

## 🎯 Raccomandazione Finale

**Per il tuo caso specifico:**

1. **Frontend (React)**: Deploy su **Vercel** (gratuito, velocissimo, zero configurazione)
2. **Backend (Python/Railway)**: Mantieni su Railway
3. **Risultato**: Due servizi ottimizzati separatamente

**Vantaggi:**
- ✅ Frontend super veloce (Vercel CDN globale)
- ✅ Backend isolato su Railway (più controllo)
- ✅ Costi: 0€ (entrambi hanno tier gratuiti generosi)
- ✅ Deploy automatici con git push
- ✅ HTTPS automatico
- ✅ Rollback istantaneo se qualcosa va storto

**Setup completo in ~15 minuti!** 🚀
