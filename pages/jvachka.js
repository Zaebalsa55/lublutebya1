import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import ProblemPageLayout from '../components/ProblemPageLayout'
import ProblemSection from '../components/ProblemSection'
import { getSEOData } from '../utils/seoConfig'
import { getArticleStructuredData } from '../utils/structuredData'

const OrderModal = dynamic(() => import('../components/OrderModal'), { 
  ssr: false,
  loading: () => null
})

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const seoData = getSEOData('/jvachka')
  const baseUrl = 'https://sosamba3.vercel.app'
  const structuredData = getArticleStructuredData(
    'Как удалить жвачку с одежды',
    'Эффективные методы удаления жвачки с одежды: холод, тепло и мягкие растворители',
    `${baseUrl}/jvachka`,
    `${baseUrl}/100x100/jvanik.png`
  )

  const seo = {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    canonical: `${baseUrl}/jvachka`,
    structuredData,
  }

  const title = `<span class="page-text11">Жвачка прилипла к одежде —</span><span class="page-text12"> </span><span class="page-text13">что делать?</span>`

  const anchors = {
    title: 'Жвачка на одежде:',
    items: [
      { icon: '/vector.svg', href: '#2', text: 'Основные способы содрать жвачку:' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2', text: '1. Заморозка (морозильник или лёд)' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2-1', text: '2. Горячая вода и утюг' },
      { icon: '/external/vector8669-r6fr.svg', href: '#2-2', text: '3. Клейкая лента и фен' },
      { icon: '/external/vector8669-r6fr.svg', href: '#3', text: '4. Растворители (ацетон, уайт-спирит, WD-40)' },
      { icon: '/external/vector8669-r6fr.svg', href: '#4', text: '5. Масло и уксус' },
    ],
  }

  const navigation = {
    prevPage: { href: '/neslivaetvodu', title: 'Стиральная машина не сливает воду' },
    nextPage: { href: '/protekaet', title: 'Стиральная машина протекает' },
  }

  const sections = [
    {
      id: '2',
      title: '1. Заморозка (морозильник или лёд)',
      image: null,
      imageAlt: '',
      imageCaption: '',
      content: `<p>Если вещь помещается в морозильник, это наиболее простой способ. Поместите испачканную одежду в полиэтиленовый пакет и уберите в морозилку на 2–3 часа. Когда жвачка полностью застынет, её легко отлепить от ткани руками. Если куртка слишком большая, приложите на пятно кусочки льда – жвачка затвердеет на месте и её можно будет собрать щёткой или пальцами. После снятия жвачки может остаться лёгкий след: он обычно хорошо отстирывается мылом или порошком.</p>`
    },
    {
      id: '2-1',
      title: '2. Горячая вода и утюг',
      image: null,
      imageAlt: '',
      imageCaption: '',
      content: `<p>Этот приём подойдёт для прочных тканей (лучше избегать шёлка и шерсти). Разведите очень горячую воду и погрузите поражённый участок на 5–10 минут – жвачка быстро расплавится. Аккуратно счистите размягчённые кусочки щёткой. Также можно воспользоваться утюгом: положите под шмотку плотный картон (или бумажное полотенце), прогрейте утюг до 100–120 °C и на несколько секунд прижмите им место с жвачкой. Жвачка расплавится и прилипнет к картону. Повторяйте, пока все остатки не исчезнут. После используйте ткань: поместите тряпочку между утюгом и вещью, чтобы не пропекать волокна.</p>`
    },
    {
      id: '2-2',
      title: '3. Клейкая лента и фен',
      image: null,
      imageAlt: '',
      imageCaption: '',
      content: `<p>Скотч может помочь с сырой или частично размягчённой резинкой. Направьте на жвачку тёплый воздух из фена на 1–2 минуты – резинка размягчится. Затем плотно прижмите кусок клейкой ленты к жвачке и резко оторвите – так вы сможете «вытянуть» жвачку за ленту. Повторяйте, пока не оторвёте всё. Этот способ удобен, когда нет под рукой морозильника.</p>`
    },
    {
      id: '3',
      title: '4. Растворители (ацетон, уайт-спирит, WD-40)',
      image: null,
      imageAlt: '',
      imageCaption: '',
      content: `<p>Если ни холод, ни тепло не помогли, пробуйте местные растворители. Жидкость для снятия лака с ацетоном мягко разъедает жевательную резинку – смочите ватный диск, приложите к пятну на 2–3 минуты, затем сотрите резинку щёткой. Ксилол (уайт-спирит) или промышленный очиститель WD-40 тоже эффективно размягчают клейкость жвачки. Эти средства хорошо подходят для плотных тканей, но обязательно протестируйте их на незаметном фрагменте, чтобы избежать обесцвечивания. После применения растворителя одежду нужно обязательно выстирать – это удалит остатки химии и запах.</p>`
    },
    {
      id: '4',
      title: '5. Масло и уксус',
      image: null,
      imageAlt: '',
      imageCaption: '',
      content: `<p>Другое народное средство – растительное или сливочное масло: нанесите его на жвачку, дождитесь 10–15 минут и попробуйте стереть жвачку (масло уменьшит её липкость). Ацетон из жидкостей для снятия лака часто заменяют уксусом: подогрейте столовый уксус до 40 °C, нанесите на жвачку и оставьте на пару минут. Жвачка размягчится, и её можно будет счистить щёткой. Эти способы хороши, но оставляют жирные пятна: после удаления резинки одежду нужно выстирать с порошком или жидкостью для посуды.</p><p>После всех процедур обязательно постирайте вещь (лучше в прохладной воде с моющим средством). Так вы удалите остатки жвачки и любых использованных химикатов. Благодаря таким методам даже застаревшую жвачку можно убрать без следов, главное – терпение и аккуратность.</p>`
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
        {sections.map((s) => (
          <ProblemSection key={s.id} {...s} />
        ))}
      </ProblemPageLayout>

      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Page
