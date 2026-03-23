# Premrest Next.js Site

A complete Next.js 14 project built from Webflow export, serving the exact Premrest website with all styles, interactions, and assets intact.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to view the site.

## Project Structure

```
premrest-site/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with CSS/JS
│   ├── globals.css              # Global styles
│   ├── page.tsx                 # Home page (/)
│   ├── about/page.tsx           # About page
│   ├── projects/page.tsx        # Projects listing
│   ├── resources/page.tsx       # Resources listing
│   ├── resources/[slug]/page.tsx # Dynamic resource page
│   └── [50+ other pages]        # All Webflow pages converted
├── public/                       # Static assets
│   ├── css/                     # Webflow CSS files
│   ├── js/                      # Webflow JavaScript
│   ├── images/                  # 503 images
│   └── documents/               # PDF and document files
├── cms-data/                     # CMS data JSON
│   ├── categories.json
│   ├── contents.json
│   ├── industries.json
│   ├── people.json
│   ├── projects.json
│   ├── resources.json
│   └── tags.json
├── package.json                  # Dependencies
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript config
└── .gitignore                   # Git ignore rules
```

## Pages

### Static Pages (43)
Home, About, Cleaning, Contact, Projects, Resources, Industries, Careers, Sustainability, and many more.

### Nested Pages (9)
Contact forms, thank you pages, booking pages, and marketing pages.

### Dynamic Routes (7)
Ready for CMS integration:
- `/categories/[slug]`
- `/content/[slug]`
- `/industries/[slug]`
- `/people/[slug]`
- `/projects/[slug]`
- `/resources/[slug]`
- `/tags/[slug]`

## Features

- **Exact Webflow Export**: All HTML, CSS, and JavaScript preserved exactly as exported
- **TypeScript**: Full type safety with strict mode enabled
- **SEO Optimized**: Proper metadata on all pages
- **Responsive Design**: Mobile-first design from Webflow maintained
- **Webflow Interactions**: All animations and form handling work as intended
- **CMS Ready**: Dynamic routes scaffolded for future CMS integration
- **Vercel Ready**: Deploy directly to Vercel with no configuration needed

## Technology Stack

- **Framework**: Next.js 14.2.15
- **UI Library**: React 18.3.1
- **Language**: TypeScript 5
- **Styling**: Webflow CSS (normalize.css, webflow.css, custom)
- **Scripts**: jQuery 3.5.1, webflow.js
- **Fonts**: Google Fonts, Adobe Typekit

## CSS Files

The following Webflow CSS files are loaded in the layout:

1. `normalize.css` - CSS reset for cross-browser consistency
2. `webflow.css` - Webflow framework styles
3. `premrest-486d48.webflow.css` - Custom Premrest styles

## JavaScript

- **jQuery 3.5.1** - Required by Webflow
- **webflow.js** - Webflow interactions, animations, and form handling
- **Typekit** - Adobe font loader
- **WebFont** - Google Font loader
- **Custom Scripts** - Webflow-generated interactions and effects

## Fonts

### Google Fonts
- Open Sans (300, 400, 600, 700, 800 + italics)
- PT Sans (400, 700 + italics)
- Lato (100-900 + italics)
- Montserrat (100-900 + italics)
- Inter (300-700)
- Public Sans (300-700)

### Adobe Fonts (Typekit)
- Futura PT
- Krub

## Development

### Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run TypeScript type checking
```

### Environment Variables

Create a `.env.local` file for local environment variables:

```env
# Add any required environment variables here
```

## Deployment

### Vercel (Recommended)

```bash
# Initialize Git
git init
git add .
git commit -m "Initial commit: Webflow to Next.js migration"

# Push to GitHub
git remote add origin <your-repo>
git push -u origin main

# Deploy to Vercel
# - Connect your GitHub repository
# - Vercel will auto-detect Next.js and deploy
# - No additional configuration needed
```

### Other Platforms

The project can be deployed to any platform that supports Node.js:
- AWS Amplify
- Netlify (with serverless functions)
- DigitalOcean
- Docker containers
- Traditional Node.js hosting

## Performance

- Static page generation reduces load times
- CSS is pre-loaded and cached
- Images are optimized but not transformed (Webflow originals)
- JavaScript is loaded after page content

## SEO

Each page includes:
- Proper title tags
- Meta descriptions
- Favicon and apple touch icon
- Open Graph metadata (can be enhanced)

## CMS Integration

The dynamic routes are ready for CMS integration. To use them:

1. **Option 1**: Use the JSON files in `/cms-data/`
   ```ts
   // In /resources/[slug]/page.tsx
   import resources from '@/cms-data/resources.json'
   ```

2. **Option 2**: Connect to external CMS (Sanity, Contentful, etc.)
   ```ts
   // In /resources/[slug]/page.tsx
   const resource = await fetchFromCMS(params.slug)
   ```

3. **Option 3**: Use Next.js Data Layer (App Router)
   ```ts
   // In /resources/[slug]/page.tsx
   export async function generateStaticParams() {
     // Return array of possible slugs
   }
   ```

## Troubleshooting

### Build Issues

If you encounter build errors:
1. Delete `.next` folder: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Try building again: `npm run build`

### Missing Assets

All static assets are in `/public/`:
- CSS: `/public/css/`
- JavaScript: `/public/js/`
- Images: `/public/images/`
- Documents: `/public/documents/`

### JavaScript Not Working

If Webflow interactions aren't working:
1. Check browser console for errors
2. Ensure jQuery and webflow.js are loaded
3. Verify no other scripts are conflicting

## Migration Notes

- **Webflow Export**: All 59 HTML files were converted (58 kept, 1 style guide excluded)
- **Conversion Method**: Each HTML file extracted body content and rendered with React
- **Preservation**: All Webflow classes, data attributes, and inline styles are preserved
- **Clean Up**: Google Tag Manager, Webflow badge, and analytics scripts removed for cleanliness

## Support

For issues or questions:
1. Check the BUILD_CHECKLIST.md for verification steps
2. Review the BUILD_SUMMARY.md for architecture details
3. Examine page source to understand how pages are rendered
4. Refer to Next.js documentation for framework features

## License

This project migrates the Premrest Webflow export. Ensure you have rights to modify and deploy this content.

---

**Built**: March 23, 2026
**Framework**: Next.js 14.2.15
**Status**: Ready for development and deployment
