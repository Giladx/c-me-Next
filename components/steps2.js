import React from 'react'

import PropTypes from 'prop-types'

const Steps2 = (props) => {
  return (
    <>
      <div className="steps2-container thq-section-padding">
        <div className="steps2-max-width thq-section-max-width">
          <div className="steps2-container1 thq-grid-2">
            <div className="steps2-section-header">
              <h2 className="steps2-text thq-heading-2">
                Discover the Power of Our Products
              </h2>
              <p className="steps2-text01 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className="steps2-actions">
                <button className="thq-button-animated thq-button-filled steps2-button">
                  <span className="thq-body-small">Main action</span>
                </button>
              </div>
            </div>
            <div className="steps2-container2">
              <div className="steps2-container3 thq-card">
                <h2 className="steps2-text03 thq-heading-2">
                  {props.step1Title}
                </h2>
                <span className="steps2-text04 thq-body-small">
                  {props.step1Description}
                </span>
                <label className="steps2-text05 thq-heading-3">01</label>
              </div>
              <div className="steps2-container4 thq-card">
                <h2 className="steps2-text06 thq-heading-2">
                  {props.step2Title}
                </h2>
                <span className="steps2-text07 thq-body-small">
                  {props.step2Description}
                </span>
                <label className="steps2-text08 thq-heading-3">02</label>
              </div>
              <div className="steps2-container5 thq-card">
                <h2 className="steps2-text09 thq-heading-2">
                  {props.step3Title}
                </h2>
                <span className="steps2-text10 thq-body-small">
                  {props.step3Description}
                </span>
                <label className="steps2-text11 thq-heading-3">03</label>
              </div>
              <div className="steps2-container6 thq-card">
                <h2 className="steps2-text12 thq-heading-2">
                  {props.step4Title}
                </h2>
                <span className="steps2-text13 thq-body-small">
                  {props.step4Description}
                </span>
                <label className="steps2-text14 thq-heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps2-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps2-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps2-container1 {
            align-items: start;
          }
          .steps2-section-header {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps2-text {
            font-family: 'Open Sans';
          }
          .steps2-text01 {
            font-family: 'Open Sans';
          }
          .steps2-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps2-container2 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps2-container3 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text03 {
            font-family: 'Open Sans';
          }
          .steps2-text04 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .steps2-text05 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text06 {
            font-family: 'Open Sans';
          }
          .steps2-text07 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .steps2-text08 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps2-text09 {
            font-family: 'Open Sans';
          }
          .steps2-text10 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .steps2-text11 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps2-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps2-text12 {
            font-family: 'Open Sans';
          }
          .steps2-text13 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .steps2-text14 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .steps2-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps2-section-header {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .steps2-actions {
              width: 100%;
              align-self: flex-start;
            }
            .steps2-container3 {
              width: 100%;
            }
            .steps2-container4 {
              width: 100%;
            }
            .steps2-container5 {
              width: 100%;
            }
            .steps2-container6 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps2-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps2.defaultProps = {
  step3Title: 'Use Radar and AIS Systems',
  step4Title: 'Reduce Speed',
  step2Description:
    'Assign a dedicated crew member to keep a lookout for other vessels, obstacles, or navigational hazards.',
  step1Title: 'Check Navigation Lights',
  step1Description:
    'Ensure all navigation lights are functioning properly and are visible to other vessels.',
  step3Description:
    'Utilize radar and Automatic Identification System (AIS) to detect nearby vessels and determine their course and speed.',
  step2Title: 'Maintain a Proper Lookout',
  step4Description:
    'Consider reducing speed to allow more time to react to any potential dangers or changes in the environment.',
}

Steps2.propTypes = {
  step3Title: PropTypes.string,
  step4Title: PropTypes.string,
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
  step1Description: PropTypes.string,
  step3Description: PropTypes.string,
  step2Title: PropTypes.string,
  step4Description: PropTypes.string,
}

export default Steps2
