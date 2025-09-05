import React from 'react'
import dynamic from 'next/dynamic'
import Header from './Header'
import MainFooter from './MainFooter'
import SEOHead from './SEOHead'
import Breadcrumbs from './Breadcrumbs'
import AnchorLinksSection from './AnchorLinksSection'
import PageNavigation from './PageNavigation'

// Динамические импорты для некритичных компонентов
const RelatedArticles = dynamic(() => import('./RelatedArticles'), { 
  ssr: false 
})
const CallMasterSection = dynamic(() => import('./CallMasterSection'), {
  ssr: false
})
const InterestingAside = dynamic(() => import('./InterestingAside'), { 
  ssr: false 
})

const ProblemPageLayout = ({ 
  seo, 
  title, 
  anchors, 
  children, 
  navigation, 
  onOrderClick 
}) => {
  return (
    <div className="page-container10">
      <SEOHead {...seo} />
      <Header />
      <div className="page-breadcrumbs-section">
        <Breadcrumbs style="white-left" />
      </div>
      <main className="page-main">
        <div className="page-left-main-box">
          <div className="page-headertextwashermachine">
            <h1 className="page-text10" dangerouslySetInnerHTML={{ __html: title }} />
          </div>
          
          {anchors && (
            <AnchorLinksSection
              title={anchors.title}
              items={anchors.items}
            />
          )}

          {children}

          <CallMasterSection onOrderClick={onOrderClick} />
          
          {navigation && (
            <PageNavigation
              prevPage={navigation.prevPage}
              nextPage={navigation.nextPage}
            />
          )}
          
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
    </div>
  )
}

export default ProblemPageLayout
