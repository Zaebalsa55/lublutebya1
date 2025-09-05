// app/sitemap.xml/route.js
import { NextResponse } from 'next/server'

export async function GET() {
  const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://lublutebya1.vercel.app'
  const now = new Date().toISOString()

  let seoConfig = {}
  try {
    const mod = await import('../../utils/seoConfig')
    seoConfig = mod?.seoConfig ?? mod?.default ?? {}
  } catch (err) {
    const fallback = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`
    return new NextResponse(fallback, {
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    })
  }

  const routes = Object.keys(seoConfig).filter((p) => typeof p === 'string' && p.startsWith('/'))
  const urlEntries = routes
    .map((path) => {
      const loc = `${BASE}${path === '/' ? '' : path}`
      const changefreq = path === '/' ? 'daily' : 'weekly'
      const priority = path === '/' ? '1.0' : '0.8'
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'X-Sitemap-Source': 'route'
    },
  })
}
