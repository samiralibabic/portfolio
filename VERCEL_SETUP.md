# Vercel Multi-Domain Setup for Localized Portfolio

This document outlines the steps to set up multiple domains on Vercel for your portfolio website in different languages (English and German).

## Prerequisites

- A Vercel account
- A domain for your English version (e.g., samiralibabic.com)
- A domain for your German version (e.g., samiralibabic.de)

## Steps for Multi-Domain Setup

### 1. Push Your Code to GitHub

Make sure your code is pushed to a GitHub repository:

```bash
git add .
git commit -m "Add i18n support with English and German translations"
git push
```

### 2. Connect to Vercel

1. Go to [Vercel](https://vercel.com) and sign in
2. Click "Add New" > "Project"
3. Import your GitHub repository
4. Keep the default settings and click "Deploy"

### 3. Configure Primary Domain

1. After deployment, go to your project settings
2. Navigate to "Domains" section
3. Add your primary domain (e.g., samiralibabic.com)
4. Verify the domain according to Vercel's instructions

### 4. Configure Secondary Domain with Locale

1. In the same "Domains" section, add your secondary domain (e.g., samiralibabic.de)
2. After adding the domain, click on the domain settings (three dots)
3. Select "Edit"
4. Under "Redirect", choose "No Redirect"
5. Under "Locale", select "de"
6. Save changes

This configuration tells Vercel to serve the German version of your site when visitors access the .de domain.

### 5. Configure Domain Settings

For each domain:
1. Set up DNS records as instructed by Vercel
2. Ensure HTTPS is enabled (this is usually automatic with Vercel)

### 6. Test Your Configuration

After setup is complete:
1. Visit your .com domain to ensure the English version loads
2. Visit your .de domain to ensure the German version loads
3. Test the language switcher to ensure it correctly switches between domains

## Maintaining Your Website

When you push changes to your main branch, Vercel will automatically redeploy both language versions. The language-specific content will be determined by the translations in your locales files.

## Troubleshooting

If the correct language doesn't appear on the respective domain:
1. Check your Vercel domain settings and confirm the locale is correctly set
2. Verify that your i18n configuration in the Next.js app is working correctly
3. Clear your browser cache or try in an incognito window

For more information, refer to the [Vercel documentation on i18n routing](https://vercel.com/docs/projects/domains/i18n-domains). 