# Goulburn Radiology Website

Modern, SEO-optimised website — Next.js, MUI v5, static JSON content.

## Editing Content

All content lives in `/content/*.json`. Edit any file and redeploy.

| File | What it controls |
|------|-----------------|
| `content/business.json` | Practice info, hours, hero, nav |
| `content/services.json` | All imaging services |
| `content/team.json` | Radiologist profiles |
| `content/faq.json` | FAQ questions & answers |
| `content/referrers.json` | Referrer page content |

## Dev

```bash
yarn install
yarn dev        # http://localhost:3000
yarn build
yarn start
```

## Deployment (Vercel)
Push to main branch → Vercel auto-deploys.
Then switch DNS: `www.goulburnradiology.com.au` → Vercel domain.
