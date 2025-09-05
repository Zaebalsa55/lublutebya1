import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import ProblemPageLayout from '../components/ProblemPageLayout'
import ProblemSection from '../components/ProblemSection'
import { getSEOData } from '../utils/seoConfig'
import { getProblemPageStructuredData } from '../utils/structuredData'

const OrderModal = dynamic(() => import('../components/OrderModal'), { ssr: false, loading: () => null })

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const seoData = getSEOData('/neotkrivaetsadverca')
  const baseUrl = 'https://sosamba3.vercel.app'
  const structuredData = getProblemPageStructuredData(
    'Ремонт заблокированной дверцы стиральной машины',
    'Профессиональный ремонт заблокированной дверцы стиральной машины в Одессе. Ремонт замка люка, разблокировка.',
    `${baseUrl}/neotkrivaetsadverca`
  )

  const seo = {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    canonical: `${baseUrl}/neotkrivaetsadverca`,
    structuredData,
  }

  const title = `<span class=\"page-text11\">У стиральной машины не открывается дверца —</span><span class=\"page-text12\"> </span><span class=\"page-text13\">что делать?</span>`

  const anchors = {
    title: 'У стиральной машины не открывается дверца:',
    items: [
      { icon: '/external/vector8669-r6fr.svg', href: '#2', text: '1. Блокировка «Детский замок».' },
      { icon: '/external/vector8669-r6fr.svg', href: '#3', text: '2. Остатки воды в баке или незавершённый цикл' },
      { icon: '/external/vector8669-r6fr.svg', href: '#4', text: '3. Засор в сливной системе или неисправность датчика уровня (прессостат).' },
      { icon: '/external/vector8669-r6fr.svg', href: '#5', text: '4. Сбой электроники или отключение питания.' },
      { icon: '/external/vector8669-r6fr.svg', href: '#5-1', text: '5. Механическая поломка замка или ручки.' },
    ],
  }

  const navigation = {
    prevPage: { href: '/nenabiraetvodu', title: 'Стиральная машина не набирает воду' },
    nextPage: { href: '/nekrutitbaraban', title: 'Стиральная машина не крутит барабан' },
  }

  const sections = [
    {
      id: '2',
      title: '1. Блокировка «Детский замок».',
      image: '/9/1.webp',
      imageAlt: 'рука ребенка и стиральная машина',
      imageCaption: 'Детская защита (Child Lock)',
      content: `<p>Многие модели оснащены функцией «Child Lock», которая предотвращает случайное открытие люка во время работы. Если эта блокировка активна, дверца не откроется, и на панели обычно горит соответствующая пиктограмма. В таком случае нужно отключить функцию в соответствии с инструкцией к вашей модели — не пытайтесь тянуть дверцу силой, сначала снимите защиту.</p>`
    },
    {
      id: '3',
      title: '2. Остатки воды в баке или незавершённый цикл',
      image: '/9/2.webp',
      imageAlt: 'Барабан стиралки',
      imageCaption: '',
      content: `<p>Машина не разблокирует люк, пока в баке остаётся вода, это предохраняет от подтопления. Если цикл был прерван или не завершился, в барабане может остаться вода и блокировка не снимется даже после звукового сигнала об окончании. В такой ситуации попробуйте восстановить нормальную процедуру слива или дождаться автоматического завершения цикла; не дергайте дверцу насильно.</p>`
    },
    {
      id: '4',
      title: '3. Засор в сливной системе или неисправность датчика уровня (прессостат).',
      image: '/2/presso.webp',
      imageAlt: 'прессостат',
      imageCaption: 'Прессостат',
      content: `<p>Если слив заблокирован — засорился фильтр, дренажный шланг или сифон — вода остаётся в баке и люк удерживается запертым. Аналогично, при поломке датчика уровня система может «думать», что вода есть, даже если её визуально нет, и не снимать блокировку. В таких случаях необходима проверка и очистка сливного тракта или диагностика датчика</p>`
    },
    {
      id: '5',
      title: '4. Сбой электроники или отключение питания.',
      image: '/image%203823045-900w.webp',
      imageAlt: 'блок управления',
      imageCaption: 'Блок управления',
      content: `<p>Внезапные перебои с питанием или ошибки в модуле управления могут приводить к «замораживанию» замка люка: контроллер просто не получает или не обрабатывает команду на разблокировку. Иногда помогает полная перезагрузка питания, в иных случаях требуется диагностика и ремонт электронной части в сервисном центре.</p>`
    },
    {
      id: '5-1',
      title: '5. Механическая поломка замка или ручки.',
      image: null,
      imageAlt: '',
      imageCaption: '',
      content: `<p>Износ или поломка механики замка, сломанная ручка или повреждённый фиксатор — частая причина невозможности открытия люка. При такой неисправности замок может не фиксироваться или проворачиваться «в холостую», и потребуется замена механизма или ручки: это уже профильная работа для мастера.</p>`
    },
  ]

  return (
    <>
      <ProblemPageLayout
        seo={seo}
        title={title}
        anchors={anchors}
        navigation={navigation}
        onOrderClick={openModal}
      >
        <div className="page-container15"><h2 className="page-text34"><span>Возможные причины:</span></h2></div>
        {sections.map((s) => (<ProblemSection key={s.id} {...s} />))}
      </ProblemPageLayout>

      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Page
