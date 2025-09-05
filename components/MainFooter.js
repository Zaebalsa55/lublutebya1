import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import OrderButton from './OrderButton'
import dynamic from 'next/dynamic'
import { PHONE_DISPLAY, PHONE_DISPLAY_2 } from '../utils/contacts'
const OrderModal = dynamic(() => import('./OrderModal'), { ssr: false })

const MainFooter = () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const mapObserverRef = useRef(null)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Проверяем, является ли текущая страница страницей статей или одной из статей
  const articlePaths = [
    '/neslivaetvodu',
    '/negreetvodu',
    '/protekaet',
    '/silnoshumit',
    '/nevkluchaetsa',
    '/zavisaetnaprogramme',
    '/neotjimaet',
    '/nenabiraetvodu',
    '/neotkrivaetsadverca',
    '/nekrutitbaraban',
    '/jirniepyatna',
    '/jvachka',
    '/vlapalisvkrov',
    '/puhovik'
  ]
  const normalizedPath = router.pathname ? router.pathname.toLowerCase() : ''
  const isArticlesPage = normalizedPath === '/articles' || normalizedPath.startsWith('/articles') || articlePaths.includes(normalizedPath)

  useEffect(() => {
    if (showMap) return
    if (typeof window === 'undefined') return
    const el = document.querySelector('.frame1196-map-observer')
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setShowMap(true)
          io.disconnect()
        }
      })
    }, { rootMargin: '200px' })
    io.observe(el)
    mapObserverRef.current = io
    return () => io.disconnect()
  }, [showMap])

  return (
    <div className="main-footer-isolation">
      <footer className="frame1196-container229">
        <div className="frame1196-container230">
          <div className="frame1196-container231">
            <strong className="frame1196-text281">
              <span
                dangerouslySetInnerHTML={{
                  __html: 'Наши контакты',
                }}
              ></span>
            </strong>
            <div className="frame1196-container232">
              <div className="frame1196-container233">
                <p className="frame1196-text282">
                  <span className="frame1196-text-bold">Тел.:</span> {PHONE_DISPLAY}
                </p>
                <p className="frame1196-text283">
                  <span className="frame1196-text-bold">Тел.:</span> {PHONE_DISPLAY_2}
                </p>
              </div>
            </div>
            <div className="frame1196-container234">
              <p className="frame1196-text284">
                <span className="frame1196-text-bold">Адрес:</span> пл. Независимости, 1, Одесса, Одесская область, 65000
              </p>
              <p className="frame1196-text285">
                <span className="frame1196-text-bold">E-mail:</span> remstirmash@gmail.com
              </p>
            </div>
            <p className="frame1196-text286">
              <span className="frame1196-text-bold">Пн-Вс:</span> 9:00-21:00
            </p>
            <svg
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="frame1196-icon403"
            >
              <path
                d="M0 10 H330"
                fill="none"
                stroke="#000000"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="11 11"
              ></path>
            </svg>
          </div>
          <div className="frame1196-container235">
            <div className="frame1196-container236">
              <strong className="frame1196-text287">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Оставьте заявку на бесплатный выезд мастера',
                  }}
                ></span>
              </strong>
              <OrderButton onClick={openModal} variant="footer" />
            </div>
            <div className="frame1196-container237">
              <div className="frame1196-map-wrapper frame1196-map-observer" onClick={() => setShowMap(true)}>
                {showMap ? (
                  <iframe
                    loading="lazy"
                    src="https://www.google.com/maps?q=%D0%BF%D0%BB.%20%D0%9D%D0%B5%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8%2C%201%2C%20%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%B0%2C%20%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C%2065000&output=embed"
                    className="frame1196-google-maps"
                    title="Карта местоположения"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <button type="button" className="frame1196-map-placeholder" aria-label="Загрузить карту">
                    Показать карту
                  </button>
                )}
              </div>
            </div>
          </div>
          <nav className="frame1196-container238">
            <Link href="/">
              <span className={`frame1196-text288 ${router.pathname === '/' ? 'frame1196-nav-active' : ''}`}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Главная',
                  }}
                ></span>
              </span>
            </Link>
            <Link href="/vikup">
              <span className={`frame1196-text289 ${router.pathname === '/vikup' ? 'frame1196-nav-active' : ''}`}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Выкуп б/y машин',
                  }}
                ></span>
              </span>
            </Link>
            <Link href="/articles">
              <span className={`frame1196-text290 ${isArticlesPage ? 'frame1196-nav-active' : ''}`}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Статьи',
                  }}
                ></span>
              </span>
            </Link>
          </nav>
        </div>
      </footer>

      <style jsx>
        {`
          .main-footer-isolation {
            width: 100%;
          }
          
          .frame1196-container229 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: auto;
            min-width: auto;
            align-self: center;
            max-height: 500px;
            min-height: 450px;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: rgba(25, 24, 24, 0.42);
            border-width: 1px;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: calc(var(--dl-layout-space-threeunits) + env(safe-area-inset-bottom, 0px));
            justify-content: center;
            background-color: #faf8f6;
          }
          
          .frame1196-container230 {
            gap: var(--dl-layout-space-sixunits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 1300px;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          
          .frame1196-container231 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          
          .frame1196-text281 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 18px;
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-family: var(--font-nunito);
            font-weight: 500;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }

          .frame1196-container232 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }

          .frame1196-container233 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }

          .frame1196-text282 {
            font-size: 15px;
            font-family: var(--font-nunito);
            margin: 0;
          }

          .frame1196-text283 {
            font-size: 15px;
            font-family: var(--font-nunito);
            margin: 0;
          }

          .frame1196-container234 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }

          .frame1196-text284 {
            font-size: 15px;
            font-family: var(--font-nunito);
            margin: 0;
          }

          .frame1196-text285 {
            font-size: 15px;
            font-family: var(--font-nunito);
            margin: 0;
          }

          .frame1196-text286 {
            font-size: 15px;
            align-self: flex-start;
            text-align: center;
            font-family: var(--font-nunito);
            margin: 0;
          }

          .frame1196-text-bold {
            font-weight: 600;
          }

          .frame1196-icon403 {
            width: 190px;
            height: 5px;
          }

          .frame1196-container235 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            max-height: auto;
            min-height: auto;
            flex-direction: column;
          }

          .frame1196-container236 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 100%;
            align-self: center;
            min-height: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }

          .frame1196-text287 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 18px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 500;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }

          .frame1196-button5 {
            color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
            font-size: 16px;
            max-width: 330px;
            min-width: 170px;
            align-self: center;
            box-shadow: 5px 5px 10px 0px rgba(43, 43, 43, 0.68);
            font-style: normal;
            max-height: 50px;
            min-height: 55px;
            font-family: var(--font-nunito);
            font-weight: 500;
            border-color: rgba(25, 24, 24, 0.35);
            border-radius: 8px;
            letter-spacing: 1px;
            background-color: rgb(40, 40, 40);
          }

          .frame1196-container237 {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          .frame1196-map-wrapper {
            position: relative;
            width: 100%;
            height: 200px;
            overflow: hidden;
            border-radius: 8px;
            background: #f2f2f2;
          }

          .frame1196-google-maps {
            width: 100%;
            height: 100%;
            border: 0;
            display: block;
          }

          .frame1196-map-placeholder {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #303030;
            background: repeating-linear-gradient(-45deg, #f6f6f6, #f6f6f6 10px, #efefef 10px, #efefef 20px);
            cursor: pointer;
            border: 1px solid rgba(0,0,0,0.08);
          }

          .frame1196-container238 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            max-width: 500px;
            margin-top: var(--dl-layout-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
          }

          .frame1196-text288,
          .frame1196-text289,
          .frame1196-text290 {
            color: #000000;
            font-size: 15px;
            font-style: normal;
            font-family: var(--font-nunito);
            font-weight: 500;
            text-decoration: none;
            cursor: pointer;
            transition: color 0.3s ease;
          }

          /* Hover эффекты для навигации в футере */
          .frame1196-text288:hover,
          .frame1196-text289:hover,
          .frame1196-text290:hover {
            color: #87ceeb !important;
          }

          /* Активное состояние навигации */
          .frame1196-nav-active {
            color: #87ceeb !important;
          }

          .frame1196-text289:hover,
          .frame1196-text290:hover {
            color: #87ceeb;
          }


          /* Media queries - точная копия из main page */
          @media (max-width: 991px) {
            .frame1196-container229 {
              margin-top: var(--dl-layout-space-twounits);
              max-height: 100%;
              min-height: 100%;
              padding-left: 0;
              margin-bottom: var(--dl-layout-space-twounits);
              padding-right: 0;
            }

            .frame1196-container230 {
              gap: var(--dl-layout-space-threeunits);
              height: 100%;
              flex-wrap: wrap;
            }

            .frame1196-container231 {
              max-width: 400px;
              align-self: center;
              align-items: flex-start;
              justify-content: flex-start;
            }

            .frame1196-text281 {
              align-self: center;
            }

            .frame1196-container232 {
              justify-content: center;
            }

            .frame1196-container233 {
              align-self: center;
            }

            .frame1196-container234 {
              align-self: center;
              align-items: center;
              justify-content: center;
            }

            .frame1196-text284 {
              text-align: center;
            }

            .frame1196-text286 {
              align-self: center;
            }

            .frame1196-icon403 {
              align-self: center;
            }

            .frame1196-button5 {
              align-self: center;
              margin-right: 0px;
            }

            .frame1196-container237 {
              max-width: 600px;
              align-self: center;
            }

            .frame1196-container238 {
              margin-top: 0px;
              align-items: center;
              justify-content: center;
            }
          }

          @media (max-width: 767px) {
            .frame1196-container229 {
              height: 100%;
              min-height: auto;
              flex-direction: column;
              padding-bottom: calc(var(--dl-layout-space-threeunits) + env(safe-area-inset-bottom, 0px));
            }

            .frame1196-container236 {
              width: auto;
              height: auto;
              max-width: auto;
              min-height: auto;
            }
          }

          @media (max-width: 479px) {
            .frame1196-container229 {
              flex-wrap: wrap;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: calc(var(--dl-layout-space-oneandhalfunits) + env(safe-area-inset-bottom, 0px));
            }

            .frame1196-container230 {
              gap: var(--dl-layout-space-twounits);
            }

            .frame1196-container231 {
              width: 100%;
              height: 100%;
              max-width: 400px;
              align-self: center;
              align-items: center;
              padding-left: 24px;
              padding-right: 24px;
              justify-content: center;
            }

            .frame1196-text281 {
              font-size: 16px;
              align-self: flex-start;
            }

            .frame1196-container232 {
              align-self: flex-start;
              justify-content: flex-start;
            }

            .frame1196-container233 {
              align-self: flex-start;
              align-items: center;
              justify-content: center;
            }

            .frame1196-text282,
            .frame1196-text283 {
              font-size: 13px;
            }

            .frame1196-container234 {
              width: 100%;
              height: 100%;
            }

            .frame1196-text284 {
              width: 100%;
              height: 100%;
              font-size: 13px;
              align-self: center;
              text-align: left;
            }

            .frame1196-text285 {
              width: 100%;
              height: 100%;
              font-size: 13px;
              align-self: center;
            }

            .frame1196-text286 {
              font-size: 13px;
              align-self: flex-start;
              text-align: left;
            }

            .frame1196-icon403 {
              align-self: flex-start;
            }

            .frame1196-container236 {
              width: 100%;
              height: 100%;
              max-width: var(--dl-layout-size-xxlarge);
            }

            .frame1196-text287 {
              font-size: 16px;
            }

            .frame1196-button5 {
              min-height: 50px;
            }

            .frame1196-container238 {
              gap: var(--dl-layout-space-oneandhalfunits);
              margin-top: 0px;
            }

            .frame1196-text288,
            .frame1196-text289,
            .frame1196-text290 {
              font-style: normal;
              font-weight: 400;
            }

            .frame1196-text288 {
              color: #000000;
            }

          }
        `}
      </style>

      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default MainFooter
