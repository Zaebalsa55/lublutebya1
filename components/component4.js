import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Component4 = (props) => {
  return (
    <>
      <div className={`component4-container1 ${props.rootClassName} `}>
        <div className="component4-container2">
          <span className="component4-text1">
            {props.text ?? (
              <Fragment>
                <span className="component4-text6">
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
        <div className="component4-container3">
          <span className="component4-text2">
            {props.text1 ?? (
              <Fragment>
                <span className="component4-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: '\u0414\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f (\u043f\u0440\u0438 \u0440\u0435\u043c\u043e\u043d\u0442\u0435)',
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="component4-container4">
          <span className="component4-text3">
            {props.text2 ?? (
              <Fragment>
                <span className="component4-text5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: '\u041e\u0442 400 \u0433\u0440\u043d',
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
          .component4-container1 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            border-color: rgba(25, 24, 24, 0.5);
            border-style: solid;
            border-width: 0.5px;
          }
          .component4-container2 {
            flex: 1;
            width: auto;
            display: flex;
            max-width: auto;
            min-width: 25px;
            max-height: auto;
            min-height: 35px;
            align-items: stretch;
            border-color: rgba(25, 24, 24, 0.51);
            border-width: 0.5px;
            flex-direction: row;
            justify-content: center;
            background-color: rgba(217, 217, 217, 0.14);
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .component4-text1 {
            font-size: 15px;
            align-self: center;
            font-family: var(--font-roboto);
          }
          .component4-container3 {
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
          .component4-text2 {
            color: rgb(45, 45, 45);
            font-size: 15.5px;
            align-self: center;
            font-style: normal;
            font-family: var(--font-roboto);
            font-weight: 400;
          }
          .component4-container4 {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 100%;
            min-width: 150px;
            max-height: auto;
            min-height: 35px;
            align-items: stretch;
            border-color: rgba(25, 24, 24, 0.56);
            border-width: 0.5px;
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: row;
            justify-content: center;
            border-top-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .component4-text3 {
            font-size: 15.5px;
            align-self: center;
            font-style: normal;
            font-family: var(--font-roboto);
            font-weight: 400;
          }
          .component4-text4 {
            display: inline-block;
          }
          .component4-text5 {
            display: inline-block;
          }
          .component4-text6 {
            display: inline-block;
          }

          .component4root-class-name2 {
            background-color: #f7f7f5;
          }
          @media (max-width: 991px) {
            .component4-text1 {
              font-style: normal;
              font-weight: 500;
            }
            .component4-text2 {
              color: #161616;
              font-size: 15px;
            }
            .component4-text3 {
              color: #121212;
              font-size: 15.5px;
              align-self: center;
              font-style: normal;
              text-align: left;
              font-weight: 400;
            }
          }
          @media (max-width: 767px) {
            .component4root-class-name {
              background-color: transparent;
            }
          }
          @media (max-width: 479px) {
            .component4-container3 {
              align-self: center;
              align-items: center;
              padding-left: 0px;
            }
            .component4-text2 {
              width: 100%;
              min-width: 140px;
              align-self: stretch;
              text-align: center;
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .component4-container4 {
              width: 100%;
              min-width: var(--dl-layout-size-medium);
              min-height: auto;
              padding-left: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-unit);
            }
            .component4-text3 {
              font-size: 15px;
              text-align: center;
            }
            .component4root-class-name2 {
              background-color: #f7f7f5;
            }
          }
        `}
      </style>
    </>
  )
}

Component4.defaultProps = {
  rootClassName: '',
  text1: undefined,
  text2: undefined,
  text: undefined,
}

Component4.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.element,
  text2: PropTypes.element,
  text: PropTypes.element,
}

export default Component4
