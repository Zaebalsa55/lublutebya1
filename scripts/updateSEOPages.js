// Скрипт для быстрого обновления SEO на всех страницах проблем
const fs = require('fs')
const path = require('path')

const pages = [
  'negreetvodu.js',
  'nekrutitbaraban.js', 
  'nenabiraetvodu.js',
  'neotjimaet.js',
  'neotkrivaetsadverca.js',
  'nevkluchaetsa.js',
  'protekaet.js',
  'silnoshumit.js',
  'zavisaetnaprogramme.js'
]

const getUpdatedPageContent = (originalContent, pageName) => {
  const pageKey = `/${pageName.replace('.js', '')}`
  
  // Обновляем импорты
  const updatedImports = originalContent.replace(
    /import React from 'react'\nimport Head from 'next\/head'\n\nimport Header from '\.\.\/components\/Header'\nimport MainFooter from '\.\.\/components\/MainFooter'/,
    `import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import MainFooter from '../components/MainFooter'
import SEOHead from '../components/SEOHead'
import { getSEOData } from '../utils/seoConfig'
import { getProblemPageStructuredData } from '../utils/structuredData'`
  )

  // Обновляем Head компонент
  const updatedHead = updatedImports.replace(
    /<Head>\s*<title>Pesky Trusty Pony<\/title>\s*<meta property="og:title" content="Pesky Trusty Pony" \/>\s*<\/Head>/,
    `<SEOHead
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords}
          canonical={\`\${baseUrl}${pageKey}\`}
          structuredData={structuredData}
        />`
  )

  // Добавляем SEO логику в компонент
  const updatedComponent = updatedHead.replace(
    /const Page = \(props\) => {\s*return \(/,
    `const Page = (props) => {
  const seoData = getSEOData('${pageKey}')
  const baseUrl = 'https://sosamba3.vercel.app'
  const structuredData = getProblemPageStructuredData(
    seoData.h1,
    seoData.description,
    \`\${baseUrl}${pageKey}\`
  )

  return (`
  )

  return updatedComponent
}

// Функция для обновления файла
const updatePageFile = (fileName) => {
  const filePath = path.join(__dirname, '../pages', fileName)
  
  if (!fs.existsSync(filePath)) {
    console.log(`Файл ${fileName} не найден`)
    return
  }

  const originalContent = fs.readFileSync(filePath, 'utf8')
  const updatedContent = getUpdatedPageContent(originalContent, fileName)
  
  fs.writeFileSync(filePath, updatedContent, 'utf8')
  console.log(`✅ Обновлен файл ${fileName}`)
}

// Обновляем все файлы
console.log('Начинаем обновление SEO для всех страниц проблем...')
pages.forEach(updatePageFile)
console.log('✅ Все страницы обновлены!')
