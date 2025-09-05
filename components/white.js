import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const White = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="white-white">
        <div className="white-container1">
          <span className="white-text1">
            {props.text ?? (
              <Fragment>
                <span className="white-text8">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_x2d3my'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="white-container2">
          <span>
            {props.text1 ?? (
              <Fragment>
                <span className="white-text5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_m-xAaa'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="white-container3">
          <span className="white-text3">
            {props.text2 ?? (
              <Fragment>
                <span className="white-text7">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_VfTsWS'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="white-container4">
          <span className="white-text4">
            {props.text3 ?? (
              <Fragment>
                <span className="white-text6">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_p4Hhyf'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .white-white {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: auto;
            min-width: auto;
            min-height: auto;
            padding-top: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            background-color: #fdfdf6;
          }
          .white-container1 {
            flex: 1;
            width: auto;
            display: flex;
            max-width: 20px;
            min-width: 20px;
            max-height: auto;
            min-height: auto;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .white-text1 {
            width: auto;
            height: auto;
            align-self: center;
            font-family: var(--font-nunito);
          }
          .white-container2 {
            flex: 1;
            display: flex;
            max-width: 900px;
          }
          .white-container3 {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 200px;
            min-width: 200px;
          }
          .white-text3 {
            width: 100%;
            height: 100%;
            text-align: center;
          }
          .white-container4 {
            flex: 1;
            display: flex;
            max-width: 200px;
          }
          .white-text4 {
            color: #4ec8ed;
            font-size: 16px;
            font-style: normal;
            font-family: var(--font-nunito);
            font-weight: 400;
            text-decoration: underline;
          }
          .white-text5 {
            display: inline-block;
          }
          .white-text6 {
            display: inline-block;
          }
          .white-text7 {
            display: inline-block;
          }
          .white-text8 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .white-container3 {
              width: auto;
              height: auto;
            }
            .white-text3 {
              width: 100%;
              height: 100%;
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .white-white {
              width: auto;
              height: auto;
              padding-top: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .white-container3 {
              min-width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

White.defaultProps = {
  text1: undefined,
  text3: undefined,
  text2: undefined,
  text: undefined,
}

White.propTypes = {
  text1: PropTypes.element,
  text3: PropTypes.element,
  text2: PropTypes.element,
  text: PropTypes.element,
}

export default White
