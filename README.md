# Barath R — Portfolio

A storytelling developer portfolio built with **React + Vite + Tailwind CSS**.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

## 📧 Setup EmailJS (Contact Form)

To make the contact form send real emails:

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and create a free account
2. Create a **Service** (connect your Gmail)
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — subject
   - `{{company}}` — company name
   - `{{message}}` — message body
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Create a `.env` file in the project root:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

> ⚠️ Never commit `.env` to GitHub. It is already listed in `.gitignore`.

## 🌐 Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from GitHub**
3. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Go to **Site configuration → Environment variables** and add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Click **Deploy** — your portfolio is live 🎉

Every `git push` auto-redeploys on Netlify.

## 📄 Add Your Resume

Place your resume PDF as `public/resume.pdf` so the download button works.

## 🎨 Customise

All personal data is in `src/data.js` — edit it to update any content without touching the components.

## 🛠 Tech Stack

- React 18 + Vite
- Tailwind CSS
- Lucide React (icons)
- EmailJS (contact form)
- Particle canvas (hero background)
- Intersection Observer (scroll animations)
- Typewriter effect (hero)
- Cursor spotlight effect