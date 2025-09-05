import React from 'react'

const InterestingAside = ({
  title = 'Вам будет интересно:',
  items = [
    { text: 'Ошибки, которые приводят к дорогостоящему ремонту (и как их избежать)', img: '/100x100/image%203823137-200h.webp' },
    { text: 'Как продлить жизнь машине на 3–5 лет — простые привычки, которые сэкономят деньги', img: '/100x100/image%203823133-200h.webp' },
    { text: 'Почему стиралка воняет — 7 быстрых причин и что сделать прямо сейчас', img: '/100x100/image%203823132-200h.webp' },
    { text: 'Как экономить электричество и воду — реальные настройки и лайфхаки', img: '/100x100/image%203823134-200h.webp' },
    { text: 'Как безопасно перевозить и хранить стиральную машину', img: '/100x100/image%203823136-200w.webp' },
    { text: 'Мифы о стиралках: что правда, а что — вымысел?', img: '/100x100/image%203823142-200h.webp' },
  ],
  className = '',
}) => {
  return (
    <aside className={`interesting-aside ${className}`} aria-label={title}>
      <strong className="aside-title">{title}</strong>
      {items.map((it, idx) => (
        <div key={idx} className="aside-row">
          <div className="aside-thumb" role="img" aria-label={it.text} style={{ backgroundImage: `url('${it.img}')` }} />
          <span className="aside-text">{it.text}</span>
        </div>
      ))}

      <style jsx>{`
        .interesting-aside {
          gap: 24px;
          width: 100%;
          height: auto;
          display: flex;
          padding: 31px 34px;
          position: sticky;
          align-self: center;
          box-shadow: 5px 5px 4px 0px #d4d4d4;
          align-items: flex-start;
          flex-shrink: 0;
          flex-direction: column;
          background-color: #faf8f6;
          max-width: 417px;
        }
        .aside-title { color: #000; font-size: 17px; font-family: var(--font-nunito); font-weight: 500; }
        .aside-row { gap: 21px; display: flex; align-self: stretch; align-items: center; flex-shrink: 0; flex-direction: row-reverse; }
        .aside-text { color: rgb(41,41,41); flex-grow: 1; font-size: 15px; text-align: left; font-family: var(--font-nunito); font-weight: 300; }
        .aside-thumb { flex: 0 0 auto; width: 118px; height: 80px; background-size: cover; background-position: center; }
        @media (max-width: 991px) { .interesting-aside { display: none; } }
      `}</style>
    </aside>
  )
}

export default InterestingAside
