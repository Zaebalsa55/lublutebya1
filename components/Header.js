import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import WashingMachineAnimation from './WashingMachineAnimation'
import { PHONE_TEL, PHONE_DISPLAY, PHONE_TEL_2, PHONE_DISPLAY_2 } from '../utils/contacts'
import dynamic from 'next/dynamic'
const PhoneModal = dynamic(() => import('./PhoneModal'), { ssr: false })

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [phoneOpen, setPhoneOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 479)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Пров��ряем, является ли текущая страница страницей статей или одной из статей
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

  return (
    <>
      {/* И��олированный контейнер для хедера */}
      <div className="header-component">
        <header className="frame1196-container101">
          <div className="frame1196-container102">
            <div className="frame1196-container103">
              <WashingMachineAnimation
                className="frame1196-image10"
                width={isMobile ? 141 : 95}
                height={isMobile ? 141 : 92}
              />
              <Link href="/">
                <span className="frame1196-text100 clickable-title">
                  <span className="site-title"><span>Ваше </span><br className="site-title-br" /><span>название</span></span>
                </span>
              </Link>
            </div>
          </div>
          <div className="frame1196-container104">
            <button type="button" aria-label={`Открыть контакты ${PHONE_DISPLAY}`} className="phone-link" onClick={() => setPhoneOpen(true)}>
              <img
                alt="Позвонить"
                src="/ICONS/dla%20hedera%20trubka.svg"
                loading="lazy"
                className="frame1196-image11"
              />
            </button>
            <div
              className={`frame1196-burger-menu ${isMenuOpen ? 'frame1196-burger-open' : ''}`}
              onClick={toggleMenu}
            >
              <div className="frame1196-burger-line"></div>
              <div className="frame1196-burger-line"></div>
              <div className="frame1196-burger-line"></div>
            </div>
          </div>
          <div className="frame1196-obshiy">
            <div className="frame1196-korobki">
              <Link href="/">
                <div className={`${router.pathname === '/' ? 'frame1196-container105' : 'frame1196-container105-inactive'}`}>
                  <span className="frame1196-text101">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Главная',
                      }}
                    ></span>
                  </span>
                </div>
              </Link>
              <Link href="/vikup">
                <div className={`${router.pathname === '/vikup' ? 'frame1196-container105' : 'frame1196-container105-inactive'}`}>
                  <span className="frame1196-text102">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Выкуп б/у машин',
                      }}
                    ></span>
                  </span>
                </div>
              </Link>
              <Link href="/articles">
                <div className={`frame1196-container105-inactive`}>
                  <span className={`frame1196-text103 ${isArticlesPage ? 'frame1196-text103-active' : ''}`}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Статьи',
                      }}
                    ></span>
                  </span>
                </div>
              </Link>
            </div>
            <div className="frame1196-telephonadres">
              <div className="frame1196-container108">
                <button type="button" aria-label={`Открыть контакты ${PHONE_DISPLAY}`} className="phone-link" onClick={() => setPhoneOpen(true)}>
                  <img
                    alt="Позвонить"
                    src="/ICONS/dla%20hedera%20trubka.svg"
                    loading="lazy"
                    className="frame1196-image13"
                  />
                </button>
                <div className="frame1196-container109">
                  <a href={`tel:${PHONE_TEL}`} className="frame1196-text104 phone-number">{PHONE_DISPLAY}</a>
                  <a href={`tel:${PHONE_TEL_2}`} className="frame1196-text105 phone-number">{PHONE_DISPLAY_2}</a>
                </div>
              </div>
              <div className="frame1196-container110">
                <span className="frame1196-text106">
                  <span className="frame1196-text106-bold">Адрес:</span>
                  <span className="frame1196-text106-normal"> пл. Независимости, 1, Одесса, Одесская область, 65000</span>
                </span>
                <span className="frame1196-text107">
                  <span className="frame1196-text107-bold">Пн-Вс:</span>
                  <span className="frame1196-text107-normal"> 9:00-21:00</span>
                </span>
              </div>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="110"
                viewBox="0 0 20 110"
                preserveAspectRatio="none"
                className="frame1196-icon100"
              >
                <path
                  d="M10 0 V110"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="110"
                viewBox="0 0 20 110"
                preserveAspectRatio="none"
                className="frame1196-icon102"
              >
                <path
                  d="M10 0 V110"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <svg
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="frame1196-icon104"
              >
                <path
                  d="M0 10 H330"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <svg
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="frame1196-icon106"
              >
                <path
                  d="M0 10 H330"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
            </div>
          </div>
        </header>

        {/* Боковое меню */}
        <div className={`frame1196-sidebar ${isMenuOpen ? 'frame1196-sidebar-open' : ''}`}>
          <div className="frame1196-sidebar-overlay" onClick={toggleMenu}></div>
          <div className="frame1196-sidebar-content">
            <div className="frame1196-sidebar-header">
              <button type="button" aria-label="Закрыть меню" title="Закрыть меню" className="frame1196-sidebar-close" onClick={toggleMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <nav className="frame1196-sidebar-nav">
              <Link legacyBehavior href="/">
                <a
                  className={`frame1196-sidebar-link ${router.pathname === '/' ? 'frame1196-sidebar-link-active' : ''}`}
                  style={{ color: router.pathname === '/' ? '#87ceeb !important' : 'white !important' }}
                >
                  Главная
                </a>
              </Link>
              <Link legacyBehavior href="/vikup">
                <a
                  className={`frame1196-sidebar-link ${router.pathname === '/vikup' ? 'frame1196-sidebar-link-active' : ''}`}
                  style={{ color: router.pathname === '/vikup' ? '#87ceeb !important' : 'white !important' }}
                >
                  Выкуп б/у машин
                </a>
              </Link>
              <Link legacyBehavior href="/articles">
                <a
                  className={`frame1196-sidebar-link ${isArticlesPage ? 'frame1196-sidebar-link-active' : ''}`}
                  style={{ color: isArticlesPage ? '#87ceeb !important' : 'white !important' }}
                >
                  Статьи
                </a>
              </Link>
            </nav>
            <div className="frame1196-sidebar-contact">
              <div className="frame1196-sidebar-phones">
                <button type="button" aria-label={`Открыть контакты ${PHONE_DISPLAY}`} className="phone-link" onClick={() => setPhoneOpen(true)}>
                  <img
                    alt="Позвонить"
                    src="/ICONS/dla%20hedera%20trubka.svg"
                    loading="lazy"
                    className="frame1196-sidebar-phone-icon"
                  />
                </button>
                <div className="frame1196-sidebar-phone-numbers">
                  <a href={`tel:${PHONE_TEL}`} className="frame1196-sidebar-phone">{PHONE_DISPLAY}</a>
                  <a href={`tel:${PHONE_TEL_2}`} className="frame1196-sidebar-phone">{PHONE_DISPLAY_2}</a>
                </div>
              </div>
              <div className="frame1196-sidebar-address">
                <span className="frame1196-sidebar-address-text">
                  <span className="frame1196-sidebar-address-bold">Адрес:</span>
                  <span className="frame1196-sidebar-address-normal"> пл. Независимости, 1, Одесса, Одесская область, 65000</span>
                </span>
                <span className="frame1196-sidebar-schedule">
                  <span className="frame1196-sidebar-schedule-bold">Пн-Вс:</span>
                  <span className="frame1196-sidebar-schedule-normal"> 9:00-21:00</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>
        {`
          /* Глобальные стили дл�� принуждения цвета в sidebar */
          .frame1196-sidebar-nav a {
            color: white !important;
            font-family: var(--font-nunito), sans-serif !important;
            font-weight: 400 !important;
            font-size: 14px !important;
            line-height: 1.15 !important;
            letter-spacing: 1px !important;
          }
          .frame1196-sidebar-nav a.frame1196-sidebar-link-active {
            color: #87ceeb !important;
          }

          /* Си��хронизированные отступы заголовков статей с контейнером "Полезные статьи" */
          .page-main { padding-top: 0 !important; }
          .page-headertextwashermachine { margin-top: 24px !important; padding-top: 0 !important; }
          .page-text10 { margin-top: 0 !important; }

          /* Переопределение ВСЕХ локальных медиа-запросов статей */
          @media (max-width: 487px) {
            .page-headertextwashermachine { margin-top: 66px !important; }
          }
          @media (max-width: 488px) {
            .page-headertextwashermachine { margin-top: 66px !important; }
          }

          /* Б��льшие экраны: нижний отступ заголовочно��о блока 54px (было 60) */
          @media (min-width: 992px) {
            .page-headertextwashermachine { margin-bottom: 27px !important; }
          }
          /* Доп. диапазон для средних (768–1150): тот же отступ что у "Полезные статьи" */
          @media (min-width: 768px) and (max-width: 1150px) {
            .page-headertextwashermachine { margin-top: 24px !important; }
            .page-text10 { margin-top: 0 !important; }
          }
          /* Средние экраны: тот же отступ что у "Полезные статьи" */
          @media (max-width: 991px) {
            .page-headertextwashermachine { margin-top: 24px !important; margin-bottom: 15px !important; }
            .page-text10 { margin-top: 0 !important; margin-bottom: 15px !important; }
          }
          /* Планшеты: тот же отступ что у "Полезные статьи" */
          @media (max-width: 767px) {
            .page-headertextwashermachine { margin-top: 24px !important; margin-bottom: 15px !important; }
            .page-text10 { margin-top: 0 !important; margin-bottom: 15px !important; }
          }
          /* Мобилк��: то����но как у "Полезные статьи" - 50px + 16px padding = 66px общий отступ */
          @media (max-width: 480px) {
            .page-headertextwashermachine { margin-top: 66px !important; margin-bottom: 15px !important; }
            .page-text10 { margin-top: 0 !important; margin-bottom: 15px !important; }
          }

          /* Настройка размера шрифта подписей к изображениям */
          .page-text19,
          .page-text20,
          .page-text21,
          .page-text22,
          .page-text23,
          .page-text40,
          .page-text45,
          .page-text48 {
            font-size: 14px !important; /* на больших экранах уменьшить на 1 (было 15px) */
          }

          /* Make header 'Статьи' text blue on article pages */
          .frame1196-text103-active {
            color: #87ceeb !important;
            font-weight: 500 !important;
          }

          /* На маленьких экра��ах уменьшить на 2 */
          @media (max-width: 767px) {
            .page-text19,
            .page-text20,
            .page-text21,
            .page-text22,
            .page-text23,
            .page-text40,
            .page-text45,
            .page-text48 {
              font-size: 13px !important; /* на маленьких ��кранах уменьшить на 2 (было 15px) */
            }
          }

          /* Переопред����ение отступов для RelatedArticles ��нутри page-left-main-box */
          .page-left-main-box .related-articles {
            margin-bottom: 30px !important;
            margin-top: var(--dl-layout-space-oneandhalfunits) !important;
          }

          /* Скрываем боковую панель в момент wrap'а */
          @media (max-width: 1300px) {
            .page-dops-info {
              display: none !important;
            }
            .page-frame1299 {
              display: none !important;
            }
          }

          /* Глобальные стили для стиральной машины на мобильных */
          @media (max-width: 479px) {
            .frame1196-image10.washing-machine-wrapper {
              position: absolute !important;
              top: 16px !important;
              left: 0 !important;
              right: 0 !important;
              margin: auto !important;
              z-index: 1000 !important;
              display: flex !important;
              justify-content: center !important;
              padding-top: 0 !important;
              background-color: transparent !important;
              width: 148px !important;
              height: 148px !important;
              transform: translateX(10px) !important;
            }
          }
        `}
      </style>
      <style jsx>
        {`
          /* 📞 Анимация #1: "Incoming Call" (Входящий звонок) - АКТИВНА */
          @keyframes phoneAnimation {
            0%, 100% {
              transform: scale(1) rotate(0deg);
              filter: brightness(1) drop-shadow(0 0 0 rgba(78, 200, 237, 0.7));
            }
            25% {
              transform: scale(1.1) rotate(-3deg);
              filter: brightness(1.1) drop-shadow(0 0 5px rgba(78, 200, 237, 0.5));
            }
            50% {
              transform: scale(1.2) rotate(3deg);
              filter: brightness(1.2) drop-shadow(0 0 10px rgba(78, 200, 237, 0.3));
            }
            75% {
              transform: scale(1.1) rotate(-3deg);
              filter: brightness(1.1) drop-shadow(0 0 5px rgba(78, 200, 237, 0.5));
            }
          }

          /* 🏀 Анимация #2: "Bounce Ring" (Прыгающий звонок)
          @keyframes phoneAnimationBounce {
            0%, 95%, 100% { transform: translateY(0) scale(1); }
            85% { transform: translateY(-8px) scale(1.05); }
            90% { transform: translateY(-4px) scale(1.02); }
          }
          */

          /* 📳 Анимация #3: "Vibrate Alert" (Вибрация)
          @keyframes phoneAnimationVibrate {
            0%, 95%, 100% { transform: translateX(0) rotate(0deg); }
            85% { transform: translateX(-2px) rotate(-1deg); }
            87% { transform: translateX(2px) rotate(1deg); }
            89% { transform: translateX(-1px) rotate(-0.5deg); }
            91% { transform: translateX(1px) rotate(0.5deg); }
            93% { transform: translateX(0) rotate(0deg); }
          }
          */

          /* ✨ Анимация #4: "Glow Pulse" (Светящаяся пульсация)
          @keyframes phoneAnimationGlow {
            0%, 100% {
              filter: brightness(1) drop-shadow(0 0 0 rgba(78, 200, 237, 0.5));
              transform: scale(1);
            }
            50% {
              filter: brightness(1.3) drop-shadow(0 0 12px rgba(78, 200, 237, 0.8));
              transform: scale(1.05);
            }
          }
          */

          /* 💃 Анимация #5: "Swing Dance" (Танцевальное покачивание)
          @keyframes phoneAnimationSwing {
            0%, 100% { transform: rotate(0deg) translateY(0); }
            25% { transform: rotate(5deg) translateY(-2px); }
            50% { transform: rotate(0deg) translateY(-4px); }
            75% { transform: rotate(-5deg) translateY(-2px); }
          }
          */

          /* Уникальный контейнер компонента */
          .header-component {
            width: 100%;
          }

          /* Стили для ссылок */
          .frame1196-container105,
          .frame1196-container106,
          .frame1196-container107 {
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .frame1196-container105:hover,
          .frame1196-container106:hover,
          .frame1196-container107:hover {
            background-color: #87ceeb;
          }

          /* Основные стили хедер�� */
          .frame1196-container101 {
            width: 100%;
            height: auto;
            display: flex;
            min-width: 100%;
            max-height: 120px;
            min-height: 115px;
            align-items: center;
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            justify-content: space-between;
            background-color: #232020;
          }
          .frame1196-container102 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .frame1196-container103 {
            gap: var(--dl-layout-space-threeunits);
            flex: 0 0 auto;
            width: 420px;
            height: 91px;
            display: flex;
            position: relative;
            align-items: center;
            white-space: nowrap;
            border-radius: var(--dl-layout-radius-radius4);
            overflow-wrap: break-word;
            flex-direction: row;
            justify-content: flex-start;
            padding: 0 20px;
          }
          .frame1196-text100 {
            color: rgb(255, 255, 255);
            font-size: 23px;
            word-wrap: break-word;
            font-style: normal;
            font-family: var(--font-nunito);
            font-weight: 400;
            white-space: normal;
            letter-spacing: 1.5px;
          }
          .site-title-br { display: none; }
          @media (max-width: 479px) { .site-title-br { display: inline; } }

          .clickable-title {
            cursor: pointer;
            transition: opacity 0.2s ease;
          }

          .clickable-title:hover {
            opacity: 0.8;
          }
          .frame1196-image10 {
            width: 95px;
            height: 92px;
            object-fit: cover;
            margin-right: 15px;
          }
          .frame1196-container104 {
            display: none;
            align-items: center;
            justify-content: space-between;
          }
          .frame1196-image11 {
            width: 200px;
            object-fit: cover;
            animation: phoneAnimation 5s infinite;
          }
          .phone-link { display: inline-flex; align-items: center; background: transparent; border: 0; padding: 0; cursor: pointer; }
          .phone-number { background: transparent; border: 0; padding: 0; text-decoration: none; color: inherit; cursor: pointer; user-select: text; -webkit-user-select: text; }
          .phone-number:hover { opacity: 0.9; }
          .frame1196-obshiy {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .frame1196-korobki {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .frame1196-container105 {
            flex: 0 0 auto;
            width: 183px;
            height: 50px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
            background-color: #87ceeb;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .frame1196-container105:hover {
            background-color: #5bb8e8;
            box-shadow: 0 0 15px rgba(135, 206, 235, 0.6);
            transform: translateY(-1px);
          }
          .frame1196-container105-inactive {
            flex: 0 0 auto;
            width: 183px;
            height: 50px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
            background-color: rgba(46, 51, 55, 0.41);
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .frame1196-container105-inactive:hover {
            background-color: #87ceeb;
            box-shadow: 0 0 15px rgba(135, 206, 235, 0.6);
            transform: translateY(-1px);
          }
          .frame1196-text101 {
            color: #ffffff;
            font-size: 14px;
            font-family: var(--font-nunito);
            font-weight: 400;
            line-height: 1.15;
            letter-spacing: 1px;
          }
          .frame1196-container106 {
            flex: 0 0 auto;
            width: 183px;
            height: 50px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
            background-color: rgba(46, 51, 55, 0.41);
          }
          .frame1196-text102 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: var(--font-nunito);
            font-weight: 400;
            line-height: 1.15;
            letter-spacing: 1px;
          }
          .frame1196-container107 {
            flex: 0 0 auto;
            width: 183px;
            height: 50px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            justify-content: center;
            background-color: rgba(46, 51, 55, 0.41);
          }
          .frame1196-text103 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: var(--font-nunito);
            font-weight: 400;
            line-height: 1.15;
            letter-spacing: 1px;
          }
          .frame1196-telephonadres {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 513px;
            height: 75px;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-oneandhalfunits);
            background-color: rgba(46, 51, 55, 0.41);
          }
          .frame1196-container108 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .frame1196-image13 {
            width: 33px;
            height: 32px;
            align-self: center;
            object-fit: cover;
            animation: phoneAnimation 5s infinite;
          }
          .frame1196-container109 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .frame1196-text104 {
            fill: rgb(255, 255, 255);
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-style: normal;
            font-family: var(--font-roboto);
            font-weight: 400;
            letter-spacing: 1.5px;
          }
          .frame1196-text105 {
            fill: rgb(255, 255, 255);
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-style: normal;
            font-family: var(--font-roboto);
            font-weight: 400;
            letter-spacing: 1.5px;
          }
          .frame1196-container110 {
            gap: 12px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .frame1196-text106 {
            color: rgb(255, 255, 255);
            font-size: 12px;
            align-self: center;
            font-family: var(--font-roboto);
            font-weight: 300;
            letter-spacing: 1.5px;
          }
          .frame1196-text106-bold {
            font-weight: 500;
          }
          .frame1196-text106-normal {
            font-weight: 300;
          }
          .frame1196-text107 {
            fill: rgb(255, 255, 255);
            color: rgb(255, 255, 255);
            font-size: 12px;
            align-self: flex-start;
            font-family: var(--font-roboto);
            font-weight: 300;
            letter-spacing: 1.5px;
            text-align: left;
          }
          .frame1196-text107-bold {
            font-weight: 500;
          }
          .frame1196-text107-normal {
            font-weight: 300;
          }
          .frame1196-icon100 {
            left: -9px;
            width: 5px;
            bottom: -1px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon102 {
            top: -2px;
            right: -8px;
            width: 5px;
            height: 100%;
            position: absolute;
          }
          .frame1196-icon104 {
            top: -10px;
            right: -1px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .frame1196-icon106 {
            left: 0px;
            width: 100%;
            bottom: -10px;
            height: 5px;
            position: absolute;
          }

          /* Стили для бургер-меню */
          .frame1196-burger-menu {
            width: 35px;
            height: 35px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            cursor: pointer;
            padding: 5px;
            position: relative;
          }

          .frame1196-burger-line {
            width: 100%;
            height: 3px;
            background-color: white;
            border-radius: 2px;
            transition: all 0.3s ease;
            transform-origin: center;
          }

          /* Анимация бургер меню */
          .frame1196-burger-open .frame1196-burger-line {
            background-color: #5FCDEE;
          }

          .frame1196-burger-open .frame1196-burger-line:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
          }

          .frame1196-burger-open .frame1196-burger-line:nth-child(2) {
            opacity: 0;
          }

          .frame1196-burger-open .frame1196-burger-line:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
          }

          /* Стили для боковой панели */
          .frame1196-sidebar {
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            z-index: 1000;
            pointer-events: none;
            transition: opacity 0.3s ease;
            opacity: 0;
          }

          .frame1196-sidebar-open {
            pointer-events: all;
            opacity: 1;
          }

          .frame1196-sidebar-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
          }

          .frame1196-sidebar-content {
            position: absolute;
            top: 0;
            right: 0;
            width: 300px;
            height: 100%;
            background-color: #232020;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            display: flex;
            flex-direction: column;
          }

          .frame1196-sidebar-open .frame1196-sidebar-content {
            transform: translateX(0);
          }

          .frame1196-sidebar-header {
            padding: 20px;
            display: flex;
            justify-content: flex-end;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .frame1196-sidebar-close {
            background: none;
            border: none;
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .frame1196-sidebar-nav {
            padding: 40px 20px 20px 20px;
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .frame1196-sidebar-link {
            color: white !important;
            text-decoration: none !important;
            font-size: 14px;
            font-family: var(--font-nunito);
            font-weight: 400;
            line-height: 1.15;
            letter-spacing: 1px;
            padding: 15px 20px;
            border-radius: 8px;
            background-color: rgba(46, 51, 55, 0.41);
            text-align: center;
            transition: all 0.3s ease;
            display: block;
          }

          .frame1196-sidebar-nav a {
            color: white !important;
            text-decoration: none !important;
          }

          .frame1196-sidebar-nav a:visited {
            color: white !important;
          }

          .frame1196-sidebar-nav a:link {
            color: white !important;
          }

          .frame1196-sidebar-link:hover {
            background-color: #87ceeb;
            color: white !important;
          }

          .frame1196-sidebar-link-active {
            color: #87ceeb !important;
            background-color: rgba(135, 206, 235, 0.2) !important;
          }

          .frame1196-sidebar-link-active:hover {
            color: #87ceeb !important;
            background-color: rgba(135, 206, 235, 0.3) !important;
          }

          .frame1196-sidebar-nav a.frame1196-sidebar-link-active {
            color: #87ceeb !important;
          }

          .frame1196-sidebar-nav a.frame1196-sidebar-link-active:visited {
            color: #87ceeb !important;
          }

          /* Стили для контактной информации в sidebar */
          .frame1196-sidebar-contact {
            padding: 0 20px 20px 20px;
            margin-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .frame1196-sidebar-phones {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 20px;
          }

          .frame1196-sidebar-phone-icon {
            width: 24px;
            height: 24px;
            object-fit: cover;
            animation: phoneAnimation 5s infinite;
          }

          .frame1196-sidebar-phone-numbers {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .frame1196-sidebar-phone {
            color: white;
            font-size: 16px;
            font-family: var(--font-roboto);
            font-weight: 400;
            letter-spacing: 1px;
            text-decoration: none;
            user-select: text;
            -webkit-user-select: text;
            cursor: text;
          }

          .frame1196-sidebar-address {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }

          .frame1196-sidebar-address-text {
            color: white;
            font-size: 14px;
            font-family: var(--font-roboto);
            font-weight: 300;
            line-height: 1.4;
            text-align: center;
          }

          .frame1196-sidebar-address-bold {
            font-weight: 500;
          }

          .frame1196-sidebar-address-normal {
            font-weight: 300;
          }

          .frame1196-sidebar-schedule {
            color: white;
            font-size: 14px;
            font-family: var(--font-roboto);
            font-weight: 300;
            text-align: center;
          }

          .frame1196-sidebar-schedule-bold {
            font-weight: 500;
          }

          .frame1196-sidebar-schedule-normal {
            font-weight: 300;
          }

          /* Меди��-запросы */
          @media (max-width: 1700px) {
            .frame1196-korobki {
              display: none;
            }
            .frame1196-burger-menu {
              display: flex;
            }
            /* Place burger left of contacts with ~40px gap */
            .frame1196-container101 { justify-content: flex-start; }
            .frame1196-container104 {
              gap: 8px;
              width: auto;
              height: 62px;
              display: flex;
              align-items: center;
              border-radius: 8px;
              justify-content: flex-start;
              background-color: transparent;
              order: 2;
              margin-left: auto; /* push burger group to the right side */
            }
            .frame1196-obshiy {
              order: 3;
              margin-left: 40px; /* gap between burger and contacts */
            }
            .frame1196-image11 {
              display: none;
            }
          }

          @media (max-width: 1150px) {
            /* Reset layout for mobile/tablet */
            .frame1196-container101 { justify-content: space-between; }
            .frame1196-container104 { margin-left: 0; order: initial; }
            .frame1196-obshiy { margin-left: 0; }
            .frame1196-container103 {
              gap: calc(var(--dl-layout-space-oneandhalfunits) + 10px);
              width: 340px;
              padding: 0 15px;
            }
            .frame1196-container104 {
              gap: 16px;
              width: 120px;
              height: 62px;
              display: flex;
              align-items: center;
              border-radius: 8px;
              justify-content: center;
              background-color: rgba(46, 51, 55, 0.41);
            }
            .frame1196-obshiy {
              display: none;
            }
            .frame1196-image11 {
              width: 30px;
              object-fit: cover;
              animation: phoneAnimation 5s infinite;
              display: block;
            }
          }

          @media (max-width: 767px) {
            .frame1196-container103 {
              gap: var(--dl-layout-space-twounits);
              width: auto;
              height: auto;
              flex-direction: row;
              justify-content: flex-start;
              padding: 0 15px;
              min-width: 280px;
            }
            .frame1196-text100 {
              font-size: 20px;
              flex-shrink: 0;
            }
            .frame1196-container104 {
              width: 111px;
            }
            .frame1196-image11 {
              width: 30px;
              object-fit: cover;
              animation: phoneAnimation 5s infinite;
            }
          }

          @media (max-width: 479px) {
            .frame1196-container101 {
              height: auto;
              min-height: 115px;
              padding-left: 16px;
              padding-right: 16px;
              flex-wrap: nowrap;
              justify-content: space-between;
              position: relative;
            }
            .frame1196-container102 {
              flex: 1;
              min-width: 0;
            }
            .frame1196-container103 {
              gap: 8px;
              width: 100%;
              height: auto;
              position: relative;
              align-self: center;
              max-width: none;
              min-width: 0;
              flex-direction: row;
              justify-content: flex-start;
              padding: 0 5px;
              flex: 1;
            }
            .frame1196-text100 {
              width: 88px;
              font-size: 16px;
              max-width: 88px;
              min-width: 0;
              margin-right: 0px;
              flex-shrink: 1;
              white-space: normal;
              overflow: visible;
              text-overflow: clip;
              line-height: 1.2;
            }
            .frame1196-image10 {
              width: 127px !important;
              height: 127px !important;
              position: absolute;
              top: 50% !important;
              left: 50% !important;
              transform: translate(-50%, 7px) !important;
              z-index: 1000 !important;
              flex-shrink: 0;
              display: block !important;
              background-color: transparent;
            }
            .frame1196-container104 {
              gap: 24px;
              width: auto;
              height: auto;
              align-self: center;
              flex-shrink: 0;
              background-color: transparent;
            }
            .frame1196-image11 {
              width: 28px;
              height: 26px;
              object-fit: cover;
              animation: phoneAnimation 5s infinite;
            }
            .frame1196-burger-menu {
              width: 30px;
              height: 30px;
              padding: 3px;
            }
          }

          /* Дополнительные стили для очень маленьких экранов */
          @media (max-width: 320px) {
            .frame1196-container101 {
              padding-left: 16px;
              padding-right: 16px;
              min-height: 115px;
              justify-content: space-between;
            }
            .frame1196-container103 {
              gap: 4px;
              padding: 0 2px;
            }
            .frame1196-text100 {
              font-size: 14px;
              width: 88px;
              max-width: 88px;
              white-space: normal;
              line-height: 1.2;
            }
            .frame1196-container104 {
              gap: 24px;
              background-color: transparent;
            }
            .frame1196-image11 {
              width: 28px;
              height: 26px;
              animation: phoneAnimation 5s infinite;
            }
            .frame1196-burger-menu {
              width: 30px;
              height: 30px;
              padding: 3px;
            }
          }
        `}
      </style>
      <PhoneModal isOpen={phoneOpen} onClose={() => setPhoneOpen(false)} />
    </>
  )
}

export default Header
