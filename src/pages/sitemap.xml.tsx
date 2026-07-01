import { GetServerSideProps } from 'next';
import { META, SERVICES } from '@src/lib/content';

const SitemapPage = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = META.url;
  const now = new Date().toISOString().split('T')[0];
  const staticPages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/patient-information', priority: '0.8', changefreq: 'monthly' },
    { path: '/privacy', priority: '0.4', changefreq: 'yearly' },
  ];
  const servicePages = SERVICES.map(s => ({ path: `/services/${s.slug}`, priority: '0.8', changefreq: 'monthly' }));
  const allPages = [...staticPages, ...servicePages];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allPages.map(p => `  <url>\n    <loc>${baseUrl}${p.path}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`).join('\n')}\n</urlset>`;
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(xml);
  res.end();
  return { props: {} };
};

export default SitemapPage;
