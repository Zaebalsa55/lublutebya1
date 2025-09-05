import React from 'react'

const AnchorLinksSection = ({
  title,
  items = [],
}) => {
  return (
    <section className="toc-container" aria-label={title}>
      <svg width="9" xmlns="http://www.w3.org/2000/svg" height="9" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet" className="dot tr"><circle r="3.75" cx="5" cy="5" fill="#606060" vectorEffect="non-scaling-stroke"></circle></svg>
      <svg width="9" xmlns="http://www.w3.org/2000/svg" height="9" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet" className="dot br"><circle r="3.75" cx="5" cy="5" fill="#606060" vectorEffect="non-scaling-stroke"></circle></svg>
      <svg width="9" xmlns="http://www.w3.org/2000/svg" height="9" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet" className="dot bl"><circle r="3.75" cx="5" cy="5" fill="#606060" vectorEffect="non-scaling-stroke"></circle></svg>
      <svg width="9" xmlns="http://www.w3.org/2000/svg" height="9" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet" className="dot tl"><circle r="3.75" cx="5" cy="5" fill="#606060" vectorEffect="non-scaling-stroke"></circle></svg>

      <strong className="toc-title"><span>{title}</span><br /></strong>
      <ul className="toc-list">
        {items.map((it, idx) => (
          <li className="toc-item" key={idx}>
            <img alt={it.alt || 'item'} src={it.icon || '/external/vector8669-r6fr.svg'} loading="lazy" className="toc-icon" />
            <a href={it.href} className="toc-link">{it.text}</a>
          </li>
        ))}
      </ul>

      <svg width="330" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 330 20" preserveAspectRatio="none" className="dash top"><path d="M0 10 H330" fill="none" stroke="#000000" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeDasharray="11 11"></path></svg>
      <svg width="330" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 330 20" preserveAspectRatio="none" className="dash bottom"><path d="M0 10 H330" fill="none" stroke="#000000" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeDasharray="11 11"></path></svg>
      <svg width="20" xmlns="http://www.w3.org/2000/svg" height="110" viewBox="0 0 20 110" preserveAspectRatio="none" className="dash right"><path d="M10 0 V110" fill="none" stroke="#000000" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeDasharray="11 11"></path></svg>
      <svg width="20" xmlns="http://www.w3.org/2000/svg" height="110" viewBox="0 0 20 110" preserveAspectRatio="none" className="dash left"><path d="M10 0 V110" fill="none" stroke="#000000" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeDasharray="11 11"></path></svg>

      <style jsx>{`
        .toc-container { position: relative; display: block; padding: var(--dl-layout-space-unit); background-color: #ffffff; border-radius: var(--dl-layout-radius-imageradius); box-shadow: 5px 5px 20px 0px #d4d4d4; margin: 0 0 var(--dl-layout-space-unit) 0; }
        .dot { position: absolute; width: 9px; height: 9px; }
        .tr { top: -15px; right: -14px; }
        .br { right: -15px; bottom: -14px; }
        .bl { left: -15px; bottom: -14px; }
        .tl { top: -15px; left: -14px; }
        .dash { position: absolute; }
        .top { top: -12px; left: -1px; width: 100%; height: 5px; }
        .bottom { bottom: -12px; left: -2px; width: 100%; height: 5px; }
        .right { top: 0; right: -12px; width: 5px; height: 100%; }
        .left { bottom: -3px; left: -12px; width: 5px; height: 100%; }
        .toc-title { color: #45C5ED; font-size: 16.5px; font-family: var(--font-nunito); font-weight: 500; line-height: 1.3; display: inline-block; }
        .toc-list { list-style: none; padding: 0; margin: calc(var(--dl-layout-space-halfunit) * 2) 0 0; display: grid; grid-template-columns: 1fr; gap: 6px; }
        .toc-item { display: flex; align-items: center; gap: 8px; }
        .toc-icon { width: 16px; height: 16px; object-fit: contain; transition: filter .2s ease; }
        .toc-link { color: #000; text-decoration: none; font-family: var(--font-nunito); font-size: 15px; font-weight: 300; }
        .toc-link:hover { text-decoration: underline; }
        .toc-item:hover .toc-icon { filter: invert(64%) sepia(66%) saturate(604%) hue-rotate(162deg) brightness(103%) contrast(101%); }
        @media (max-width: 767px) { .toc-container { max-width: 400px; margin-left: auto; margin-right: auto; } }
        @media (max-width: 479px) { .toc-container { max-width: 290px; padding-left: 15px; padding-right: 15px; } .toc-title { font-size: 16.5px; } .toc-link { font-size: 14px; } }
      `}</style>
    </section>
  )
}

export default AnchorLinksSection
