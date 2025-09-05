import React, { useState } from 'react'
import dynamic from 'next/dynamic'

import Header from '../components/Header'
import MainFooter from '../components/MainFooter'
import SEOHead from '../components/SEOHead'
import PageNavigation from '../components/PageNavigation'
import Breadcrumbs from '../components/Breadcrumbs'
import AnchorLinksSection from '../components/AnchorLinksSection'
import { getSEOData } from '../utils/seoConfig'
import { getProblemPageStructuredData } from '../utils/structuredData'

// Динамические импорты для ко��понентов, не критичных для первой загрузки
const OrderModal = dynamic(() => import('../components/OrderModal'), { 
  ssr: false,
  loading: () => <div>Loading...</div>
})
const RelatedArticles = dynamic(() => import('../components/RelatedArticles'), { 
  ssr: false 
})
const CallMasterSection = dynamic(() => import('../components/CallMasterSection'), {
  ssr: false
})
const InterestingAside = dynamic(() => import('../components/InterestingAside'), { 
  ssr: false 
})

const Page = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  
  const seoData = getSEOData('/nevkluchaetsa')
  const baseUrl = 'https://sosamba3.vercel.app'
  const structuredData = getProblemPageStructuredData(
    'Ремонт стиральной машины которая не включается',
    'Профессиональный ремонт стиральных машин которые не включаются в Одессе. Диагностика блока питания, ремонт у��равления.',
    `${baseUrl}/nevkluchaetsa`
  )

  return (
    <>
      <div className="page-container10">
        <SEOHead
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords}
          canonical={`${baseUrl}/nevkluchaetsa`}
          structuredData={structuredData}
        />
        <Header />
        <div className="page-breadcrumbs-section">
          <Breadcrumbs style="white-left" />
        </div>
        <main className="page-main">
          <div className="page-left-main-box">
            <div className="page-headertextwashermachine">
              <h1 className="page-text10">
                <span className="page-text11">
                  Стиральная машина не включается: —
                </span>
                <span className="page-text12"> </span>
                <span className="page-text13">что делать?</span>
              </h1>
            </div>
            
            <AnchorLinksSection
              title="Стиральная машина не включается:"
              items={[
                { icon: '/external/vector8669-r6fr.svg', href: '#1', text: '1. Что делать, если машина не включается?' },
                { icon: '/vector.svg', href: '#2', text: 'Основные причины поломки:' },
                { icon: '/external/vector8669-r6fr.svg', href: '#2', text: '1. Нет питания' },
                { icon: '/external/vector8669-r6fr.svg', href: '#3', text: '2. Перегорел сетевой фильтр' },
                { icon: '/external/vector8669-r6fr.svg', href: '#4', text: '3. Вышел из строя центральный модуль управления' },
                { icon: '/external/vector8669-r6fr.svg', href: '#5', text: '4. Износились щётки двигателя' },
                { icon: '/external/vector8669-r6fr.svg', href: '#5-1', text: '5. Неисправность замка люка (УБЛ)' },
                { icon: '/external/vector8669-r6fr.svg', href: '#5-2', text: '6. Неисправен впускной клапан или нет подачи воды' },
              ]}
            />

            <section id="1" className="page-firstproblem">
              <div className="page-container12 zagolovkiskorobkoy">
                <h2 className="zagolovki2">
                  Что делать, если машина не включается:
                </h2>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon26"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  />
                </svg>
              </div>
              <div className="page-container13">
                <figure className="page-container14">
                  <img
                    alt="стиральная машина"
                    src="/100x100/image%203823140-900w.webp"
                    loading="eager"
                    className="page-image38230521"
                  />
                  <span className="page-text19">
                    <span>Машина не включается</span>
                  </span>
                </figure>
                <div className="vicetext">
                  <p>
                    <strong>1. Отключите машинку от сети</strong><br />
                    Прежде чем разбирать что-либо, обязательно вытащите вилку из розетки и перекройте водоподачу. Это защ��тит вас от удара током и подтопления.
                  </p>

                  <p>
                    <strong>2. Проверьте электрическую цепь.</strong><br />
                    Убедитесь, что автомат в электрощите включён, а провод питания и розетка не повреждены. Подключите к той же розетке другой прибор, чтобы убедиться, что питание есть.
                  </p>

                  <p>
                    <strong>3. Осмотрите дверцу.</strong><br />
                    Откройте люк и закройте его заново до характерного щелчка. Иногда простое неплотное закрытие блокирует пуск. Проверьте, не мешают ли защёлке посторонние предметы или грязь.
                  </p>

                  <p>
                    <strong>4. Проверьте подачу воды.</strong><br />
                    Откройте кран подачи воды для стиральной машины и осмотрите заливной шланг: нет ли перегиба или засора на входе. Сломанный или перекрученный шланг и закрытый кран тоже остановят работу.
                  </p>

                  <p>
                    <strong>5. Перезапустите оборудование.</strong><br />
                    Отключите машину от сети на несколько минут (примерно на 10–15), затем включите снова. Иногда однократный «глюк» электроники устраняется сбросом питания.
                  </p>

                  <p>
                    <strong>6. Проверьте фильтры и шланги.</strong><br />
                    Если машинка всё ещё не подаёт признаков жизни, осмотрите сетевой фильтр и впускной клапан. Для фильтра нужен мультиметр, для клапана — визуальный осмотр или звон мастеру. Часто эти детали меняют полностью.
                  </p>
                </div>
              </div>
            </section>

            <div className="page-container15">
              <h2 className="page-text34">
                <span>Основные причины неисправности:</span>
              </h2>
            </div>

            <section id="2" className="page-thirdproblem1">
              <div className="page-container16 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  1. Отсутствие питания
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon28"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  />
                </svg>
              </div>
              <div className="page-container17">
                <figure className="page-container18">
                  <img
                    alt="электро-щитовая"
                    src="/5/shitovaya.webp"
                    loading="lazy"
                    className="page-image38230522"
                  />
                  <span className="page-text19">
                    <span>Электрическая щитовая</span>
                  </span>
                </figure>
                <p className="vicetext">
                  Иногда причина банальна — машинка не получает электричество. Сначала проверьте автомат в щитке и предохранитель. Убедитесь, что шнур целый, а розетка рабочая. Для проверки можно включить в неё, например, фен или зарядку. Если другие приборы тоже не работают, значит, проблема не в самой машинке, а в электросети. В простых случаях достаточно поднять автомат или заменить предохранитель. Если же электричество есть, а техника «молчит», стоит искать дальше.
                </p>
              </div>
            </section>

            <section id="3" className="page-thirdproblem2">
              <div className="page-container19 zagolovkiskorobkoy">
                <h3 className="zagolovki2">2. Перегорел сетевой фильтр</h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon30"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  />
                </svg>
              </div>
              <div className="page-container20">
                <figure className="page-container21">
                  <img
                    alt="сетевой фильтр"
                    src="/5/filtrsetevoy.webp"
                    loading="lazy"
                    className="page-image38230523"
                  />
                  <span className="page-text40">
                    <span>Сетевой фильтр</span>
                  </span>
                </figure>
                <p className="vicetext">
                  В больш��нстве современных машин стоит сетевой фильтр, который защищает электронику от скачков напряжения. Когда он выходит из строя, машинка перестаёт реагировать на включение. Симптомы — шнур и розетка исправны, но техника полностью «мертва». Проверить фильтр можно мультиметром (или доверить мастеру). Иногда на корпусе фильтра видны следы подгорания. Если элемент неисправен, его просто меняют на новый.
                </p>
              </div>
            </section>

            <section id="4" className="page-fiveproblem1">
              <div className="page-container22 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  3. Вышел из строя центральный модуль управления
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon32"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  />
                </svg>
              </div>
              <div className="page-container23">
                <figure className="page-container24">
                  <img
                    alt="Модуль управления"
                    src="/1/plata.webp"
                    loading="lazy"
                    className="page-image38230524"
                  />
                  <span className="page-text45">Модуль управления</span>
                </figure>
                <p className="page-text46 vicetext">
                  Мозг стиральной машины — это управляющая плата. Именно она хранит программы стирки и управляет всеми про��ессами. Если она выходит из строя, техника не запускается, индикаторы не горят или ведут себя странно. Иногда помо��ает простой сброс: отключите питание на 10–20 минут и попробуйте снова. Если не помогло — скорее всего, нужна прошивка, ремонт или замена модуля. Этим обычно занимается специалист.
                </p>
              </div>
            </section>

            <section id="5" className="page-fiveproblem2">
              <div className="page-container25 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  4. Износились щётки двигателя
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon34"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  />
                </svg>
              </div>
              <div className="page-container26">
                <figure className="page-container27">
                  <img
                    alt="Щетки двигателя"
                    src="/5/shetki.webp"
                    loading="lazy"
                    className="page-image38230525"
                  />
                  <span className="page-text48">Щетки двигателя</span>
                </figure>
                <p className="page-text49 vicetext">
                  Двигатель стиралки питается от электрических щёток на коллекторе ротора. При сильном износе щёток двигатель либо не запускается совсем, либо работает с перебоями. Яркий признак неисправности щёток — барабан перестаёт вращаться: машина включена, напор воды есть, но барабан «не крутит». Ещё один симптом — искры или необычные «скрежещущие» звуки при попытке запустить стирку. Обычно это происходит из-за плохого контакта щёток с ротором (они коро��ко замкнуты или стёрлись). На дисплее в таких случаях могут появляться сервисные коды (хотя обычно исчезают, когда машина остывает). Проверьте щётки двигателя: в большинстве моделей это доступно после снятия задней крышки и корпуса мотора. Если щетки сильно короткие или имеют сколы, их нужно заменить. Это относительно простая и недорогая операция — её выполняет мастер или даже домашний умелец. Пока щетки не заменены, стиралка не запустится (особенно при больших нагрузках).
                </p>
              </div>
            </section>

            <section id="5-1" className="page-fiveproblem2">
              <div className="page-container25 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  5. Неисправность замка люка (УБЛ)
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon34"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  />
                </svg>
              </div>
              <div className="page-container26">
                <figure className="page-container27">
                  <img
                    alt="убл"
                    src="/5/ubl.webp"
                    loading="lazy"
                    className="page-image38230525"
                  />
                  <span className="page-text48">УБЛ</span>
                </figure>
                <p className="page-text49 vicetext">
                  Практически все стиралки блокируют дверцу перед стартом (из соображений безопасности). Если замок (Устройство Блокировки Люка, УБЛ) сломан или просто не фиксирует дверцу, машина не даст себя включить. Проявляется это тем, что при попытке старта ничего не происходит — машинка не отвечает на нажатия. На некоторых моделях на экране появляется код ошибки, связанный с дверцей: например, LG выдаёт «dE», Samsung — «DC». Часто бывает и просто «виснет»: люк не захлопнут до конца. Попробуйте открыть и затем сильно закрыть дверцу до щелчка – иногда достаточно убедиться, что она плотно заперта. Если же замок действительно сломан, его придётся заменить. Устройство состоит из микровыключателя и заслонки — ремонт нецелесообразен, заменять нужно весь узел. До замены машина работать не будет (ее «кидает»: ни вода не набирается, ни барабан не крутится).
                </p>
              </div>
            </section>

            <section id="5-2" className="page-fiveproblem2">
              <div className="page-container25 zagolovkiskorobkoy">
                <h3 className="zagolovki2">
                  6. Неисправен впускной клапан или нет подачи воды
                </h3>
                <svg
                  width="330"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 330 20"
                  preserveAspectRatio="none"
                  className="page-icon34"
                >
                  <path
                    d="M0 10 H330"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray="11 11"
                  />
                </svg>
              </div>
              <div className="page-container26">
                <figure className="page-container27">
                  <img
                    alt="впускной клапан"
                    src="/5/klapan.webp"
                    loading="lazy"
                    className="page-image38230525"
                  />
                  <span className="page-text48">Впускной клапан</span>
                </figure>
                <p className="page-text49 vicetext">
                  Если индикаторы на панели загораются, но после вкл��чения программа не стартует, обратите внимание на подачу воды. Во время цикла машинка должна заблокировать люк и тут же начать залив воды. Если воды нет (или не подаётся), стирка не начнётся. Сначала проверьте, открыт ли кран водоснабжения для машины и не пережат ли заливной шланг. Без наличия воды стиралка просто не запустится. Если с подачей воды всё в порядке, возможен отказ впускного (заливного) клапана. Это электромагнит, открывающий подачу воды при команде блока управления. Признаки: машинка блокирует люк, пытается набрать воду (можно услышать гудение), но бак остаётся пустым. На дисплее может мигать ошибка «нет воды» (на��ример, код H2O у Indesit или F02 у Bosch). Иногда заливается вода только на некоторые программы (например, полоскание) — это из-за того, что современные стиралки используют двойной клапан и может выходить из строя только один из его патрубков. Что делать: убедитесь, что кран открыт и шланг не изогнут. Если вода есть, но машинка всё равно не набирает, скорее всего, впускной клапан неисправен или забит мусором. Нередко в корпусе клапана устанавливается мелкая сеточка-фильтр — её можно очистить. Если проверка не помогла, потребуется заменить клапан на новый. Это уже задача мастера: самостоятельно без опыта лучше не рисковать.
                </p>
              </div>
            </section>

            <CallMasterSection onOrderClick={openModal} />
            
            <PageNavigation
              prevPage={{
                href: '/silnoshumit',
                title: 'Стиральная машина шумит при отжиме'
              }}
              nextPage={{
                href: '/zavisaetnaprogramme',
                title: 'Стиральная машина зависает на программе'
              }}
            />
            
            <svg
              width="330"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 330 20"
              preserveAspectRatio="none"
              className="page-icon58"
            >
              <path
                d="M0 10 H330"
                fill="none"
                stroke="#000000"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="11 11"
              />
            </svg>
            
            <RelatedArticles />
          </div>
          <div className="page-dops-info">
            <InterestingAside />
          </div>
        </main>
        <MainFooter />
        <OrderModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  )
}

export default Page
