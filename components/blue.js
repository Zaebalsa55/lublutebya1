import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Blue = (props) => {
  return (
    <>
      <div className={`blue-blue ${props.rootClassName} `}>
        <div className="blue-container1">
          <div className="blue-container2">
            <span className="blue-text1">
              {props.text ?? (
                <Fragment>
                  <span className="blue-text7">
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
          <span className="blue-text2">
            {props.text1 ?? (
              <Fragment>
                <span className="blue-text5">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Text',
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="blue-container3">
          <span className="blue-text3">
            {props.text2 ?? (
              <Fragment>
                <span className="blue-text8">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: 'Бесплатно',
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </span>
          <img
            alt={props.vector96Alt}
            src={props.vector96Src}
            loading="lazy"
            className="blue-vector96"
          />
          <div className="blue-container4">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              loading="lazy"
              className="blue-image"
            />
            <span className="blue-text4">
              {props.text3 ?? (
                <Fragment>
                  <span className="blue-text6">
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
      </div>
      <style jsx>
        {`
          .blue-blue {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-halfunit);
            padding-bottom: var(--dl-layout-space-halfunit);
            justify-content: center;
            background-color: #ff0000;
          }
          .blue-container1 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            padding-left: 2px;
            flex-direction: row;
          }
          .blue-container2 {
            max-width: 20px;
            min-width: 20px;
          }
          .blue-text1 {
            width: auto;
            height: auto;
            align-self: center;
            font-style: normal;
            font-family: var(--font-nunito);
            font-weight: 500;
          }
          .blue-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 280px;
          }
          .blue-text3 {
            font-size: 15.5px;
            max-width: 100px;
            min-width: 100px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 500;
          }
          .blue-vector96 {
            width: auto;
            height: 100%;
            display: none;
          }
          .blue-container4 {
            gap: 4px;
            width: 100%;
            display: flex;
          }
          .blue-image {
            width: 20px;
            height: 19px;
            align-self: center;
            object-fit: cover;
          }
          .blue-text4 {
            fill: #4ec8ed;
            color: #4ec8ed;
            width: 100%;
            font-size: 14px;
            max-width: 150px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 500;
            text-decoration: none;
          }
          .blue-text5 {
            display: inline-block;
          }
          .blue-text6 {
            display: inline-block;
          }
          .blue-text7 {
            display: inline-block;
          }
          .blue-text8 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .blue-blue {
              gap: var(--dl-layout-space-halfunit);
              max-width: 700px;
              padding-left: var(--dl-layout-space-halfunit);
              justify-content: flex-end;
              background-color: #fdfdf6;
            }
            .blue-container3 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .blue-text3 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .blue-blue {
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
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
            }
            .blue-container2 {
              align-self: center;
            }
            .blue-container3 {
              gap: var(--dl-layout-space-oneandhalfunits);
              min-width: 150px;
            }
            .blue-vector96 {
              width: 100%;
              display: none;
              max-width: 100px;
              max-height: 2px;
            }
            .blue-text4 {
              width: 100%;
              height: 100%;
              display: flex;
              min-width: auto;
            }
          }
          @media (max-width: 479px) {
            .blue-blue {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              max-width: 300px;
              border-color: #191818;
              border-style: dashed;
              border-width: 0.75px;
              padding-left: var(--dl-layout-space-halfunit);
              padding-right: var(--dl-layout-space-unit);
              justify-content: center;
              background-color: #faf8f6;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0.5px;
            }
            .blue-container1 {
              gap: var(--dl-layout-space-unit);
              width: 100%;
              max-width: 120px;
              min-width: 120px;
              padding-left: 0px;
              flex-direction: row;
            }
            .blue-container2 {
              display: flex;
              align-self: center;
            }
            .blue-text1 {
              width: 100%;
              height: 100%;
              text-align: center;
            }
            .blue-text2 {
              width: 100%;
              font-size: 16px;
              max-width: 115px;
              min-width: 115px;
              font-style: normal;
              font-family: var(--font-nunito);
              font-weight: 400;
              overflow-wrap: break-word;
            }
            .blue-container3 {
              gap: var(--dl-layout-space-halfunit);
              min-width: 100px;
              min-height: 100px;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .blue-text3 {
              fill: var(--dl-color-theme-neutral-dark);
              color: var(--dl-color-theme-neutral-dark);
              width: 100%;
              height: 100%;
              display: flex;
              font-size: 17px;
              font-style: normal;
              text-align: center;
              font-family: var(--font-nunito);
              font-weight: 400;
              justify-content: center;
            }
            .blue-vector96 {
              width: 100%;
              display: flex;
              max-width: 75px;
              min-width: auto;
              min-height: 5px;
            }
            .blue-container4 {
              max-width: var(--dl-layout-size-medium);
            }
            .blue-text4 {
              fill: #4ec8ed;
              color: #4ec8ed;
              font-size: 14.5px;
              max-width: 150px;
              text-align: center;
              align-items: center;
              font-family: var(--font-nunito);
              justify-content: center;
              text-decoration: none;
            }
            .blue-text6 {
              color: #4ec8ed;
            }
          }
        `}
      </style>
    </>
  )
}

Blue.defaultProps = {
  text1: undefined,
  imageSrc1: '/ICONS/29.svg',
  vector96Alt: 'Vector968419',
  imageAlt1: 'image',
  text3: undefined,
  rootClassName: '',
  vector96Src: '/external/vector968419-ia3k.svg',
  text: undefined,
  text2: undefined,
}

Blue.propTypes = {
  text1: PropTypes.element,
  imageSrc1: PropTypes.string,
  vector96Alt: PropTypes.string,
  imageAlt1: PropTypes.string,
  text3: PropTypes.element,
  rootClassName: PropTypes.string,
  vector96Src: PropTypes.string,
  text: PropTypes.element,
  text2: PropTypes.element,
}

export default Blue
