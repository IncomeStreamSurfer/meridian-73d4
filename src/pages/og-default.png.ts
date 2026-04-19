import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="bg" cx="30%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#3a2518"/>
      <stop offset="60%" stop-color="#1a1411"/>
      <stop offset="100%" stop-color="#0f0a08"/>
    </radialGradient>
    <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3"/></filter>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" filter="url(#grain)" opacity="0.08"/>
  <g fill="#f4ede1">
    <text x="80" y="130" font-family="Georgia, serif" font-size="16" letter-spacing="8" opacity="0.6">MERIDIAN</text>
    <line x1="80" y1="150" x2="140" y2="150" stroke="#c7462a" stroke-width="2"/>
    <text x="80" y="320" font-family="Georgia, serif" font-style="italic" font-size="96" font-weight="400">Something</text>
    <text x="80" y="420" font-family="Georgia, serif" font-style="italic" font-size="96" font-weight="400">exceptional</text>
    <text x="80" y="520" font-family="Georgia, serif" font-style="italic" font-size="96" font-weight="400" fill="#c7462a">is brewing.</text>
    <text x="80" y="580" font-family="Inter, sans-serif" font-size="18" opacity="0.7">Specialty coffee · coming soon</text>
  </g>
  <g transform="translate(950,315)">
    <ellipse cx="0" cy="0" rx="110" ry="170" fill="#5a3722" transform="rotate(-12)"/>
    <path d="M 0 -150 Q 12 0 0 150" stroke="#1a0f08" stroke-width="3" fill="none" transform="rotate(-12)"/>
    <ellipse cx="0" cy="0" rx="110" ry="170" fill="none" stroke="#c7462a" stroke-width="1" opacity="0.4" transform="rotate(-12)"/>
  </g>
</svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=31536000, immutable' } });
};
