import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features1 = (props) => {
  return (
    <>
      <div className="features1-layout251 thq-section-padding">
        <div className="features1-max-width thq-section-max-width">
          <div className="thq-flex-row features1-section-title">
            <div className="features1-column thq-flex-column">
              <span className="thq-body-small">
                {props.slogan ?? (
                  <Fragment>
                    <span className="features1-text15">
                      Empowering You to Fix Your Washing Machine Issues
                    </span>
                  </Fragment>
                )}
              </span>
              <h2 className="thq-heading-2 features1-text11">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="features1-text13">Key Features</span>
                  </Fragment>
                )}
              </h2>
            </div>
            <span className="thq-body-small">
              {props.sectionDescription ?? (
                <Fragment>
                  <span className="features1-text18">
                    Explore the key features of our website that provide
                    information on common washing machine issues and repair
                    methods.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features1-content1">
            <div className="features1-row thq-flex-row">
              <div className="features1-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  loading="lazy"
                  className="thq-img-ratio-4-3 features1-feature1-image"
                />
                <div className="features1-content2 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features1-text22">
                          Comprehensive Information
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features1-text19">
                          Detailed explanations on common washing machine
                          malfunctions like water drainage issues and how to
                          troubleshoot them.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features1-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  loading="lazy"
                  className="thq-img-ratio-4-3 features1-feature2-image"
                />
                <div className="features1-content3 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features1-text17">
                          Preventive Tips
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features1-text23">
                          Valuable advice on maintenance practices to prevent
                          washing machine breakdowns and extend its lifespan.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features1-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  loading="lazy"
                  className="thq-img-ratio-4-3 features1-feature3-image"
                />
                <div className="features1-content4 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features1-text16">
                          DIY Repair Recommendations
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features1-text21">
                          Step-by-step guidance on how to perform simple repairs
                          on your washing machine independently.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="features1-actions">
            <button className="thq-button-filled features1-button1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features1-text14">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features1-button2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features1-text20">Get Started</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features1-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features1-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-column {
            gap: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-content1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-row {
            align-items: flex-start;
          }
          .features1-feature1 {
            flex: 1;
          }
          .features1-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-feature2 {
            flex: 1;
          }
          .features1-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-feature3 {
            flex: 1;
          }
          .features1-content4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-actions {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .features1-text13 {
            display: inline-block;
          }
          .features1-text14 {
            display: inline-block;
          }
          .features1-text15 {
            display: inline-block;
          }
          .features1-text16 {
            display: inline-block;
          }
          .features1-text17 {
            display: inline-block;
          }
          .features1-text18 {
            display: inline-block;
          }
          .features1-text19 {
            display: inline-block;
          }
          .features1-text20 {
            display: inline-block;
          }
          .features1-text21 {
            display: inline-block;
          }
          .features1-text22 {
            display: inline-block;
          }
          .features1-text23 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features1-section-title {
              align-items: flex-start;
              flex-direction: column;
            }
            .features1-feature1-image {
              height: 260px;
            }
            .features1-feature2-image {
              height: 260px;
            }
            .features1-feature3-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .features1-column {
              width: 100%;
            }
            .features1-text11 {
              text-align: center;
            }
            .features1-row {
              flex-direction: column;
            }
            .features1-feature1-image {
              width: 100%;
            }
            .features1-feature2 {
              width: auto;
            }
            .features1-feature2-image {
              width: 100%;
            }
            .features1-feature3 {
              width: auto;
            }
            .features1-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features1-actions {
              width: 100%;
              flex-direction: column;
            }
            .features1-button1 {
              width: 100%;
            }
            .features1-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features1.defaultProps = {
  sectionTitle: undefined,
  mainAction: undefined,
  slogan: undefined,
  feature3Title: undefined,
  feature1ImageAlt: 'Illustration of a washing machine with repair tools',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1620673196595-1b83ac632ab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDU3Mjk2N3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDU3Mjk2N3w&ixlib=rb-4.1.0&q=80&w=1080',
  sectionDescription: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1593141216535-b3472d317f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDU3Mjk2OHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3ImageAlt: 'Illustration of a person fixing a washing machine',
  feature1Description: undefined,
  secondaryAction: undefined,
  feature2ImageAlt:
    'Illustration of maintenance checklist for a washing machine',
  feature3Description: undefined,
  feature1Title: undefined,
  feature2Description: undefined,
}

Features1.propTypes = {
  sectionTitle: PropTypes.element,
  mainAction: PropTypes.element,
  slogan: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2Description: PropTypes.element,
}

export default Features1
