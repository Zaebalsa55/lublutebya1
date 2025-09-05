// Структурированные данные для локального бизнеса

// Базовая информация о компании
export const getLocalBusinessData = (currentUrl = '') => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "РемСтирМаш",
    "description": "Профессиональный ремонт стиральных машин в Одессе",
    "url": currentUrl,
    "telephone": "+380984671352",
    "email": "remstirmash@gmail.com",
    "image": "https://sosamba3.vercel.app/logo.jpg",
    "logo": "https://sosamba3.vercel.app/logo.jpg",
    "priceRange": "$$",
    "paymentAccepted": "наличные, банковская карта",
    "currenciesAccepted": "UAH",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "пл. Независимости, 1",
      "addressLocality": "Одесса",
      "addressRegion": "Одесская область",
      "postalCode": "65000",
      "addressCountry": "UA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.4825",
      "longitude": "30.7233"
    },
    "openingHours": "Mo-Su 09:00-21:00",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+380984671352",
      "contactType": "customer service",
      "areaServed": "Одесса",
      "availableLanguage": ["русский", "украинский"]
    },
    "areaServed": {
      "@type": "City",
      "name": "Одесса"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги по ремонту стиральных машин",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Диагностика стиральной машины",
            "description": "Бесплатная диагностика при ремонте"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ремонт стиральных машин",
            "description": "Комплексный ремонт стиральных машин всех марок"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Выкуп б/у стиральных машин",
            "description": "Выкуп стиральных машин в любом состоянии"
          }
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Анна К."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Отличный сервис! Мастер приехал в день обращения, быстро определил проблему и устранил."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
}

// Структурированные данные для конкретной услуги
export const getServiceData = (serviceName, serviceDescription, currentUrl = '') => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "РемСтирМаш",
      "telephone": "+380984671352",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "пл. Независимости, 1",
        "addressLocality": "Одесса",
        "addressRegion": "Одесская область",
        "postalCode": "65000",
        "addressCountry": "UA"
      }
    },
    "serviceType": "Ремонт бытовой техники",
    "areaServed": {
      "@type": "City",
      "name": "Одесса"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceName,
      "itemListElement": [
        {
          "@type": "Offer",
          "price": "от 400 грн",
          "priceCurrency": "UAH",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName,
            "description": serviceDescription
          },
          "seller": {
            "@type": "Organization",
            "name": "РемСтирМаш"
          }
        }
      ]
    }
  }
}

// Хлебные крошки для навигации
export const getBreadcrumbData = (breadcrumbItems) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

// FAQ структурированные данные для страниц проблем
export const getFAQData = (faqItems) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }
}

// Организационные данные
export const getOrganizationData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "РемСтирМаш",
    "url": "https://sosamba3.vercel.app",
    "logo": "https://sosamba3.vercel.app/logo.jpg",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+380984671352",
        "contactType": "customer service",
        "areaServed": "UA",
        "availableLanguage": ["Russian", "Ukrainian"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "пл. Независимости, 1",
      "addressLocality": "Одесса",
      "addressRegion": "Одесская область",
      "postalCode": "65000",
      "addressCountry": "UA"
    },
    "sameAs": [
      "https://www.facebook.com/remstirmash",
      "https://www.instagram.com/remstirmash"
    ]
  }
}

// Структурированные данные для обычной статьи
export const getArticleStructuredData = (headline, description, currentUrl = '', image = '') => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "mainEntityOfPage": currentUrl,
    "image": image ? [image] : undefined,
    "author": { "@type": "Organization", "name": "РемСтирМаш" },
    "publisher": { "@type": "Organization", "name": "РемСтирМаш" }
  }
}

// Комбинированные структурированные данные для главной страницы
export const getMainPageStructuredData = (currentUrl) => {
  const localBusiness = getLocalBusinessData(currentUrl)
  const organization = getOrganizationData()
  
  return [localBusiness, organization]
}

// Структурированные данные для страниц проблем
export const getProblemPageStructuredData = (problemTitle, problemDescription, currentUrl) => {
  const serviceData = getServiceData(problemTitle, problemDescription, currentUrl)
  const localBusiness = getLocalBusinessData(currentUrl)
  
  // FAQ для типичных вопросов по проблемам
  const commonFAQ = getFAQData([
    {
      question: "Сколько стоит вызов мастера?",
      answer: "Вызов мастера бесплатный при условии ремонта. При отказе от ремонта диагностика стоит 300 грн."
    },
    {
      question: "Как быстро приедет мастер?",
      answer: "Мастер приезжает в день обращения в удобное для вас время."
    },
    {
      question: "Какая гарантия на ремонт?",
      answer: "Мы предоставляем гарантию на все виды ремонтных работ."
    }
  ])
  
  return [serviceData, localBusiness, commonFAQ]
}
