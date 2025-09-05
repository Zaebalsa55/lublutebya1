import './teleporthq.css';
import './style.css';
import '../styles/problem-pages.css';
import GoogleAnalytics from '../components/GoogleAnalytics';
import SiteTagline from '../components/SiteTagline';
import { nunito, roboto } from '../utils/fonts';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const measureDOM = () => {
      const root = document.body || document.documentElement;
      let totalNodes = 0;
      let elementNodes = 0;
      let textNodes = 0;
      let commentNodes = 0;
      let maxDepth = 0;
      let maxChildren = 0;

      const stack = [[root, 1]];
      while (stack.length) {
        const [node, depth] = stack.pop();
        totalNodes++;
        if (depth > maxDepth) maxDepth = depth;
        const children = node.childNodes ? node.childNodes.length : 0;
        if (children > maxChildren) maxChildren = children;
        switch (node.nodeType) {
          case 1: elementNodes++; break; // ELEMENT_NODE
          case 3: textNodes++; break; // TEXT_NODE
          case 8: commentNodes++; break; // COMMENT_NODE
          default: break;
        }
        if (node.childNodes && node.childNodes.length) {
          for (let i = 0; i < node.childNodes.length; i++) {
            stack.push([node.childNodes[i], depth + 1]);
          }
        }
      }
      const uniqueElements = document.querySelectorAll('*').length;
      // eslint-disable-next-line no-console
      console.log('[DOM metrics]', {
        totalNodes,
        elementNodes,
        uniqueElements,
        textNodes,
        commentNodes,
        maxDepth,
        maxChildren,
      });
    };
    if ('requestIdleCallback' in window) {
      // @ts-ignore
      window.requestIdleCallback(measureDOM, { timeout: 2000 });
    } else {
      setTimeout(measureDOM, 0);
    }
  }, []);

  return (
    <div className={`${nunito.variable} ${roboto.variable}`}>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gtag={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <Component {...pageProps} />
      <SiteTagline />
    </div>
  );
}
