import React, { Fragment } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import InlineCTA from './InlineCTA'

const Blue2 = ({ text3, imageAlt = 'image', text, text2, text1, imageSrc = '/ICONS/29.svg', onClick, clickableTitle = false, titleLink = null }) => {
  return (
    <>
      <div className="blue2-blue">
        <div className="blue2-container1">
          <div className="blue2-container2">
            <span className="blue2-text1">
              {text2 ?? (
                <Fragment>
                  <span className="blue2-text7">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: '1',
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          {clickableTitle && titleLink ? (
            <Link href={titleLink}>
              <strong className="blue2-text2 clickable-service-title">
                {text ?? (
                  <Fragment>
                    <span className="blue2-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: 'Text',
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </strong>
            </Link>
          ) : (
            <strong className={`blue2-text2 ${!clickableTitle ? 'normal-service-title' : ''}`}>
              {text ?? (
                <Fragment>
                  <span className="blue2-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Text',
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </strong>
          )}
        </div>
        <div className="blue2-container3">
          <p className="blue2-text3">
            {text1 ?? (
              <Fragment>
                <span className="blue2-text8">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: '\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e',
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </p>
          <svg
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 110 20"
            preserveAspectRatio="none"
            className="blue2-icon1"
          >
            <defs>
              <linearGradient
                id="grad23"
                x1="0"
                x2="110"
                y1="0"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#303030"></stop>
                <stop offset="100%" stopColor="#4EC8ED"></stop>
              </linearGradient>
            </defs>
            <path
              d="M0 10 H110"
              fill="none"
              stroke="url(#grad23)"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="11 11"
            ></path>
          </svg>
          <div className="blue2-container4" onClick={onClick}>
            <InlineCTA onClick={onClick} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blue2-blue {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 8px;
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: 8px;
            justify-content: center;
          }
          .blue2-container1 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            padding-left: 2px;
            flex-direction: row;
          }
          .blue2-container2 {
            max-width: 20px;
            min-width: 20px;
          }
          .blue2-text1 {
            width: auto;
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: var(--font-nunito);
            font-weight: 500;
          }
          .blue2-text2 {
            font-size: 16px;
            line-height: 1;
            font-style: normal;
            font-family: var(--font-nunito);
            font-weight: 300;
          }

          .clickable-service-title {
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .clickable-service-title:hover {
            opacity: 0.8;
          }

          .normal-service-title {
            color: var(--dl-color-theme-neutral-dark) !important;
          }
          .blue2-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 280px;
          }
          .blue2-text3 {
            font-size: 16px;
            line-height: 1;
            max-width: 100px;
            min-width: 100px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 400;
          }
          .blue2-icon1 {
            display: none;
          }
          .blue2-container4 {
            gap: 4px;
            width: 100%;
            display: flex;
          }
          .blue2-image {
            width: 20px;
            height: 19px;
            align-self: center;
            object-fit: cover;
            transition: transform 0.2s ease, filter 0.2s ease;
          }
          .blue2-text4 { display: none; }
          .blue2-text5 { display: none; }
          .blue2-text6 {
            display: inline-block;
          }
          .blue2-text7 {
            display: inline-block;
          }
          .blue2-text8 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .blue2-blue {
              gap: var(--dl-layout-space-halfunit);
              max-width: 700px;
              padding-left: 1px;
              justify-content: flex-end;
            }
            .blue2-container3 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .blue2-text3 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .blue2-blue {
              gap: var(--dl-layout-space-halfunit);
              max-width: 500px;
              padding-top: var(--dl-layout-space-unit);
              border-color: rgba(25, 24, 24, 0.72);
              border-style: dashed;
              border-width: 0.5px;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: center;
              background-color: #f9f9f1;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
            }
            .blue2-container1 {
              max-width: 210px;
              min-width: 210px;
            }
            .blue2-container2 {
              align-self: center;
            }
            .blue2-container3 {
              gap: var(--dl-layout-space-oneandhalfunits);
              min-width: auto;
            }
            .blue2-icon1 {
              display: none;
            }
            .blue2-text4 {
              width: 100%;
              height: 100%;
              display: flex;
              min-width: auto;
            }
          }
          @media (max-width: 479px) {
            .blue2-blue {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              max-width: 300px;
              border-color: #191818;
              border-style: dashed;
              border-width: 0.75px;
              padding-left: 4px;
              padding-right: 6px;
              justify-content: center;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0.5px;
            }
            .blue2-container1 {
              gap: 5px;
              width: 100%;
              max-width: 120px;
              min-width: 120px;
              padding-left: 0px;
              flex-direction: row;
            }
            .blue2-container2 {
              display: flex;
              align-self: center;
            }
            .blue2-text1 {
              width: 100%;
              height: 100%;
              font-size: 15px;
              text-align: center;
            }
            .blue2-text2 {
              width: 100%;
              font-size: 15px;
              max-width: 115px;
              min-width: 115px;
              font-style: normal;
              font-family: var(--font-nunito);
              font-weight: 400 !important;
              line-height: 1;
              letter-spacing: normal;
              text-transform: none;
              overflow-wrap: break-word;
            }
            .blue2-container3 {
              gap: var(--dl-layout-space-halfunit);
              min-width: 100px;
              min-height: 100px;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .blue2-text3 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              min-height: 31px;
              font-size: 16px;
              font-style: normal;
              text-align: center;
              font-family: var(--font-nunito);
              font-weight: 400;
              justify-content: center;
            }
            .blue2-icon1 {
              width: 60px;
              height: 2px;
              display: flex;
            }
            .blue2-container4 {
              max-width: var(--dl-layout-size-medium);
            }
            .blue2-text4 {
              fill: #4ec8ed;
              color: #4ec8ed;
              font-size: 14.5px;
              max-width: 150px;
              text-align: center;
              align-items: center;
              font-family: var(--font-nunito);
              justify-content: center;
              text-decoration: none;
              transition: color 0.3s ease, transform 0.2s ease;
            }

            /* Hover эффекты для кнопки "Вызвать мастера" */
            .blue2-container4 {
              cursor: pointer;
              transition: transform 0.2s ease, background-color 0.2s ease;
              border-radius: 4px;
              padding: 4px;
            }

            .blue2-container4:hover {
              transform: translateY(-2px);
            }

            .blue2-container4:hover .blue2-text4 {
              color: #3A9BC1 !important;
              fill: #3A9BC1 !important;
            }

            .blue2-container4:hover .blue2-image {
              transform: rotate(15deg);
              filter: brightness(1.2);
            }

            .blue2-container4:active {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  )
}


Blue2.propTypes = {
  text3: PropTypes.element,
  imageAlt: PropTypes.string,
  text: PropTypes.element,
  text2: PropTypes.element,
  text1: PropTypes.element,
  imageSrc: PropTypes.string,
  onClick: PropTypes.func,
  clickableTitle: PropTypes.bool,
  titleLink: PropTypes.string,
}

export default Blue2
