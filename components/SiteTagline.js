const SiteTagline = () => {
  return (
    <>
      <span className="site-tagline">
        <span className="site-tagline__name">&quot;Ваше название&quot;</span>
        <span>: сервис по ремонту стиральных машин</span>
        <br />
        <span>© 2025</span>
      </span>
      <style jsx>{`
        .site-tagline {
          color: rgb(56, 56, 56);
          display: block;
          width: 100%;
          text-align: center;
          font-family: var(--font-nunito);
          font-size: 16px;
          font-weight: 300;
          line-height: 1.25;
          text-decoration: none;
          margin: 8px auto;
          background: transparent !important;
          background: none !important;
          box-shadow: none !important;
          border: none !important;
          padding: 0 !important;
        }

        .site-tagline__name {
          color: #87ceeb;
          font-weight: 600;
          font-style: normal;
        }

        @media (max-width: 991px) {
          .site-tagline {
            padding: 0 16px calc(25px + env(safe-area-inset-bottom, 0px)) 16px !important;
          }
        }

        @media (max-width: 479px) {
          .site-tagline {
            max-width: 100%;
            min-width: auto;
            margin-top: 8px;
            font-size: 14px;
            line-height: 1.25;
          }
        }
      `}</style>
    </>
  )
}

export default SiteTagline
