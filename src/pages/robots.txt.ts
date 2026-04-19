import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') || 'https://meridian-73d4.vercel.app';
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    '',
    `Sitemap: ${base}/sitemap-index.xml`,
    ''
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
