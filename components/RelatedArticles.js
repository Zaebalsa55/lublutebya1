import React from 'react'
import Link from 'next/link'

const RELATED = [
  {
    href: '/jirniepyatna',
    title: 'Как избавиться от жирных пятен на одежде в домашних условиях?',
    image: '/100x100/jir.png',
    alt: 'Как избавиться от жирных пятен на одежде'
  },
  {
    href: '/vlapalisvkrov',
    title: 'Как удалить пятна крови с одежды без следов?',
    image: '/100x100/krov.png',
    alt: 'Как удалить пятна крови с одежды'
  },
  {
    href: '/jvachka',
    title: 'Как самостоятельно удалить жвачку с одежды?',
    image: '/100x100/jvanik.png',
    alt: 'Как удалить жвачку с одежды'
  },
  {
    href: '/puhovik',
    title: 'Как правильно стирать пуховик в автоматической стиральной машине?',
    image: '/100x100/puhovik.png',
    alt: 'Как правильно стирать пуховик'
  }
]

const RelatedArticles = () => {
  return (
    <section className="related-articles">
      <h4 className="related-title">Другие статьи</h4>
      <div className="related-grid">
        {RELATED.map((item, idx) => (
          <Link legacyBehavior href={item.href} key={idx}>
            <a className="related-card">
              <div className="thumb-wrap">
                <img src={item.image} alt={item.alt} className="thumb-img" loading="lazy" />
              </div>
              <div className="card-body">
                <p className="card-text">{item.title}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .related-articles { margin-top: 20px; margin-bottom: 30px; max-width: 980px; margin-left: auto; margin-right: auto; }
        .related-title { margin: 15px 0 30px 0; font-size: 1.1rem; color: #232020; font-family: var(--font-nunito); text-align: center; }
        .related-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px; justify-content: center; }
        .related-card { display: grid; grid-template-columns: 120px 1fr; align-items: center; gap: 16px; padding: 14px; border-radius: 12px; background: #fff; text-decoration: none; color: inherit; box-shadow: 0 10px 24px rgba(0,0,0,.08); transition: transform .2s ease, box-shadow .2s ease; }
        .related-card:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(0,0,0,.12); }
        .thumb-wrap { width: 120px; height: 90px; border-radius: 10px; overflow: hidden; background: linear-gradient(45deg, #f0f4f7, #e9eef2); display: flex; align-items: center; justify-content: center; }
        .thumb-img { width: 100%; height: 100%; object-fit: cover; }
        .card-body { display: flex; align-items: center; }
        .card-text { margin: 0; font-size: 0.92rem; line-height: 1.35; font-family: var(--font-nunito), sans-serif; font-weight: 400; }
        .related-card:hover .card-text { color: #4EC8ED; }
        @media (max-width: 480px) {
          .related-grid { grid-template-columns: 1fr; gap: 16px; }
          .related-card { grid-template-columns: 100px 1fr; padding: 12px; }
          .thumb-wrap { width: 100px; height: 76px; }
          .card-text { font-size: 0.89rem; font-weight: 400; }
        }
      `}</style>
    </section>
  )
}

export default RelatedArticles
