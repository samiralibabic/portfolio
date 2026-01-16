# Developer portfolio

![screenshot](screenshot.png)

A portfolio with basic information about skills and experience.

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![X](https://img.shields.io/twitter/follow/samiralibabic.svg?label=Follow%20@samiralibabic)](https://x.com/samiralibabic)

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Verifying crawler-visible HTML](#verifying-crawler-visible-html)
- [License](##license)

## About

This is a simple personal portfolio site with skills, links to a blogging platform and contact details.

## Getting Started

To run the project locally, type this in your terminal:

```bash
git clone https://github.com/samiralibabic/portfolio.git
cd portfolio
npm install
```

## Verifying crawler-visible HTML

The homepage renders the full product list server-side (including the items hidden behind the “Show more products” interaction), so bots can see the same content as hydrated browsers.

To verify locally:

1. Build and start the app:

```bash
npm run build
npm run start
```

2. Confirm the HTML payload contains the full product list (example uses a product name that appears in the “Show more products” section):

```bash
curl -s http://localhost:3000/ | rg -i "ClipClean|Print2Social|Tierarzt-Liste"
```

3. Run the dev-only SSR check script to assert every product title + link exists in the HTML:

```bash
npm run check:ssr-products
```

4. In a browser, use “View Source” and search for any product title or link to confirm the full list is present in the raw HTML.

## Licence

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
