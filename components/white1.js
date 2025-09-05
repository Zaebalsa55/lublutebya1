import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const White1 = (props) => {
  return (
    <>
      <div className="white1-white">
        <div className="white1-container1">
          <span className="white1-text1">
            {props.text ?? (
              <Fragment>
                <span className="white1-text4">
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
        <div className="white1-container2">
          <div className="white1-container3">
            <span className="white1-text2">
              {props.text3 ?? (
                <Fragment>
                  <span className="white1-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: 'Бесплатно',
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="white1-container4">
          <span className="white1-text3">
            {props.text1 ?? (
              <Fragment>
                <span className="white1-text5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Вызвать мастера',
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
          .white1-white {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            padding-top: var(--dl-layout-space-unit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-unit);
            justify-content: space-between;
            background-color: #fdfdf6;
          }
          .white1-container1 {
            flex: 1;
            width: auto;
            display: flex;
            max-width: 20px;
            min-width: 20px;
            align-self: stretch;
            max-height: auto;
            min-height: auto;
            justify-content: center;
          }
          .white1-text1 {
            width: auto;
            height: auto;
            align-self: center;
            font-family: var(--font-nunito);
          }
          .white1-container2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .white1-container3 {
            width: 200px;
            display: flex;
          }
          .white1-text2 {
            font-size: 15.5px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 500;
          }
          .white1-container4 {
            display: flex;
            min-width: 150px;
            align-self: center;
            justify-content: space-between;
          }
          .white1-text3 {
            fill: #4ec8ed;
            color: #4ec8ed;
            font-size: 16px;
            font-style: normal;
            font-family: var(--font-nunito);
            font-weight: 500;
            text-decoration: underline;
          }
          .white1-text4 {
            display: inline-block;
          }
          .white1-text5 {
            display: inline-block;
          }
          .white1-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .white1-white {
              width: 100%;
              max-width: 800px;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .white1-container3 {
              min-width: 150px;
            }
            .white1-text2 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .white1-white {
              gap: var(--dl-layout-space-halfunit);
              flex-wrap: wrap;
              max-width: 400px;
              align-items: center;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .white1-container1 {
              display: none;
            }
            .white1-container3 {
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .white1-white {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              flex-wrap: wrap;
              max-width: 300px;
              min-width: auto;
              align-items: center;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
              justify-content: center;
            }
            .white1-container1 {
              display: none;
            }
            .white1-container2 {
              width: 256px;
              height: 100%;
            }
            .white1-container3 {
              flex: 1;
              width: 10px;
              height: auto;
              display: flex;
              max-width: auto;
              min-width: auto;
              align-items: center;
              padding-right: 0px;
              justify-content: center;
            }
            .white1-text2 {
              width: auto;
              height: auto;
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

White1.defaultProps = {
  text: undefined,
  text1: undefined,
  text3: undefined,
}

White1.propTypes = {
  text: PropTypes.element,
  text1: PropTypes.element,
  text3: PropTypes.element,
}

export default White1
