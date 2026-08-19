# Kiri Restaurant

A fictional Japanese restaurant website built with vanilla JavaScript and Webpack, dynamically rendering all page content through DOM manipulation — no HTML templates beyond a minimal shell.

## Live Demo

[kiri-restaurant](https://anacamargo.github.io/kiri-restaurant/)

## Screenshot

_Coming soon_

## Features

- Three tabbed pages — Home, Menu and Contact — rendered entirely via JavaScript
- Tab switching that wipes and rebuilds `#content` on every navigation
- Menu page with dish images, prices and descriptions organized by section
- Contact page with location, opening hours and a map placeholder
- Responsive layout — mobile first, adapts from single column to multi-column at 768px
- SVG icons imported as assets and rendered as images

## Technologies

- HTML5 (semantic, accessible)
- CSS3 (custom properties, flexbox, grid, responsive design)
- Vanilla JavaScript (ES6+ modules, DOM manipulation)
- Webpack 5 (module bundling, asset handling)
- npm

## Technical Highlights

- **Module per page** — `home.js`, `menu.js` and `contact.js` each export a single function responsible for creating and appending their content to the DOM
- **Centralized content** — all text, icon keys and image keys live in `content.js`, keeping modules free of hardcoded strings
- **Centralized assets** — `images.js` and `icons.js` handle all asset imports, making references in modules clean and consistent
- **Tab switching** — `index.js` holds all event listeners and a `loadPage` helper that clears `#content` and delegates to the correct module
- **Semantic HTML** — `<address>`, `<dl>/<dt>/<dd>` for hours, `<ul>/<li>` for menu items, `<header>` per section
- **Accessibility** — `aria-hidden` on decorative icons, empty `alt` on icon images, meaningful `alt` on dish photos

## Project Structure

```
kiri-restaurant/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── contact.js
│   ├── content.js
│   ├── home.js
│   ├── icons.js
│   ├── images.js
│   ├── index.js
│   ├── menu.js
│   ├── styles.css
│   └── template.html
├── .gitignore
├── package.json
├── webpack.dev.js
└── webpack.prod.js
```

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/anacamargo/kiri-restaurant.git
cd kiri-restaurant
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Deployment

This project is deployed to GitHub Pages via the `gh-pages` branch using Webpack's `dist` output. To redeploy:

```bash
git checkout gh-pages && git merge main --no-edit
npm run build
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

## License

MIT
