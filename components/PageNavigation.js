import React from 'react'
import Link from 'next/link'

const PageNavigation = ({ prevPage, nextPage }) => {
  return (
    <div className="page-navigation">
      {prevPage && (
        <div className="page-nav-container">
          <Link legacyBehavior href={prevPage.href}>
            <a className="page-nav-link">
              <div className="page-nav-icon-container">
                <svg
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  className="page-nav-icon"
                >
                  <path
                    d="M19 468L471 19q19-19 45.5-19T562 19l92 91q19 19 19 45.5T654 201L468 385h492q27 0 45.5 18.5T1024 449v128q0 26-18.5 45T960 641H467l187 185q19 18 19 45t-19 45l-92 91q-19 19-45.5 19t-45.5-19L19 559Q0 540 0 513.5T19 468"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="page-nav-text-container">
                <h4 className="page-nav-title">Предыдущая</h4>
                <span className="page-nav-subtitle">{prevPage.title}</span>
              </div>
            </a>
          </Link>
        </div>
      )}

      {nextPage && (
        <div className="page-nav-container">
          <Link legacyBehavior href={nextPage.href}>
            <a className="page-nav-link">
              <div className="page-nav-icon-container">
                <svg
                  width="1024"
                  height="1024"
                  viewBox="0 0 1024 1024"
                  className="page-nav-icon"
                >
                  <path
                    d="m1005 558l-452 448q-19 19-45.5 19t-45.5-19l-92-91q-19-18-19-45t19-45l186-184H64q-27 0-45.5-19T0 577V449q0-27 18.5-45.5T64 385h493L370 200q-19-19-19-45.5t19-45.5l92-91q19-18 45.5-18T553 18l452 449q19 19 19 45.5t-19 45.5"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="page-nav-text-container">
                <h4 className="page-nav-title">Следующая</h4>
                <span className="page-nav-subtitle">{nextPage.title}</span>
              </div>
            </a>
          </Link>
        </div>
      )}

      <style jsx>{`
        .page-navigation {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--dl-layout-space-sixunits);
          margin-top: 60px;
          margin-bottom: 30px;
        }

        .page-nav-container {
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .page-nav-container:hover {
          transform: translateY(-2px);
        }

        .page-nav-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: inherit;
          gap: var(--dl-layout-space-unit);
        }

        .page-nav-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #f5f5f5;
          transition: all 0.3s ease;
        }

        .page-nav-container:hover .page-nav-icon-container {
          background-color: #45c5ed;
          color: white;
        }

        .page-nav-icon {
          width: 24px;
          height: 24px;
        }

        .page-nav-text-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .page-nav-title {
          color: #111111;
          font-size: 17px;
          font-weight: 600;
          margin: 0;
          margin-bottom: 14px; /* increased gap by 10px */
          font-family: var(--font-nunito), sans-serif;
        }

        .page-nav-subtitle {
          color: rgb(90, 90, 90);
          font-size: 15px;
          font-weight: 400;
          max-width: 200px;
          line-height: 1.4;
          font-family: var(--font-nunito), sans-serif;
        }

        @media (max-width: 768px) {
          .page-navigation {
            flex-direction: column;
            gap: var(--dl-layout-space-unit);
            align-items: center;
          }

          .page-nav-container {
            width: 100%;
            max-width: 320px;
            justify-content: center;
          }

          .page-nav-link {
            width: 100%;
            align-items: center;
            justify-content: flex-start;
          }

          .page-nav-icon-container {
            width: 50px;
            height: 50px;
            flex-shrink: 0;
          }

          .page-nav-text-container {
            flex: 1;
            align-items: flex-start;
            margin-left: var(--dl-layout-space-unit);
          }

          .page-nav-title {
            margin-bottom: 4px;
          }

          .page-nav-subtitle {
            max-width: none;
            width: 100%;
            text-align: left;
          }
        }
      `}</style>
    </div>
  )
}

export default PageNavigation
