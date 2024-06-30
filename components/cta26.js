import React from 'react'

import PropTypes from 'prop-types'

const CTA26 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="thq-section-max-width">
          <div className="cta26-accent2-bg">
            <div className="cta26-accent1-bg">
              <div className="cta26-container1">
                <div className="cta26-content">
                  <span className="cta26-text thq-heading-2">
                    {props.heading1}
                  </span>
                  <p className="cta26-text1 thq-body-large">{props.content1}</p>
                </div>
                <div className="cta26-actions">
                  <button
                    type="button"
                    className="thq-button-filled cta26-button"
                  >
                    {props.action1}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta26-accent2-bg {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            align-self: stretch;
            transition: 0.3s;
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent2);
          }
          .cta26-accent2-bg:hover {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          .cta26-accent1-bg {
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg);
            align-items: center;
            border-radius: var(--dl-radius-radius-cardradius);
            justify-content: space-between;
            transform-style: preserve-3d;
            background-color: var(--dl-color-theme-accent1);
          }
          .cta26-container1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
              rotateY(0deg) rotateZ(1deg) skew(0deg, 0deg);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-cardradius);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .cta26-container1:hover {
            color: var(--dl-color-theme-neutral-light);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .cta26-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta26-text {
            font-family: 'Open Sans';
          }
          .cta26-text1 {
            font-family: 'Open Sans';
          }
          .cta26-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          @media (max-width: 767px) {
            .cta26-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 479px) {
            .cta26-actions {
              flex-wrap: wrap;
              align-self: stretch;
              justify-content: center;
            }
            .cta26-button {
              flex: 1;
            }
          }
        `}
      </style>
    </>
  )
}

CTA26.defaultProps = {
  heading1: 'Stay Safe While Sailing at Night',
  content1:
    'Learn more about the regulations for preventing collisions at sea and ensure a safe sailing experience.',
  action1: 'Explore Regulations',
}

CTA26.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA26
