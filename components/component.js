import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className={`component-container ${props.rootClassName} `}>
        <span className="component-text1">
          {props.text ?? (
            <Fragment>
              <span className="component-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Стиральная машина не сливает воду',
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </span>
        <div className="component-arrow">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="component-icon1"
          >
            <path
              d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .component-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            max-width: 159px;
            min-width: 159px;
            align-self: center;
            box-shadow: 0px 0px 5px 0px #d4d4d4;
            max-height: 217px;
            min-height: 217px;
            align-items: stretch;
            padding-top: var(--dl-layout-space-halfunit);
            border-color: #424242;
            border-width: 1px;
            padding-left: var(--dl-layout-space-halfunit);
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/problems 2/91-1500w.webp'),
              url('/problems 2/71-1500w.webp'), url('/problems 2/61-1500w.webp'),
              url('/problems 2/51-1500w.webp'), url('/problems 2/31-1500w.webp'),
              url('/problems 2/21-1500w.webp'), url('/problems 2/11-1500w.webp'),
              url('/problems/10-1500w.webp'), url('/problems/8-1500w.webp'),
              url('/problems/4-1500w.webp');
            background-repeat: repeatrepeatrepeatrepeatrepeatrepeatrepeatcenter,
              top leftcenter, top lefttop lefttop lefttop lefttop leftcenter;
            background-position: top lefttop lefttop leftcenter, top left,
              top leftcenter, top lefttop lefttop left, top leftcenter,
              top lefttop lefttop lefttop lefttop leftcenter,
              top lefttop lefttop lefttop lefttop leftcenter,
              top lefttop lefttop lefttop lefttop leftcenter,
              top lefttop lefttop lefttop lefttop leftcenter,
              top lefttop lefttop lefttop lefttop leftcenter;
          }
          .component-text1 {
            color: #ffffff;
            width: 100%;
            height: 100%;
            z-index: 1;
            position: relative;
            font-size: 17px;
            font-style: normal;
            font-family: var(--font-nunito);
            font-weight: 400;
          }
          .component-arrow {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            z-index: 1;
            position: relative;
            max-width: 41px;
            min-width: 41px;
            align-self: flex-end;
            max-height: 41px;
            min-height: 41px;
            align-items: center;
            border-color: #424242;
            border-width: 1px;
            justify-content: center;
            background-color: #424242;
          }
          .component-icon1 {
            fill: var(--dl-color-theme-neutral-dark);
            color: #ffffff;
          }
          .component-text2 {
            display: inline-block;
            font-family: var(--font-nunito);
          }
          @media (max-width: 991px) {
            .component-container {
              box-shadow: none;
            }
          }
          @media (max-width: 767px) {
            .component-container {
              box-shadow: none;
            }
            .component-text1 {
              font-size: 16;
              font-family: var(--font-nunito);
            }
            .component-text2 {
              font-family: var(--font-nunito);
            }
          }
          @media (max-width: 479px) {
            .component-container {
              width: 100%;
              max-width: 150px;
              min-width: 150px;
              box-shadow: none;
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  text: undefined,
  rootClassName: '',
}

AppComponent.propTypes = {
  text: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default AppComponent
