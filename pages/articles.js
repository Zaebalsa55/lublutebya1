import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import MainFooter from '../components/MainFooter'
import dynamic from 'next/dynamic'
const OrderModal = dynamic(() => import('../components/OrderModal'), { ssr: false })
import QuestionModal from '../components/QuestionModal'
import SEOHead from '../components/SEOHead'
import Breadcrumbs from '../components/Breadcrumbs'
import { getSEOData } from '../utils/seoConfig'

const Articles = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('care')
  const router = useRouter()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const openQuestionModal = () => setIsQuestionModalOpen(true)
  const closeQuestionModal = () => setIsQuestionModalOpen(false)

  const problemArticles = [
    { title: 'Стиральная машина не сливает воду', href: '/neslivaetvodu', image: '/problems 2/11-300h.webp', alt: 'Стиральная машина не сливает воду' },
    { title: 'Стиральная машина не греет воду', href: '/negreetvodu', image: '/problems 2/21-300h.webp', alt: 'Стиральная машина не нагревает воду' },
    { title: 'Стиральная машина протекает', href: '/protekaet', image: '/problems 2/31-300h.webp', alt: 'Стиральная машина протекает' },
    { title: 'Стиральная машина шумит при отжиме', href: '/silnoshumit', image: '/problems/4-300h.webp', alt: 'Стиральная машина шумит при отжиме' },
    { title: 'Стиральная машина не включается', href: '/nevkluchaetsa', image: '/problems 2/51-300h.webp', alt: 'Стиральная машина не включается' },
    { title: 'Стиральная машина зависает на программе', href: '/zavisaetnaprogramme', image: '/problems 2/61-300h.webp', alt: 'Стиральная машина зависает на программе' },
    { title: 'Стиральная машина не отжимает', href: '/neotjimaet', image: '/problems 2/71-300h.webp', alt: 'Стиральная машина не отжимает' },
    { title: 'Стиральная машина не набирает воду', href: '/nenabiraetvodu', image: '/problems/8-300h.webp', alt: 'Стиральная машина не набирает воду' },
    { title: 'У стиральной машины не открывается ��верца', href: '/neotkrivaetsadverca', image: '/problems 2/91-300h.webp', alt: 'Не открывается дверца стиральной машины' },
    { title: 'Стиральная машина не крутит барабан', href: '/nekrutitbaraban', image: '/problems/10-300h.webp', alt: 'Стиральная машина не крутит барабан' }
  ]

  const generalArticles = [
    { title: 'Как избавиться от жирных пятен на одежде в домашних условиях?', href: '/jirniepyatna', description: 'Практическая инструкция по удалению жирных пятен с разных тканей в домашних условиях', image: '/100x100/jir.png' },
    { title: 'Как самостоятельно удалить жвачку с одежды?', href: '/jvachka', description: 'Пошаговые способы и лайфхаки удаления застывшей жвачки с ткани', image: '/100x100/jvanik.png' },
    { title: 'Как удалить пятна крови с одежды без следов?', href: '/vlapalisvkrov', description: 'Советы по быстрому и безопасному выведению пятен крови', image: '/100x100/krov.png' },
    { title: 'Ка�� правильно стирать пуховик в автоматической стиральной машине?', href: '/puhovik', description: 'Руководство по стирке пуховиков: подготовка, выбор режима и моющего средства', image: '/100x100/puhovik.png' }
  ]

  const seoData = getSEOData('/articles')
  const baseUrl = 'https://sosamba3.vercel.app'

  return (
    <>
      <main className="articles-container">
        <SEOHead
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords}
          canonical={`${baseUrl}/articles`}
        />
        <Header />

        <Breadcrumbs style="white-left" />

        <section className="articles-hero">
          <div className="articles-hero-content">
            <h1 className="articles-title"><span className="articles-title-blue">Полезные </span><span className="articles-title-black">статьи</span></h1>
            <p className="articles-subtitle">Экспертные советы по ремонту стиральных машин и уходу за одеждой</p>
          </div>
        </section>

        <section className="articles-switcher-section">
          <div className="articles-tabs">
            <button className={`tab-button ${activeTab === 'care' ? 'active' : ''}`} onClick={() => setActiveTab('care')}>
              <div className="tab-content">
                <h3 className="tab-title">Уход за одеждой</h3>
                <p className="tab-subtitle">Практические советы по стирке и выведению различных пятен</p>
              </div>
            </button>
            <button className={`tab-button ${activeTab === 'problems' ? 'active' : ''}`} onClick={() => setActiveTab('problems')}>
              <div className="tab-content">
                <h3 className="tab-title">Проблемы стиральных машин</h3>
                <p className="tab-subtitle">Подробные руководства по диагностике и решению неисправностей</p>
              </div>
            </button>
          </div>
        </section>

        <section className="articles-section">
          <div className="articles-cards-grid">
            {activeTab === 'care'
              ? generalArticles.map((article, index) => (
                  <Link legacyBehavior href={article.href} key={index}>
                    <a className="floating-card general-card">
                      <div className="card-image-wrapper">
                        <img alt={article.title} src={article.image} loading="lazy" className="card-image" />
                      </div>
                      <div className="card-content">
                        <h3 className="card-title">{article.title}</h3>
                        <p className="card-description">{article.description}</p>
                        <div className="card-button"><span className="button-text">Читать</span></div>
                      </div>
                    </a>
                  </Link>
                ))
              : problemArticles.map((article, index) => (
                  <Link legacyBehavior href={article.href} key={index}>
                    <a className="floating-card problem-card">
                      <div className="card-image-wrapper">
                        <img alt={article.alt} src={article.image} loading="lazy" className="card-image" />
                      </div>
                      <div className="card-content">
                        <h3 className="card-title">{article.title}</h3>
                        <div className="card-button"><span className="button-text">Читать</span></div>
                      </div>
                    </a>
                  </Link>
                ))}
          </div>
        </section>

        <MainFooter />
        <OrderModal isOpen={isModalOpen} onClose={closeModal} />
        <QuestionModal isOpen={isQuestionModalOpen} onClose={closeQuestionModal} />
      </main>

      <style jsx>{`
          :global(.breadcrumbs-container),
          :global(.breadcrumbs-container.white-left) {
            margin-top: 0 !important;
          }
          .articles-container {
            width: 100%;
            min-height: 100vh;
            min-height: 100dvh;
            background-color: #f8f9fa;
            font-family: var(--font-nunito), sans-serif;
          }

          /* Hero */
          .articles-hero {
            background: transparent;
            padding: 16px 16px 20px;
            text-align: center;
            margin-top: 8px;
          }
          .articles-hero-content { max-width: 800px; margin: 0 auto; }
          .articles-title { font-size: 35px; font-family: var(--font-nunito), sans-serif; font-weight: 500; margin-bottom: 16px; text-align: center; }
          .articles-title-blue { color: #87ceeb; font-weight: 600; }
          .articles-title-black { color: var(--dl-color-theme-neutral-dark); }
          .articles-subtitle { font-size: 0.9rem; opacity: 0.9; font-family: var(--font-nunito), sans-serif; line-height: 1.6; color: #333333; }

          /* Tabs */
          .articles-switcher-section { padding: 24px 16px 16px; max-width: 1000px; margin: 0 auto; }
          .articles-tabs { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px; }
          .tab-button { background: white; border: 2px solid #e0e0e0; border-radius: 15px; padding: 14px 16px; cursor: pointer; transition: all .3s ease; text-align: left; box-shadow: 0 4px 15px rgba(0,0,0,.05); position: relative; overflow: hidden; }
          .tab-button:hover { border-color: #87ceeb; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,.1); }
          .tab-button.active { border-color: #4EC8ED; background: linear-gradient(135deg, #4EC8ED 0%, #87ceeb 100%); color: white; transform: translateY(-3px); box-shadow: 0 10px 30px rgba(78,200,237,.3); }
          .tab-content { position: relative; z-index: 2; }
          .tab-title { font-size: 1.1rem; font-weight: 500; margin-bottom: 6px; font-family: var(--font-nunito), sans-serif; font-style: normal; transition: color .3s ease; }
          .tab-button.active .tab-title { color: white; }
          .tab-subtitle { font-size: 0.85rem; line-height: 1.4; opacity: .8; font-family: var(--font-nunito), sans-serif; font-style: normal; transition: color .3s ease; }
          .tab-button.active .tab-subtitle { color: white; opacity: .9; }

          /* Articles */
          .articles-section { padding: 24px 16px 48px; max-width: 1400px; margin: 0 auto; }
          .articles-cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px 16px; padding: 10px 0; }

          /* Cards */
          .floating-card { display: block; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 12px 28px rgba(0,0,0,.12); transition: all .4s cubic-bezier(0.175,0.885,0.32,1.275); transform: rotate(.5deg) translateY(2px); text-decoration: none; color: inherit; position: relative; min-height: 260px; }
          .floating-card:hover { transform: rotate(0deg) translateY(-6px) scale(1.01); box-shadow: 0 18px 40px rgba(0,0,0,.15); z-index: 10; }
          .floating-card:nth-child(even), .floating-card:nth-child(3n) { transform: rotate(.5deg) translateY(2px); }
          .floating-card:nth-child(even):hover, .floating-card:nth-child(3n):hover { transform: rotate(0deg) translateY(-6px) scale(1.01); }

          .card-image-wrapper { width: 100%; height: 120px; overflow: hidden; background: linear-gradient(45deg, #f0f0f0, #e0e0e0); display: flex; align-items: center; justify-content: center; }
          .card-image { width: 100%; height: 100%; object-fit: cover; transition: transform .3s ease; }
          .floating-card:hover .card-image { transform: scale(1.04); }

          .card-content { padding: 20px; display: flex; flex-direction: column; height: calc(100% - 120px); }
          .card-title { font-size: 1rem; font-weight: 500; color: #232020; margin-bottom: 10px; line-height: 1.3; font-family: var(--font-nunito), sans-serif; flex-grow: 1; }
          .card-description { font-size: 0.85rem; color: #333333; line-height: 1.4; margin-bottom: 15px; font-family: var(--font-nunito), sans-serif; font-style: normal; font-weight: 300; }

          .card-button { align-self: flex-start; margin-top: auto; background: linear-gradient(45deg, #4EC8ED, #87ceeb); color: white; padding: 6px 12px; border-radius: 20px; font-size: .8rem; font-weight: 400; font-family: var(--font-roboto), sans-serif; transition: all .3s ease; box-shadow: 0 2px 8px rgba(78,200,237,.3); }
          .floating-card:hover .card-button { background: linear-gradient(45deg, #87ceeb, #5bb8e8); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(78,200,237,.4); }
          .button-text { display: block; }

          /* Responsive */
          @media (max-width: 768px) {
            .articles-container { background-color: white; }
            .articles-hero { background: transparent; padding: 16px 15px 18px; margin-top: 8px; }
            .articles-title { font-size: 35px; }
            .articles-subtitle { color: #666; opacity: 1; font-size: 0.9rem; }

            .articles-tabs { grid-template-columns: 1fr; gap: 15px; }
            .tab-button { padding: 16px 14px; }
            .tab-title { font-size: 1.1rem; font-family: var(--font-nunito), sans-serif; font-style: normal; font-weight: 500; }
            .tab-subtitle { font-size: 0.85rem; font-family: var(--font-nunito), sans-serif; font-style: normal; }

            .articles-switcher-section { padding: 30px 15px 15px; background-color: white; }
            .articles-cards-grid { grid-template-columns: 1fr; gap: 20px; }
            .articles-section { padding: 30px 15px 60px; background-color: white; }
            .floating-card { min-height: 240px; }
          }

          @media (max-width: 480px) {
            .articles-container { background-color: white; }
            .articles-hero { background: transparent; padding: 16px 15px 16px; margin-top: 50px; }
            .articles-title { font-size: 24px; }
            .articles-subtitle { color: #666; opacity: 1; font-size: 0.85rem; }

            .tab-button { padding: 14px 12px; }
            .tab-title { font-size: 1rem; }
            .tab-subtitle { font-size: 0.8rem; }

            .articles-switcher-section { padding: 25px 15px 10px; }

            .floating-card { min-height: 220px; transform: rotate(.5deg) translateY(2px); }
            .floating-card:hover { transform: rotate(0deg) translateY(-6px) scale(1.01); }

            .card-content { padding: 16px; }
            .card-image-wrapper { height: 110px; }
            .card-title { font-size: 0.95rem; font-family: var(--font-nunito), sans-serif; }
            .card-description { font-size: 0.85rem; font-family: var(--font-nunito), sans-serif; font-style: normal; }
          }
        `}</style>
    </>
  )
}

export default Articles
