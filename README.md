## Beniah Opong Diallo – Portfolio Website

This repository contains the source code for **Beniah Opong Diallo’s** personal portfolio website.

The site is built as a modern single-page application and is ready to be deployed to any static hosting platform.

### Tech stack

- Vite (React + TypeScript)
- Tailwind CSS
- shadcn-ui component library

### Features

- Responsive layout tailored for desktop and mobile
- Developer-focused branding for Beniah Opong Diallo
- Modern UI components (navigation, sections, cards, etc.)

### Local development

```sh
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

### Production build

```sh
npm run build
```

This creates an optimized production build in the `dist` folder.

You can optionally preview the production build locally with:

```sh
npm run preview
```

### Deployment

The built `dist` folder can be deployed to any static host, for example:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

The only requirement is that the host serves the `dist` directory as a static site.

### Customizing the logo & icon

- The site favicon/logo is loaded from the `public` folder.
- By default, the HTML uses `public/placeholder.svg` as the icon.
- To use your own logo:
  - Replace `public/placeholder.svg` with your SVG logo (keeping the same filename), **or**
  - Update the `<link rel="icon" />` tag in `index.html` to point to your own asset.

After changing assets, rebuild and redeploy the site as needed.
