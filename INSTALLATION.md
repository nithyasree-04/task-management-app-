# Installation Commands

## Quick Start

Run these commands in order:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The app will open at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## Vercel Deployment

### Option 1: Automatic (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel dashboard
3. Vercel automatically reads `vercel.json`

### Option 2: Manual
```bash
npm install -g vercel
vercel
```

## Project Setup Summary

✅ **Installed:**
- React 18.2.0
- Vite 5.0.8
- Tailwind CSS 3.3.6
- PostCSS 8.4.31
- Autoprefixer 10.4.16

✅ **Configured:**
- Vite dev server (port 3000)
- Tailwind CSS with custom theme
- PostCSS with Autoprefixer
- Component utilities (.btn, .card, .input)

✅ **Created:**
- Project folder structure
- 5 empty component files
- index.css with Tailwind directives
- All config files
- Vercel deployment ready
- .gitignore for version control

✅ **Ready for:**
- Component development
- Tailwind styling
- Production deployment
- Environment variables
