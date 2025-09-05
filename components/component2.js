import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Component2 = (props) => {
  return (
    <>
      <div className={`component2-container1 ${props.rootClassName} `}>
        <div className="component2-container2">
          <span className="component2-text1">
            {props.text ?? (
              <Fragment>
                <span className="component2-text6">
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
        <div className="component2-container3">
          <span className="component2-text2">
            {props.text1 ?? (
              <Fragment>
                <span className="component2-text5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Диагностика оборудования (при ремонте)',
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="component2-container4">
          <span className="component2-text3">
            {props.text2 ?? (
              <Fragment>
                <span className="component2-text4">
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
      <style jsx>
        {`
          .component2-container1 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            border-color: rgba(25, 24, 24, 0.18);
            border-width: 1px;
          }
          .component2-container2 {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: auto;
            min-width: var(--dl-layout-size-small);
            max-height: auto;
            min-height: 35px;
            align-items: stretch;
            border-color: rgba(25, 24, 24, 0.2);
            border-width: 1px;
            flex-direction: row;
            justify-content: center;
            background-color: rgba(217, 217, 217, 0.14);
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .component2-text1 {
            font-size: 15px;
            align-self: center;
            font-family: var(--font-nunito);
          }
          .component2-container3 {
            width: 100%;
            display: flex;
            max-width: auto;
            min-width: 150px;
            max-height: auto;
            min-height: 40px;
            align-items: flex-start;
            padding-left: var(--dl-layout-space-unit);
            justify-content: flex-start;
          }
          .component2-text2 {
            color: #2d2d2d;
            font-size: 15px;
            align-self: center;
            font-style: normal;
            font-weight: 500;
          }
          .component2-container4 {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 100%;
            min-width: 150px;
            max-height: auto;
            min-height: 35px;
            align-items: stretch;
            border-color: rgba(25, 24, 24, 0.2);
            border-width: 1px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: row;
            justify-content: center;
            border-top-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .component2-text3 {
            align-self: center;
          }
          .component2-text4 {
            display: inline-block;
            font-style: normal;
            font-family: var(--font-nunito);
            font-weight: 500;
          }
          .component2-text5 {
            display: inline-block;
            font-family: var(--font-nunito);
          }
          .component2-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .component2-text3 {
              align-self: center;
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .component2-container3 {
              align-self: center;
              align-items: center;
              padding-left: 0px;
            }
            .component2-text2 {
              width: 100%;
              min-width: 140px;
              align-self: stretch;
              text-align: center;
            }
            .component2-container4 {
              width: 100%;
              min-width: var(--dl-layout-size-medium);
              min-height: auto;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .component2-text3 {
              font-size: 12px;
              text-align: center;
            }
            .component2-text4 {
              font-style: normal;
              font-family: var(--font-nunito);
              font-weight: 500;
            }
            .component2-text5 {
              font-family: var(--font-nunito);
            }
          }
        `}
      </style>
    </>
  )
}

Component2.defaultProps = {
  text2: undefined,
  text1: undefined,
  text: undefined,
  rootClassName: '',
}

Component2.propTypes = {
  text2: PropTypes.element,
  text1: PropTypes.element,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Component2
