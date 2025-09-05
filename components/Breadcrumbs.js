import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Breadcrumbs = ({ customItems = null, style = 'default', className = '' }) => {
  const router = useRouter()
  const pathname = router.pathname
  const isLeft = style === 'white-left'

  // Определяем breadcrumbs на основе маршрута
  const getBreadcrumbs = () => {
    if (customItems) {
      return customItems
    }

    const breadcrumbs = [{ name: 'Главная', href: '/' }]

    // Статьи
    if (pathname === '/articles') {
      breadcrumbs.push({ name: 'Статьи', href: '/articles' })
    }

    // Выкуп б/у машин
    if (pathname === '/vikup') {
      breadcrumbs.push({ name: 'Выкуп б/у машин', href: '/vikup' })
    }

    // Проблемы стиральных машин
    const problemPages = {
      '/neslivaetvodu': 'Стиральная машина не сливает воду',
      '/negreetvodu': 'Стиральная машина не греет воду',
      '/protekaet': 'Стиральная машина протекает',
      '/silnoshumit': 'Стиральная машин�� шумит при отжиме',
      '/nevkluchaetsa': 'Стиральная машина не включается',
      '/zavisaetnaprogramme': 'Стиральная машина зависает на программе',
      '/neotjimaet': 'Стиральная машина не отжимает',
      '/nenabiraetvodu': 'Стиральная машина не набирает воду',
      '/neotkrivaetsadverca': 'У стиральной машины не открывается дверца',
      '/nekrutitbaraban': 'Стиральная машина не крутит барабан'
    }

    if (problemPages[pathname]) {
      breadcrumbs.push({ name: 'Проблемы', href: '/articles' })
      breadcrumbs.push({ name: problemPages[pathname], href: pathname })
    }

    // Обычные статьи
    const generalArticles = {
      '/jirniepyatna': 'Как избавиться от жирных пятен на одежде',
      '/jvachka': 'Как самостоятельно удалить жвачку с одежды',
      '/vlapalisvkrov': 'Как удалить пятна крови с одежды',
      '/puhovik': 'Как правильно стирать пуховик'
    }

    if (generalArticles[pathname]) {
      breadcrumbs.push({ name: 'Статьи', href: '/articles' })
      breadcrumbs.push({ name: generalArticles[pathname], href: pathname })
    }

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  const baseUrl = 'https://sosamba3.vercel.app'
  const itemListElement = breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${baseUrl}${item.href}`
  }))
  const jsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement }

  // Убираем текущую страницу из крошек - показываем только путь к ней
  const breadcrumbsWithoutCurrent = breadcrumbs.slice(0, -1)

  // Не показываем breadcrumbs если нет предыдущих страниц
  if (breadcrumbsWithoutCurrent.length === 0) {
    return null
  }

  return (
    <nav aria-label="breadcrumb" className={`breadcrumbs-container ${style} ${className}`}>
      <div className={`breadcrumbs-wrapper ${isLeft ? 'left' : ''}`}>
        <ol className={`breadcrumbs-list ${isLeft ? 'align-left' : ''}`}>
          {breadcrumbsWithoutCurrent.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              <Link legacyBehavior href={item.href}>
                <a className="breadcrumb-link">{item.name}</a>
              </Link>
              {index < breadcrumbsWithoutCurrent.length - 1 && (
                <span className="breadcrumb-separator">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>

      <style jsx>
        {`
          .breadcrumbs-container {
            background-color: transparent;
            border-bottom: none;
            padding: 6px 0;
            margin-top: 0;
            width: 100%;
            text-align: left;
            display: block;
          }

          /* Стиль с выравниванием слева */
          .breadcrumbs-container.white-left {
            background-color: transparent;
            border-bottom: none;
            padding: 8px 0;
            box-shadow: none;
            margin-top: 0;
            width: 100%;
            text-align: left;
            display: block;
          }

          .breadcrumbs-container.white-left .breadcrumbs-wrapper {
            text-align: left;
            padding: 0 var(--dl-layout-space-unit);
            margin: 0 auto;
          }

          .breadcrumbs-container.white-left .breadcrumbs-list {
            justify-content: flex-start;
          }
          .breadcrumbs-container.white-left .breadcrumbs-wrapper {
            text-align: left;
          }

          .breadcrumbs-wrapper {
            max-width: 1300px;
            width: auto;
            margin: 0 auto;
            padding: 0 var(--dl-layout-space-unit);
            text-align: left;
            display: block;
          }

          .breadcrumbs-list {
            display: flex;
            align-items: center;
            list-style: none;
            margin: 0;
            padding: 0;
            flex-wrap: wrap;
            gap: 2px;
            justify-content: flex-start;
          }
          /* Force left align when white-left variant is used */
          .breadcrumbs-container.white-left .breadcrumbs-list {
            justify-content: flex-start;
          }

          .breadcrumbs-wrapper.left {
            text-align: left;
            margin: 0;
          }

          .breadcrumbs-list.align-left {
            justify-content: flex-start;
          }

          .breadcrumb-item {
            display: flex;
            align-items: center;
            font-size: 0.85rem;
            font-family: var(--font-nunito), sans-serif;
          }

          .breadcrumb-link {
            color: #4EC8ED;
            text-decoration: none;
            transition: color 0.2s ease;
            padding: 2px 4px;
            border-radius: 4px;
            transition: all 0.2s ease;
            font-family: var(--font-nunito), sans-serif;
          }

          .breadcrumb-link:hover {
            color: #87ceeb;
            background-color: rgba(78, 200, 237, 0.1);
          }

          .breadcrumb-separator {
            color: #6c757d;
            margin: 0 4px;
            display: flex;
            align-items: center;
          }


          /* Адаптивность */
          @media (min-width: 992px) and (max-width: 1199px) {
            .breadcrumbs-wrapper,
            .breadcrumbs-container.white-left .breadcrumbs-wrapper {
              transform: translateX(-6px);
            }
          }
          @media (min-width: 1200px) {
            .breadcrumbs-wrapper,
            .breadcrumbs-container.white-left .breadcrumbs-wrapper {
              transform: translateX(-10px);
            }
          }
          @media (min-width: 488px) {
            .breadcrumbs-container {
              margin-top: 0;
            }
          }

          @media (max-width: 487px) {
            .breadcrumbs-container {
              padding: 8px 0;
              margin-top: 0;
              width: 100%;
              display: block;
              text-align: left;
            }

            .breadcrumbs-wrapper {
              padding: 0 15px;
              width: auto;
              margin: 0 auto;
              text-align: left;
              transform: none;
            }

            .breadcrumb-item {
              font-size: 0.75rem;
              display: flex;
            }
            .breadcrumb-item:not(:last-child) { display: none; }
            .breadcrumb-separator { display: none; }


            .breadcrumb-separator {
              margin: 0 4px;
            }

            .breadcrumb-separator svg {
              width: 12px;
              height: 12px;
            }

            .breadcrumb-link {
              padding: 2px 4px;
            }
          }

          @media (max-width: 480px) {
            .breadcrumbs-container {
              padding: 6px 0;
              margin-top: 0;
              width: 100%;
              display: block;
              text-align: left;
            }

            .breadcrumbs-wrapper {
              padding: 0 10px;
              width: auto;
              margin: 0 auto;
              text-align: left;
              transform: none;
            }

            .breadcrumb-item {
              font-size: 0.7rem;
              display: flex;
            }
            .breadcrumb-item:not(:last-child) { display: none; }
            .breadcrumb-separator { display: none; }


            .breadcrumb-separator {
              margin: 0 3px;
            }

            .breadcrumb-separator svg {
              width: 10px;
              height: 10px;
            }

            .breadcrumb-link {
              padding: 1px 3px;
            }

          }
        `}
      </style>
    </nav>
  )
}

export default Breadcrumbs
