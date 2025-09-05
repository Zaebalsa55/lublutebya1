import Head from 'next/head'
import { useRouter } from 'next/router'
import { getSEOData } from '../utils/seoConfig'
import { getLocalBusinessData, getOrganizationData } from '../utils/structuredData'

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  structuredData,
  robots
}) => {
  const router = useRouter()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sosamba3.vercel.app'
  const currentUrl = `${baseUrl}${router.asPath}`

  // Значения по умолчанию
  const defaultTitle = 'Ремонт стиральных машин в Одессе'
  const defaultDescription = 'Профессиональный ремонт стиральных машин в Одессе. Бесплатный выезд мастера, диагностика. Ремонт в день обращения. Честные цены. ☎ +38 (098) 467-13-52'
  const defaultKeywords = 'ремонт стиральных машин, Одесса, мастер по ремонту, стиральная машина, сервис'
  const defaultOgImage = `${baseUrl}/og-image.jpg`

  const finalTitle = title || defaultTitle
  const finalDescription = description || defaultDescription
  const finalKeywords = keywords || defaultKeywords
  const finalCanonical = canonical || currentUrl
  const finalOgTitle = ogTitle || finalTitle
  const finalOgDescription = ogDescription || finalDescription
  const finalOgImage = ogImage || defaultOgImage

  // Определяем robots: из пропса, из seoConfig по текущему пути, иначе индексируем
  const routeSEO = getSEOData(router.pathname)
  const finalRobots = robots || (routeSEO && routeSEO.robots) || 'index, follow'

  // Проверка наличия типа в переданных структурированных данных (объект или массив)
  const hasType = (data, type) => {
    if (!data) return false
    if (Array.isArray(data)) return data.some((d) => d && (d['@type'] === type || (Array.isArray(d['@type']) && d['@type'].includes(type))))
    return data['@type'] === type || (Array.isArray(data['@type']) && data['@type'].includes(type))
  }

  const needOrg = !hasType(structuredData, 'Organization')
  const needLocal = !hasType(structuredData, 'LocalBusiness')

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="robots" content={finalRobots} />

      <link rel="canonical" href={finalCanonical} />

      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content="РемСтирМаш - Ремонт стиральных машин в Одессе" />
      <meta property="og:locale" content="ru_UA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={finalOgImage} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

      <meta httpEquiv="content-language" content="ru" />
      <link rel="alternate" hrefLang="ru" href={currentUrl} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      {needOrg && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationData()) }}
        />
      )}
      {needLocal && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessData(currentUrl)) }}
        />
      )}
    </Head>
  )
}

export default SEOHead
