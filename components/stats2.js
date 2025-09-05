import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Stats2 = (props) => {
  return (
    <>
      <div className="stats2-container1 thq-section-padding">
        <div className="stats2-max-width thq-section-max-width">
          <div className="stats2-container2 thq-flex-column">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              loading="lazy"
              className="thq-img-ratio-1-1 stats2-image"
            />
          </div>
          <div className="stats2-container3 thq-flex-column">
            <span className="thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="stats2-text22">Clogged Drain Filter</span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="stats2-text31">
                    Statistics on Washing Machine Repairs
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="stats2-text24">
                    Faulty Water Level Sensor
                  </span>
                </Fragment>
              )}
            </p>
            <div className="stats2-container4 thq-grid-2">
              <div className="stats2-container5">
                <h2 className="thq-heading-2">
                  {props.stat1 ?? (
                    <Fragment>
                      <span className="stats2-text30">Common Issues</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat1Description ?? (
                    <Fragment>
                      <span className="stats2-text25">
                        Frequent issues encountered in washing machines.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="stats2-container6">
                <h2 className="thq-heading-2">
                  {props.stat2 ?? (
                    <Fragment>
                      <span className="stats2-text26">Main Problems</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat2Description ?? (
                    <Fragment>
                      <span className="stats2-text23">
                        Learn about the most common problems in washing
                        machines.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="stats2-container7 thq-grid-2">
              <div className="stats2-container8">
                <h2 className="thq-heading-2">
                  {props.stat3 ?? (
                    <Fragment>
                      <span className="stats2-text28">
                        When to Call a Professional
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat3Description ?? (
                    <Fragment>
                      <span className="stats2-text29">
                        Guidance on when it&apos;s best to seek professional
                        help.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="stats2-container9">
                <h2 className="thq-heading-2">
                  {props.stat4 ?? (
                    <Fragment>
                      <span className="stats2-text27">
                        Preventive Maintenance Tips
                      </span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat4Description ?? (
                    <Fragment>
                      <span className="stats2-text21">
                        Tips to keep your washing machine in good condition.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .stats2-container1 {
            width: 100%;
            flex-direction: column;
          }
          .stats2-max-width {
            gap: var(--dl-layout-space-fourunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .stats2-container2 {
            max-width: 50%;
          }
          .stats2-container3 {
            align-self: center;
            align-items: flex-start;
            margin-left: auto;
          }
          .stats2-container4 {
            width: 100%;
          }
          .stats2-container5 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats2-container6 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats2-container7 {
            width: 100%;
          }
          .stats2-container8 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats2-container9 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats2-text21 {
            display: inline-block;
          }
          .stats2-text22 {
            display: inline-block;
          }
          .stats2-text23 {
            display: inline-block;
          }
          .stats2-text24 {
            display: inline-block;
          }
          .stats2-text25 {
            display: inline-block;
          }
          .stats2-text26 {
            display: inline-block;
          }
          .stats2-text27 {
            display: inline-block;
          }
          .stats2-text28 {
            display: inline-block;
          }
          .stats2-text29 {
            display: inline-block;
          }
          .stats2-text30 {
            display: inline-block;
          }
          .stats2-text31 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .stats2-max-width {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
            .stats2-container2 {
              width: 100%;
              max-width: 100%;
            }
            .stats2-container3 {
              align-self: flex-start;
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .stats2-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Stats2.defaultProps = {
  stat4Description: undefined,
  content1: undefined,
  stat2Description: undefined,
  content2: undefined,
  image1Alt: 'Image of Clogged Drain Filter',
  stat1Description: undefined,
  stat2: undefined,
  stat4: undefined,
  stat3: undefined,
  stat3Description: undefined,
  stat1: undefined,
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1540492563778-9e487b472da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDU3Mjk2Nnw&ixlib=rb-4.1.0&q=80&w=1080',
}

Stats2.propTypes = {
  stat4Description: PropTypes.element,
  content1: PropTypes.element,
  stat2Description: PropTypes.element,
  content2: PropTypes.element,
  image1Alt: PropTypes.string,
  stat1Description: PropTypes.element,
  stat2: PropTypes.element,
  stat4: PropTypes.element,
  stat3: PropTypes.element,
  stat3Description: PropTypes.element,
  stat1: PropTypes.element,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
}

export default Stats2
