import { useEffect, useState } from 'react'
import Script from 'next/script'

const GoogleAnalyticsOptimized = ({ gtag = "G-XXXXXXXXXX" }) => {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Загружаем GA только после взаимодействия пользователя или через 3 секунды
    const timer = setTimeout(() => setShouldLoad(true), 3000)
    
    const handleUserInteraction = () => {
      setShouldLoad(true)
      clearTimeout(timer)
    }
    
    // Слушаем первое взаимодействие пользователя
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']
    events.forEach(event => 
      document.addEventListener(event, handleUserInteraction, { once: true, passive: true })
    )
    
    return () => {
      clearTimeout(timer)
      events.forEach(event => 
        document.removeEventListener(event, handleUserInteraction)
      )
    }
  }, [])

  if (!shouldLoad) return null

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag}', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: false
            });
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href
            });
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalyticsOptimized
