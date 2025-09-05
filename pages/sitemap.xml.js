import { seoConfig } from '../utils/seoConfig'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sosamba3.vercel.app'

function generateSiteMap() {
  const routes = Object.keys(seoConfig)
    .filter((p) => typeof p === 'string' && p.startsWith('/'))
  const now = new Date().toISOString()

  const urlEntries = routes.map((path) => {
    const loc = `${BASE_URL}${path === '/' ? '' : path}`
    let priority = 0.9
    let changefreq = 'weekly'
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path === '/articles') {
      priority = 0.8
      changefreq = 'weekly'
    }
    return `    <url>\n      <loc>${loc}</loc>\n      <lastmod>${now}</lastmod>\n      <changefreq>${changefreq}</changefreq>\n      <priority>${priority.toFixed(1)}</priority>\n    </url>`
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`
}

export default function SiteMap() {}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap()
  res.setHeader('Content-Type', 'application/xml')
  // Temporarily disable caching so Google sees latest sitemap during debugging
  res.setHeader('Cache-Control', 'no-cache, no-store, max-age=0')
  res.write(sitemap)
  res.end()
  return { props: {} }
}
