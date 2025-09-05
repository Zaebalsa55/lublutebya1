import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero8 = (props) => {
  return (
    <>
      <div className="hero8-header26 thq-section-padding">
        <div className="hero8-max-width thq-section-max-width thq-flex-column">
          <div className="hero8-column">
            <div className="hero8-content">
              <h1 className="hero8-text1 thq-heading-1">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="hero8-text8">
                      Professional Washing Machine Repair Services
                    </span>
                  </Fragment>
                )}
              </h1>
              <p className="hero8-text2 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="hero8-text6">
                      Welcome to our website dedicated to washing machine
                      repair. Find solutions to common issues and maintenance
                      tips here.
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="hero8-actions">
                <button className="thq-button-filled hero8-button1">
                  <span className="thq-body-small">
                    {props.action1 ?? (
                      <Fragment>
                        <span className="hero8-text7">Learn more</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button className="thq-button-outline hero8-button2">
                  <span className="thq-body-small">
                    {props.action2 ?? (
                      <Fragment>
                        <span className="hero8-text5">Contact us</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            loading="lazy"
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
      <style jsx>
        {`
          .hero8-header26 {
            gap: var(--dl-layout-space-twounits);
          }
          .hero8-max-width {
            align-self: center;
          }
          .hero8-column {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero8-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero8-text1 {
            text-align: center;
          }
          .hero8-text2 {
            text-align: center;
          }
          .hero8-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero8-text5 {
            display: inline-block;
          }
          .hero8-text6 {
            display: inline-block;
          }
          .hero8-text7 {
            display: inline-block;
          }
          .hero8-text8 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .hero8-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero8-button1 {
              width: 100%;
            }
            .hero8-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero8.defaultProps = {
  action2: undefined,
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1655776012241-0729290d1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDU3Mjk2Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  image1Alt: 'Washing machine repair',
  action1: undefined,
  heading1: undefined,
}

Hero8.propTypes = {
  action2: PropTypes.element,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero8
