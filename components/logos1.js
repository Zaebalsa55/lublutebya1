import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Logos1 = (props) => {
  return (
    <>
      <div className="logos1-container1 thq-section-padding">
        <div className="logos1-max-width thq-section-max-width">
          <h2 className="logos1-text1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="logos1-text2">
                  Trusted by the world&apos;s best companies social proof to
                  build credibility
                </span>
              </Fragment>
            )}
          </h2>
          <div className="thq-grid-6">
            <img
              alt={props.logo1Alt}
              src={props.logo1Src}
              className="logos1-logo1 thq-img-ratio-16-9"
              loading="lazy"
            />
            <img
              alt={props.logo2Alt}
              src={props.logo2Src}
              className="logos1-logo2 thq-img-ratio-16-9"
              loading="lazy"
            />
            <img
              alt={props.logo3Alt}
              src={props.logo3Src}
              className="logos1-logo3 thq-img-ratio-16-9"
              loading="lazy"
            />
            <img
              alt={props.logo4Alt}
              src={props.logo4Src}
              className="logos1-logo4 thq-img-ratio-16-9"
              loading="lazy"
            />
            <img
              alt={props.logo5Alt}
              src={props.logo5Src}
              className="logos1-logo5 thq-img-ratio-16-9"
              loading="lazy"
            />
            <img
              alt={props.logo6Alt}
              src={props.logo6Src}
              className="logos1-logo6 thq-img-ratio-16-9"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .logos1-container1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .logos1-max-width {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .logos1-text1 {
            text-align: center;
            font-family: var(--font-nunito);
            font-weight: 400;
            font-size: 18px;
          }
          .logos1-logo1 {
            object-fit: contain;
          }
          .logos1-logo2 {
            object-fit: contain;
          }
          .logos1-logo3 {
            object-fit: contain;
          }
          .logos1-logo4 {
            object-fit: contain;
          }
          .logos1-logo5 {
            object-fit: contain;
          }
          .logos1-logo6 {
            object-fit: contain;
          }
          .logos1-text2 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .logos1-container1 {
              gap: var(--dl-layout-space-twounits);
            }
            .logos1-max-width {
              gap: var(--dl-layout-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Logos1.defaultProps = {
  logo2Alt: 'Professional Washer Repair Services',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/07f56a12-c428-4896-8819-194d1fef39f2?org_if_sml=1&q=80&force_format=original',
  heading1: undefined,
  logo3Alt: 'Fixing Washing Machine Issues',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/838a2368-6357-4526-a3f3-57fee519d8ec?org_if_sml=1&q=80&force_format=original',
  logo1Alt: 'Washing Machine Repair Experts',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/2cf31efa-183b-4247-920e-60025ea69bfe?org_if_sml=1&q=80&force_format=original',
  logo4Alt: 'DIY Washer Troubleshooting Tips',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/49215785-2559-40a7-be66-9dd3bdf5eb7a?org_if_sml=1&q=80&force_format=original',
  logo6Alt: 'Quick Solutions for Washer Problems',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/c78f8e14-cf7b-4e8b-821c-3d6b89ed8db4?org_if_sml=1&q=80&force_format=original',
  logo5Alt: 'Preventive Maintenance for Washers',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/97476fa7-08ff-463d-99d2-c4ceb6ae9222?org_if_sml=1&q=80&force_format=original',
}

Logos1.propTypes = {
  logo2Alt: PropTypes.string,
  logo6Src: PropTypes.string,
  heading1: PropTypes.element,
  logo3Alt: PropTypes.string,
  logo1Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo2Src: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo3Src: PropTypes.string,
  logo6Alt: PropTypes.string,
  logo4Src: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo5Src: PropTypes.string,
}

export default Logos1
