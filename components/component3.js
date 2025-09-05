import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Component3 = (props) => {
  return (
    <>
      <div className={`component3-container1 ${props.rootClassName} `}>
        <div className="component3-container2">
          <span className="component3-text1">
            {props.text ?? (
              <Fragment>
                <span className="component3-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: '\u0417\u0430\u043c\u0435\u043d\u0430 \u043c\u0430\u043d\u0436\u0435\u0442\u044b \u043b\u044e\u043a\u0430 \u043d\u0430 \u0441\u0442\u0438\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u0435 LG',
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
          .component3-container1 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            min-width: 250px;
            box-shadow: 0px 10px 20px 0px #d4d4d4;
            min-height: 330px;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/Nashi raboti/101-1500w.webp'),
              url('/Nashi raboti/81-1500w.webp'),
              url('/Nashi raboti/72-1500w.webp'),
              url('/Nashi raboti/62-1500w.webp'),
              url('/Nashi raboti/52-1500w.webp'),
              url('/Nashi raboti/41-1500w.webp'),
              url('/Nashi raboti/32-1500w.webp'),
              url('/Nashi raboti/2-1500w.webp'),
              url('/Nashi raboti/1%20(1)-1500w.webp');
            scroll-snap-align: start;
          }
          .component3-container2 {
            width: 100%;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fefef9;
          }
          .component3-text1 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            width: 264px;
            height: auto;
            font-size: 15px;
            font-style: normal;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 300;
            line-height: normal;
            font-stretch: normal;
            padding-left: var(--dl-layout-space-halfunit);
            padding-right: var(--dl-layout-space-halfunit);
            text-decoration: none;
          }
          .component3-text2 {
            color: #000000;
            display: inline-block;
          }
          @media (max-width: 991px) {
            .component3-text1 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .component3-container1 {
              width: auto;
              min-width: 250px;
              max-height: 370px;
            }
            .component3-text1 {
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-halfunit);
            }
          }
          @media (max-width: 479px) {
            .component3-container1 {
              width: 100%;
              display: flex;
              max-width: 290px;
              align-self: stretch;
              flex-direction: column;
              background-size: cover;
              scroll-snap-stop: always;
              scroll-snap-align: center;
            }
            .component3-container2 {
              background-color: #fdfdf6;
            }
            .component3-text1 {
              font-size: 14px;
              font-style: normal;
              font-family: var(--font-nunito);
            font-weight: 300;
              letter-spacing: 0.3px;
            }
          }
        `}
      </style>
    </>
  )
}

Component3.defaultProps = {
  text: undefined,
  rootClassName: '',
}

Component3.propTypes = {
  text: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Component3
