import React, { useState } from 'react'
import Header from '../components/Header'
import MainFooter from '../components/MainFooter'
import SEOHead from '../components/SEOHead'
import Breadcrumbs from '../components/Breadcrumbs'
import dynamic from 'next/dynamic'
const SellModal = dynamic(() => import('../components/SellModal'), { ssr: false })
import { getSEOData } from '../utils/seoConfig'
import { getServiceData, getLocalBusinessData } from '../utils/structuredData'

const Vikup = (props) => {
  const [isSellModalOpen, setIsSellModalOpen] = useState(false)

  const openSellModal = () => setIsSellModalOpen(true)
  const closeSellModal = () => setIsSellModalOpen(false)

  const seoData = getSEOData('/vikup')
  const baseUrl = 'https://sosamba3.vercel.app'
  const serviceData = getServiceData(
    'Выкуп б/у стиральнх машин',
    'Выкупаем б/у стиральные машины в Одессе дорого. Любые марки и состояние.',
    `${baseUrl}/vikup`
  )
  const localBusinessData = getLocalBusinessData(`${baseUrl}/vikup`)
  const structuredData = [serviceData, localBusinessData]

  return (
    <>
      <div className="page1-container10">
        <SEOHead
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords}
          canonical={`${baseUrl}/vikup`}
          structuredData={structuredData}
        />
        <Header />
        <Breadcrumbs style="white-left" />
        <div className="page1-main-posle-hedera">
          <div className="page1-container11">
            <div className="page1-container12">
              <div className="page1-container13">
                <h1 className="page1-text10">
                  <span className="page1-text10-blue">Выкуп </span>
                  <span className="page1-text10-black">б/у машин</span>
                  <br></br>
                </h1>
                <p className="page1-text13">
                  <span className="page1-text14">
                    Не выбрасывайте стиральную машину
                  </span>
                  <span className="page1-text15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="page1-text16">
                    — продайте нам и получите реальную выгоду! Мы покупаем любые
                    стиральные машины —
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="page1-text18">рабочие</span>
                  <span>
                    ,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="page1-text20">неисправные</span>
                  <span>
                    ,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="page1-text22">старые модели</span>
                  <span>
                    .
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="page1-text24">
                    Оцениваем справедливо, забираем сами в удобное время,
                    никаких хлопот с вашей стороны.
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
              <div className="page1-hero-image">
                <img
                  alt="мастер по ремонту стиральных машин жмет руку покупателю"
                  src="/vikupsochi-1500w.webp"
                  loading="lazy"
                  decoding="async"
                  className="page1-image2"
                />
              </div>
            </div>
            <div className="page1-container14">
              <h2 className="page1-text26">
                <span>Почему лучше не выбрасывать</span>
                <br></br>
              </h2>
            </div>
            <div className="page1-container15">
              <div className="page1-container16">
                <img alt="image" src="/ICONS/23222.svg" loading="lazy" className="page1-image3" />
                <div className="page1-container17">
                  <h3 className="page1-text29">Вместо мусора - польза</h3>
                  <svg
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 110 20"
                    preserveAspectRatio="none"
                    className="page1-icon10"
                  >
                    <defs>
                      <linearGradient
                        id="grad253"
                        x1="0"
                        x2="110"
                        y1="0"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#303030"></stop>
                        <stop offset="100%" stopColor="#4EC8ED"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 10 H110"
                      fill="none"
                      stroke="url(#grad253)"
                      strokeWidth="0.5"
                      vectorEffect="non-scaling-stroke"
                      strokeDasharray="11 11"
                    ></path>
                  </svg>
                  <p className="page1-text30">
                    Мы выкупим вашу машинку и используем её на благо другим
                  </p>
                </div>
              </div>
              <div className="page1-container18">
                <img alt="image" src="/ICONS/res3.svg" loading="lazy" className="page1-image4" />
                <div className="page1-container19">
                  <h3 className="page1-text31">Экономия времени</h3>
                  <svg
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 110 20"
                    preserveAspectRatio="none"
                    className="page1-icon16"
                  >
                    <defs>
                      <linearGradient
                        id="grad253"
                        x1="0"
                        x2="110"
                        y1="0"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#303030"></stop>
                        <stop offset="100%" stopColor="#4EC8ED"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 10 H110"
                      fill="none"
                      stroke="url(#grad253)"
                      strokeWidth="0.5"
                      vectorEffect="non-scaling-stroke"
                      strokeDasharray="11 11"
                    ></path>
                  </svg>
                  <p className="page1-text32">
                    Мы сами приезжаем, аккуратно выносим
                  </p>
                </div>
              </div>
              <div className="page1-container20">
                <img alt="image" src="/ICONS/zamena1.svg" loading="eager" className="page1-image5" />
                <div className="page1-container21">
                  <h3 className="page1-text33">
                    <span>Оплата<br/>наличными</span>
                  </h3>
                  <svg
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 110 20"
                    preserveAspectRatio="none"
                    className="page1-icon22"
                  >
                    <defs>
                      <linearGradient
                        id="grad253"
                        x1="0"
                        x2="110"
                        y1="0"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#303030"></stop>
                        <stop offset="100%" stopColor="#4EC8ED"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 10 H110"
                      fill="none"
                      stroke="url(#grad253)"
                      strokeWidth="0.5"
                      vectorEffect="non-scaling-stroke"
                      strokeDasharray="11 11"
                    ></path>
                  </svg>
                  <p className="page1-text36">
                    Вы получаете реальную выгоду — деньги сразу на месте
                  </p>
                </div>
              </div>
              <svg
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="page1-icon28"
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
              <svg
                width="330"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 330 20"
                preserveAspectRatio="none"
                className="page1-icon30"
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
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="110"
                viewBox="0 0 20 110"
                preserveAspectRatio="none"
                className="page1-icon32"
              >
                <path
                  d="M10 0 V110"
                  fill="none"
                  stroke="#000000"
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
                className="page1-icon34"
              >
                <path
                  d="M10 0 V110"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <svg
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                height="10"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
                className="page1-icon36"
              >
                <circle
                  r="4"
                  cx="5"
                  cy="5"
                  fill="#4EC8ED"
                  stroke="#303030"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                ></circle>
              </svg>
              <svg
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                height="10"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
                className="page1-icon38"
              >
                <circle
                  r="4"
                  cx="5"
                  cy="5"
                  fill="#4EC8ED"
                  stroke="#303030"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                ></circle>
              </svg>
              <svg
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                height="10"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
                className="page1-icon40"
              >
                <circle
                  r="4"
                  cx="5"
                  cy="5"
                  fill="#4EC8ED"
                  stroke="#303030"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                ></circle>
              </svg>
              <svg
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                height="10"
                viewBox="0 0 10 10"
                preserveAspectRatio="none"
                className="page1-icon42"
              >
                <circle
                  r="4"
                  cx="5"
                  cy="5"
                  fill="#4EC8ED"
                  stroke="#303030"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
        <div className="page1-container22">
          <h2 className="page1-text37">
            <span>Цены</span>
            <br></br>
          </h2>
        </div>
        <p className="page1-text40">
          Стоимость зависит от состояния и колличества лет в експлуатации*
        </p>
        <article className="page1-container23">
          <div className="page1-container24">
            <span className="page1-text41">До 5 лет</span>
            <div className="page1-container25">
              <p className="page1-text42">От 800 до 1500 грн</p>
              <svg
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 110 20"
                preserveAspectRatio="none"
                className="page1-icon44"
              >
                <defs>
                  <linearGradient
                    id="grad253"
                    x1="0"
                    x2="110"
                    y1="0"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#303030"></stop>
                    <stop offset="100%" stopColor="#4EC8ED"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M0 10 H110"
                  fill="none"
                  stroke="url(#grad253)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <div className="page1-container26 clickable-button" onClick={openSellModal}>
                <div className="page1-container27">
                  <span className="page1-text43">Продать</span>
                </div>
                <img alt="image" src="/ICONS/29.svg" loading="eager" className="page1-image6" />
              </div>
            </div>
          </div>
          <svg
            width="330"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 330 20"
            preserveAspectRatio="none"
            className="page1-icon50"
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
          <svg
            width="330"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 330 20"
            preserveAspectRatio="none"
            className="page1-icon52"
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
          <svg
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            height="110"
            viewBox="0 0 20 110"
            preserveAspectRatio="none"
            className="page1-icon54"
          >
            <path
              d="M10 0 V110"
              fill="none"
              stroke="#000000"
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
            className="page1-icon56"
          >
            <path
              d="M10 0 V110"
              fill="none"
              stroke="#000000"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="11 11"
            ></path>
          </svg>
          <svg
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 10 20"
            preserveAspectRatio="none"
            className="page1-icon58"
          >
            <circle
              r="3.75"
              cx="5"
              cy="10"
              fill="#606060"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          <svg
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 10 20"
            preserveAspectRatio="none"
            className="page1-icon60"
          >
            <circle
              r="3.75"
              cx="5"
              cy="10"
              fill="#606060"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          <svg
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 10 20"
            preserveAspectRatio="none"
            className="page1-icon62"
          >
            <circle
              r="3.75"
              cx="5"
              cy="10"
              fill="#606060"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          <svg
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 10 20"
            preserveAspectRatio="none"
            className="page1-icon64"
          >
            <circle
              r="3.75"
              cx="5"
              cy="10"
              fill="#606060"
              vectorEffect="non-scaling-stroke"
            ></circle>
          </svg>
          <div className="page1-container28">
            <span className="page1-text44">До 10 лет</span>
            <div className="page1-container29">
              <p className="page1-text45">От 500 до 1000 грн</p>
              <svg
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 110 20"
                preserveAspectRatio="none"
                className="page1-icon66"
              >
                <defs>
                  <linearGradient
                    id="grad253"
                    x1="0"
                    x2="110"
                    y1="0"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#303030"></stop>
                    <stop offset="100%" stopColor="#4EC8ED"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M0 10 H110"
                  fill="none"
                  stroke="url(#grad253)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <div className="page1-container30 clickable-button" onClick={openSellModal}>
                <div className="page1-container31">
                  <span className="page1-text46">Продать</span>
                </div>
                <img alt="image" src="/ICONS/29.svg" loading="eager" className="page1-image7" />
              </div>
            </div>
          </div>
          <div className="page1-container32">
            <span className="page1-text47">От 10 лет</span>
            <div className="page1-container33">
              <p className="page1-text48">От 300 до 500 грн</p>
              <svg
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 110 20"
                preserveAspectRatio="none"
                className="page1-icon72"
              >
                <defs>
                  <linearGradient
                    id="grad253"
                    x1="0"
                    x2="110"
                    y1="0"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#303030"></stop>
                    <stop offset="100%" stopColor="#4EC8ED"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M0 10 H110"
                  fill="none"
                  stroke="url(#grad253)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="11 11"
                ></path>
              </svg>
              <div className="page1-container34 clickable-button" onClick={openSellModal}>
                <div className="page1-container35">
                  <span className="page1-text49">Продать</span>
                </div>
                <img alt="image" src="/ICONS/29.svg" loading="eager" className="page1-image8" />
              </div>
            </div>
          </div>
        </article>
        <MainFooter />
        <SellModal isOpen={isSellModalOpen} onClose={closeSellModal} />
      </div>
      <style jsx>
        {`
          .page1-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            min-height: 100dvh;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
          }
          .page1-breadcrumbs-section {
            width: 100%;
            max-width: 1300px;
            padding: 0 var(--dl-layout-space-unit);
            margin: 0 auto;
          }
          .page1-header {
            gap: 361px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 97px;
            display: flex;
            padding: 20px 61px;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
            background-color: rgba(31, 37, 42, 1);
          }
          .page1-headertextwashermachine {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page1-image1 {
            width: 151px;
            height: 151px;
            display: none;
            object-fit: cover;
          }
          .page1-main-posle-hedera {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            max-width: 1300px;
            min-width: 100%;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-twounits);
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: row;
            background-size: cover;
            justify-content: center;
            background-image: url('/frame%2014261-1500w.png');
          }
          .page1-container11 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .page1-container12 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 438px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .page1-container13 {
            gap: calc(var(--dl-layout-space-twounits) - 10px);
            width: 416px;
            height: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .page1-text10 {
            fill: #4ec8ed;
            color: #4ec8ed;
            font-size: 35px;
            align-self: center;
            font-style: normal;
            font-family: var(--font-nunito);
            font-weight: 500;
          }
          .page1-text10-black { color: var(--dl-color-theme-neutral-dark); }
          .page1-text10-blue { color: #87ceeb; font-weight: 600; }
          .page1-text13 {
            font-size: 16px;
            max-width: 700px;
            text-align: center;
            font-family: var(--font-nunito);
            line-height: 2.025;
          }
          .page1-text14 {
            color: #191818;
            font-weight: 600;
          }
          .page1-text15 {
            color: #58c3e8;
            font-weight: 500;
          }
          .page1-text16 {
            color: #373737;
          }
          .page1-text18 {
            font-weight: 600;
          }
          .page1-text20 {
            font-weight: 600;
          }
          .page1-text22 {
            font-weight: 600;
          }
          .page1-text24 {
            color: #373737;
          }
          .page1-hero-image {
            position: relative;
            width: 502px;
            height: 325px;
          }
          .page1-image2 {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .page1-container14 {
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            margin-top: var(--dl-layout-space-twounits);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            margin-bottom: 61px;
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
            background-color: #87ceeb;
          }
          .page1-text26 {
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 18px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page1-container15 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
            max-width: 950px;
            background: linear-gradient(180deg, #fdfdf6 0%, #faf8f6 100%);
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-left: var(--dl-layout-space-halfunit);
            border-radius: var(--dl-layout-radius-imageradius);
            padding-right: 18px;
            justify-content: center;
          }
          .page1-container16 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            max-width: 280px;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .page1-image3 {
            width: 76px;
            height: 65px;
            object-fit: cover;
          }
          .page1-container17 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 180px;
            align-items: flex-start;
            flex-direction: column;
          }
          .page1-text29 {
            fill: #64cdf7;
            color: #000000;
            width: 100%;
            height: auto;
            font-size: 15px;
            max-width: 150px;
            font-style: normal;
            max-height: 35px;
            min-height: 35px;
            font-family: var(--font-nunito);
            font-weight: 500;
            line-height: normal;
            white-space: normal;
            overflow-wrap: break-word;
            letter-spacing: normal;
            -webkit-font-smoothing: auto;
            -moz-osx-font-smoothing: auto;
            text-rendering: auto;
          }
          .page1-icon10 {
            width: 100px;
            height: 5px;
          }
          .page1-text30 {
            fill: #333333;
            color: #333333;
            width: 100%;
            height: 100%;
            font-size: 14.5px;
            max-width: 175px;
            font-style: italic;
            max-height: 55px;
            min-height: 55px;
            font-family: var(--font-nunito);
            font-weight: 300;
          }
          .page1-container18 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            max-width: 280px;
            align-items: center;
            padding-top: var(--dl-layout-space-unit);
            padding-left: calc(var(--dl-layout-space-unit) + 15px);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .page1-image4 {
            width: 59px;
            height: 57px;
            object-fit: cover;
          }
          .page1-container19 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 180px;
            align-items: flex-start;
            flex-direction: column;
          }
          .page1-text31 {
            fill: #64cdf7;
            color: #000000;
            width: 100%;
            height: auto;
            font-size: 15px;
            max-width: 150px;
            font-style: normal;
            max-height: 35px;
            min-height: 35px;
            font-family: var(--font-nunito);
            font-weight: 500;
            line-height: normal;
            white-space: normal;
            overflow-wrap: break-word;
            letter-spacing: normal;
            -webkit-font-smoothing: auto;
            -moz-osx-font-smoothing: auto;
            text-rendering: auto;
          }
          .page1-icon16 {
            width: 100px;
            height: 5px;
          }
          .page1-text32 {
            fill: #333333;
            color: #333333;
            width: 100%;
            height: 100%;
            font-size: 14.5px;
            max-width: 170px;
            font-style: italic;
            max-height: 55px;
            min-height: 55px;
            font-family: var(--font-nunito);
            font-weight: 300;
          }
          .page1-container20 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            max-width: 280px;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: center;
          }
          .page1-image5 {
            width: 82px;
            height: 40px;
            object-fit: cover;
          }
          .page1-container21 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 180px;
            align-items: flex-start;
            flex-direction: column;
          }
          .page1-text33 {
            fill: #49bbe7;
            color: #000000;
            width: 100%;
            height: auto;
            font-size: 15px;
            max-width: 150px;
            font-style: normal;
            max-height: none;
            min-height: auto;
            font-family: var(--font-nunito);
            font-weight: 500;
            line-height: normal;
            white-space: normal;
            overflow-wrap: break-word;
            letter-spacing: normal;
            -webkit-font-smoothing: auto;
            -moz-osx-font-smoothing: auto;
            text-rendering: auto;
          }
          .page1-icon22 {
            width: 100px;
            height: 5px;
          }
          .page1-text36 {
            fill: #333333;
            color: #333333;
            width: 100%;
            height: 100%;
            font-size: 14.5px;
            max-width: 175px;
            font-style: italic;
            max-height: none;
            min-height: auto;
            font-family: var(--font-nunito);
            font-weight: 300;
          }
          .page1-icon28 {
            top: -13px;
            left: -1px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .page1-icon30 {
            left: -2px;
            width: 100%;
            bottom: -14px;
            height: 5px;
            position: absolute;
          }
          .page1-icon32 {
            top: -1px;
            left: -12px;
            width: 5px;
            height: 100%;
            position: absolute;
          }
          .page1-icon34 {
            right: -13px;
            width: 5px;
            bottom: -3px;
            height: 100%;
            position: absolute;
          }
          .page1-icon36 {
            top: -15px;
            left: -14px;
            width: 9px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .page1-icon38 {
            left: -14px;
            width: 9px;
            bottom: -16px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .page1-icon40 {
            right: -14px;
            width: 9px;
            bottom: -15px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .page1-icon42 {
            top: -15px;
            right: -15px;
            width: 9px;
            height: 9px;
            z-index: 1;
            position: absolute;
          }
          .page1-container22 {
            width: 265px;
            height: 57px;
            display: flex;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            margin-bottom: calc(var(--dl-layout-space-twounits) * 1.5);
            flex-direction: column;
            justify-content: center;
            background-color: #87ceeb;
          }
          .page1-text37 {
            color: rgb(255, 255, 255);
            height: auto;
            font-size: 18px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .page1-text40 {
            color: #373737;
            height: auto;
            font-size: 15px;
            font-style: Regular;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            margin-bottom: calc(var(--dl-layout-space-twounits) * 1.5);
            text-decoration: none;
          }
          .page1-container23 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
            max-width: 950px;
            min-width: auto;
            align-items: center;
            border-radius: var(--dl-layout-radius-imageradius);
            margin-bottom: 67px;
            flex-direction: row;
            justify-content: center;
          }
          .page1-container24 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: 121px;
            display: flex;
            max-width: 300px;
            min-width: 300px;
            box-shadow: 5px 5px 20px 0px #d4d4d4;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            justify-content: center;
            background-color: #fdfdf6;
          }
          .page1-text41 {
            fill: #ffd84d;
            color: #ffd84d;
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 500;
          }
          .page1-container25 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 180px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page1-text42 {
            color: #333333;
            font-size: 14.5px;
            font-style: italic;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 300;
            line-height: 1.3;
          }
          .page1-icon44 {
            width: 100px;
            height: 5px;
          }
          .page1-container26 {
            gap: 4px;
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: flex-start;
            cursor: pointer;
            transition: transform 0.2s ease, background-color 0.2s ease;
            border-radius: 4px;
            padding: 4px;
          }
          .page1-container26:hover { transform: translateY(-2px); }
          .page1-container26:hover .page1-image6 { transform: rotate(15deg); filter: brightness(1.2); }
          .page1-container26:hover .page1-text43 { color: #3A9BC1; }
          .page1-container26:active { transform: translateY(0); }
          .page1-container27 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page1-text43 {
            color: #4ec8ed;
            font-family: var(--font-nunito);
            font-size: 14px;
            font-weight: 400;
            line-height: 1;
            text-align: center;
          }
          .page1-image6 {
            width: 22px;
            height: 23px;
            object-fit: cover;
          }
          .page1-icon50 {
            top: -12px;
            left: -1px;
            width: 100%;
            height: 5px;
            position: absolute;
          }
          .page1-icon52 {
            left: -2px;
            width: 100%;
            bottom: -12px;
            height: 5px;
            position: absolute;
          }
          .page1-icon54 {
            top: 0px;
            left: -11px;
            width: 5px;
            height: 100%;
            position: absolute;
          }
          .page1-icon56 {
            right: -10px;
            width: 5px;
            bottom: -3px;
            height: 100%;
            position: absolute;
          }
          .page1-icon58 {
            top: -19px;
            left: -13px;
            width: 9px;
            height: auto;
            position: absolute;
          }
          .page1-icon60 {
            left: -13px;
            width: 9px;
            bottom: -19px;
            height: auto;
            position: absolute;
          }
          .page1-icon62 {
            right: -12px;
            width: 9px;
            bottom: -18px;
            height: auto;
            position: absolute;
          }
          .page1-icon64 {
            top: -19px;
            right: -12px;
            width: 9px;
            height: auto;
            position: absolute;
          }
          .page1-container28 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: 121px;
            display: flex;
            max-width: 300px;
            min-width: 300px;
            box-shadow: 5px 5px 20px 0px #d4d4d4;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            justify-content: center;
            background-color: #fdfdf6;
          }
          .page1-text44 {
            color: #5dc4e9;
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 500;
          }
          .page1-container29 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 180px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page1-text45 {
            color: #333333;
            font-size: 14.5px;
            font-style: italic;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 300;
            line-height: 1.3;
          }
          .page1-icon66 {
            width: 100px;
            height: 5px;
          }
          .page1-container30 {
            gap: 4px;
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: flex-start;
            cursor: pointer;
            transition: transform 0.2s ease, background-color 0.2s ease;
            border-radius: 4px;
            padding: 4px;
          }
          .page1-container30:hover { transform: translateY(-2px); }
          .page1-container30:hover .page1-image7 { transform: rotate(15deg); filter: brightness(1.2); }
          .page1-container30:hover .page1-text46 { color: #3A9BC1; }
          .page1-container30:active { transform: translateY(0); }
          .page1-container31 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page1-text46 {
            fill: #4ec8ed;
            color: #4ec8ed;
            font-family: var(--font-nunito);
            font-size: 14px;
            font-weight: 400;
            line-height: 1;
            text-align: center;
          }
          .page1-image7 {
            width: 22px;
            height: 23px;
            object-fit: cover;
          }
          .page1-container32 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: 121px;
            display: flex;
            max-width: 300px;
            min-width: 300px;
            box-shadow: 5px 5px 20px 0px #d4d4d4;
            align-items: center;
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-imageradius);
            justify-content: center;
            background-color: #fdfdf6;
          }
          .page1-text47 {
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 500;
          }
          .page1-container33 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 180px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page1-text48 {
            color: #333333;
            font-size: 14.5px;
            font-style: italic;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 300;
            line-height: 1.3;
          }
          .page1-icon72 {
            width: 100px;
            height: 5px;
          }
          .page1-container34 {
            gap: 4px;
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: flex-start;
            cursor: pointer;
            transition: transform 0.2s ease, background-color 0.2s ease;
            border-radius: 4px;
            padding: 4px;
          }
          .page1-container34:hover { transform: translateY(-2px); }
          .page1-container34:hover .page1-image8 { transform: rotate(15deg); filter: brightness(1.2); }
          .page1-container34:hover .page1-text49 { color: #3A9BC1; }
          .page1-container34:active { transform: translateY(0); }
          .page1-container35 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .page1-text49 {
            fill: #4ec8ed;
            color: #4ec8ed;
            font-family: var(--font-nunito);
            font-size: 14px;
            font-weight: 400;
            line-height: 1;
            text-align: center;
          }
          .page1-image8 {
            width: 22px;
            height: 23px;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .page1-main-posle-hedera {
              flex-direction: column-reverse;
            }
            .page1-container12 {
              height: auto;
              flex-wrap: wrap;
            }
            .page1-container15 {
              gap: var(--dl-layout-space-halfunit);
              max-width: 350px;
              align-items: center;
              padding-top: var(--dl-layout-space-unit);
              flex-direction: column;
            }
            .page1-container16 {
              padding-top: 0px;
            }
            .page1-container18 {
              padding-top: 0px;
            }
            .page1-image4 {
              width: 69px;
              height: 66px;
            }
            .page1-text31 {
              font-style: normal;
              font-family: var(--font-nunito);
              font-weight: 500;
            }
            .page1-text32 {
              font-size: 15px;
              font-style: normal;
              font-family: var(--font-nunito);
              font-weight: 300;
              min-height: auto;
              max-height: none;
            }
            .page1-container20 {
              padding-top: 0px;
            }
            .page1-image5 {
              width: 68px;
            }
            .page1-text40 {
              margin-left: var(--dl-layout-space-unit);
              margin-right: var(--dl-layout-space-unit);
            }
            .page1-container23 {
              width: auto;
              height: auto;
              max-width: 300px;
              margin-bottom: 67px;
            }
            .page1-text13 { font-size: 15.5px; }
          }
          @media (max-width: 767px) {
            .page1-main-posle-hedera {
              flex-direction: column-reverse;
              background-image: none;
            }
            .page1-container11 {
              width: 100%;
            }
            .page1-container12 {
              height: 100%;
              flex-wrap: wrap;
              gap: calc(var(--dl-layout-space-oneandhalfunits) - 6px);
            }
            .page1-text13 {
              width: 100%;
              height: 100%;
              max-width: auto;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .page1-hero-image {
              width: 418px;
              height: 323px;
            }
            .page1-container15 {
              gap: calc(var(--dl-layout-space-unit) - 6px);
              max-width: 290px;
              padding-left: calc(var(--dl-layout-space-unit) - 12px);
              padding-right: 0px;
              flex-direction: column;
            }
            .page1-image3 { width: 68px; }
            .page1-text29 {
              font-size: 14px;
              font-weight: 500;
            }
            .page1-text30 {
              font-size: 14px;
              font-style: italic;
              font-family: var(--font-nunito);
            font-weight: 300;
            }
            .page1-text31 {
              font-size: 14px;
              font-weight: 500;
            }
            .page1-text32 {
              font-size: 14px;
              font-style: italic;
              font-family: var(--font-nunito);
            font-weight: 300;
              max-width: 140px;
              line-height: 1.2;
            }
            .page1-text33 {
              font-size: 14px;
              font-weight: 500;
            }
            .page1-text36 {
              font-size: 14px;
            }
            .page1-text31 {
              font-style: normal;
              font-weight: 500;
            }
            .page1-container25, .page1-container29, .page1-container33 {
              gap: var(--dl-layout-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .page1-breadcrumbs-section {
              padding: 0 var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .page1-breadcrumbs-section {
              padding: 0 var(--dl-layout-space-unit);
            }
            .page1-header {
              height: 84px;
            }
            .page1-headertextwashermachine {
              position: relative;
            }
            .page1-image1 {
              top: -149px;
              left: 0px;
              right: 0px;
              width: 140px;
              height: 140px;
              margin: auto;
              display: flex;
              position: absolute;
              align-items: center;
              justify-content: center;
            }
            .page1-main-posle-hedera {
              padding-top: 12px;
              flex-direction: column;
              background-image: none;
            }
            .page1-container12 {
              flex-wrap: wrap;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .page1-container13 {
              width: 100%;
              margin-top: 50px;
            }
            .page1-text10 {
              font-size: 24px;
            }
            .page1-text13 {
              width: 100%;
              height: 100%;
              font-size: 13.5px;
              padding-left: calc(var(--dl-layout-space-unit) + 6px);
              margin-bottom: var(--dl-layout-space-twounits);
              padding-right: calc(var(--dl-layout-space-unit) + 6px);
            }
            .page1-hero-image {
              width: 100%;
              height: 240px;
            }
            .page1-container14 {
              margin-top: 0px;
            }
            .page1-text26 {
              width: auto;
              height: auto;
              font-size: 18px;
              align-self: center;
              text-align: center;
              font-family: var(--font-nunito);
            }
            .page1-container15 {
              gap: calc(var(--dl-layout-space-unit) - 6px);
              width: 280px;
              height: 100%;
              align-items: flex-start;
              padding-top: var(--dl-layout-space-twounits);
              padding-left: calc(var(--dl-layout-space-oneandhalfunits) - 18px);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .page1-image3 { width: 68px; }
            .page1-container16 {
              gap: calc(var(--dl-layout-space-twounits) - 6px);
              padding-left: var(--dl-layout-space-halfunit);
              justify-content: flex-start;
              margin-bottom: 25px;
            }
            .page1-container17, .page1-container19, .page1-container21 {
              max-width: 140px;
              min-height: auto;
            }
            .page1-container18 {
              gap: calc(var(--dl-layout-space-twounits) - 6px);
              padding-left: var(--dl-layout-space-halfunit);
              justify-content: flex-start;
              margin-bottom: 25px;
            }
            .page1-container20 {
              gap: calc(var(--dl-layout-space-twounits) - 6px);
              padding-left: var(--dl-layout-space-halfunit);
              justify-content: flex-start;
            }
            .page1-text29 {
              font-size: 14px;
              max-width: 140px;
              line-height: 1.2;
            }
            .page1-text30 {
              min-height: auto;
              max-width: 140px;
              line-height: 1.2;
            }
            .page1-text31 {
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
              max-width: 140px;
              line-height: 1.2;
            }
            .page1-text33 {
              font-size: 14px;
              font-weight: 500;
              max-width: 140px;
              line-height: 1.2;
            }
            .page1-image5 {
              width: 68px;
              height: 36px;
            }
            .page1-text36 {
              max-width: 140px;
              line-height: 1.2;
            }
            .page1-text32 {
              max-width: 140px;
              line-height: 1.2;
              min-height: auto;
              max-height: none;
            }
            .page1-text37 {
              width: auto;
              height: auto;
              font-size: 18px;
              align-self: center;
              text-align: center;
              font-family: var(--font-nunito);
            }
            .page1-container23 {
              width: 290px;
              max-width: 290px;
              margin-bottom: 20px;
            }
            .page1-container24 {
              height: auto;
              min-width: 100%;
              min-height: 121px;
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .page1-text41 {
              font-size: 21px;
              font-style: normal;
              font-weight: 400;
            }
            .page1-container25 {
              width: 143px;
              max-width: 170px;
            }
            .page1-text42 {
              font-size: 17px;
              font-style: normal;
              font-weight: 400;
            }
            .page1-container28 {
              height: auto;
              min-width: 100%;
              min-height: 121px;
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .page1-text44 {
              font-size: 21px;
              font-style: normal;
              font-weight: 400;
            }
            .page1-container29 {
              width: 143px;
              margin-left: 0px;
              padding-left: 0px;
            }
            .page1-text45 {
              font-size: 17px;
              font-style: normal;
              font-weight: 400;
            }
            .page1-container32 {
              height: auto;
              min-width: 100%;
              min-height: 121px;
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .page1-text47 {
              font-size: 21px;
              font-style: normal;
              font-weight: 400;
            }
            .page1-container33 {
              width: 143px;
              max-width: 170px;
            }
            .page1-text48 {
              font-size: 17px;
              font-style: normal;
              font-family: var(--font-nunito);
              font-weight: 400;
            }
          }
          /* Анимация как у кнопок "Вызвать мастера" */
          .clickable-button { cursor: pointer; transition: all 0.2s ease; border-radius: 4px; padding: 4px; }
          .clickable-button:hover { transform: translateY(-2px); }
          .clickable-button:hover span { color: #3A9BC1; }
          .clickable-button:hover img { transform: rotate(15deg); filter: brightness(1.2); }
          .clickable-button img { transition: transform 0.2s ease, filter 0.2s ease; }
          .clickable-button:active { transform: translateY(0); }

          /* Restore mobile sizes and constrain desktop-only increase */
          @media (max-width: 767px) {
            .page1-text42 { font-size: 14.5px !important; }
            .page1-text45 { font-size: 14.5px !important; }
            .page1-text48 { font-size: 14.5px !important; }
            /* Reduce header labels by 1px on phones */
            .page1-text41, .page1-text44, .page1-text47 { font-size: 20px !important; }
          }

          @media (min-width: 768px) {
            .page1-text42, .page1-text45, .page1-text48 { font-size: 17px !important; }
          }

        `}
      </style>
    </>
  )
}

export default Vikup
