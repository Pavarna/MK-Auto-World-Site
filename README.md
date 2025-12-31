# MK Auto World 🏎️💨

### Helping a small business go digital with React, TypeScript, and SEO.

**Live Demo:** [mk-auto-world-site.vercel.app](https://mk-auto-world-site.vercel.app/)

---

## 📖 Project Overview
I built this professional web presence for **MK Auto World**, a premium multi-brand spare parts business. The goal was to transform a traditional business model into a high-conversion digital tool that facilitates direct customer inquiries and improves brand trust.

## 🚀 Key Features

* **🏗️ Type-Safe Architecture:** Built with **React** and **TypeScript** to ensure robust code, better maintainability, and fewer runtime errors.
* **🎨 Responsive UI/UX:** Styled with **Tailwind CSS** using a mobile-first approach. Features custom modals for business card viewing and smooth transitions.
* **📩 Automated Inquiries:** Integrated **Formspree** for the contact form, allowing users to submit parts inquiries that are instantly routed to the business email without a custom backend.
* **📲 High-Friction Reduction:** One-tap connectivity via **WhatsApp API**, **Tel links**, and **Social Media** navigation to maximize lead generation.
* **🔍 Technical SEO:** Optimized for search engines using semantic HTML and indexed via **Google Search Console** to ensure local search visibility.
* **XML Sitemap**: Created `sitemap.xml` to help Google index the site structure efficiently.
* **Robots.txt**: Configured `robots.txt` to manage crawler access and point to the sitemap.

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Frontend Framework |
| **TypeScript** | Type Safety & Developer Experience |
| **Tailwind CSS** | Utility-first Styling & Responsive Design |
| **Lucide React** | Scalable Vector Icons |
| **Formspree** | Serverless Form Handling |
| **Vercel** | Deployment & Hosting |


## 📈 Performance & SEO
* **Google Search Console:** Verified ownership and submitted sitemaps for faster indexing.
* **Mobile Optimized:** Designed specifically for mechanics and car owners who access the site while on the go.
* **Accessibility:** Implemented proper `<label>` tags and ARIA roles for a better user experience on all devices.

## 💻 Local Development

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/your-username/mk-auto-world.git](https://github.com/your-username/mk-auto-world.git)

2. **Install dependencies:**
npm install

3. **Run development server:**
npm run dev

**👤 Author**
Pavarna S * LinkedIn: linkedin.com/in/pavarna-s-7b99911b1/

Portfolio Credits: Found in public/humans.txt

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
