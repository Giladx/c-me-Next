import React from 'react'

import PropTypes from 'prop-types'

const Hero2 = (props) => {
  return (
    <>
      <div className="hero2-header5 thq-section-padding">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="hero2-image"
        />
        <div className="hero2-container">
          <div className="hero2-max-width thq-section-max-width">
            <div className="hero2-column">
              <div className="hero2-content">
                <h1 className="hero2-text thq-heading-1">{props.heading1}</h1>
                <p className="hero2-text1 thq-body-large">{props.content1}</p>
                <div className="hero2-actions">
                  <div className="hero2-container1">
                    <button className="hero2-button thq-button-filled">
                      <span className="thq-body-small">{props.action1}</span>
                    </button>
                  </div>
                  <div className="hero2-container2">
                    <button className="hero2-button1 thq-button-outline">
                      <span className="thq-body-small">{props.action2}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero2-header5 {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .hero2-image {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .hero2-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .hero2-max-width {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: flex-start;
          }
          .hero2-column {
            gap: 24px;
            width: auto;
            display: flex;
            z-index: 1;
            max-width: 560px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero2-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: stretch;
            align-items: flex-start;
            border-color: var(--dl-color-theme-secondary1);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-inputradius);
            animation-name: fadeInLeftBig;
            flex-direction: column;
            animation-delay: 0s;
            background-image: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.5) 100%
            );
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .hero2-text {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .hero2-text1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .hero2-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero2-container1 {
            display: flex;
            align-items: flex-start;
          }
          .hero2-button {
            display: flex;
            box-sizing: content-box;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .hero2-container2 {
            display: flex;
            align-items: flex-start;
          }
          .hero2-button1 {
            background-color: rgba(245, 245, 245, 0.49);
          }
          @media (max-width: 767px) {
            .hero2-header5 {
              justify-content: center;
            }
            .hero2-max-width {
              justify-content: center;
            }
            .hero2-column {
              width: 100%;
            }
            .hero2-text {
              text-align: center;
            }
            .hero2-text1 {
              text-align: center;
            }
            .hero2-actions {
              width: 100%;
              align-self: flex-start;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .hero2-actions {
              flex-direction: column;
            }
            .hero2-container1 {
              width: 100%;
            }
            .hero2-button {
              width: 100%;
            }
            .hero2-container2 {
              width: 100%;
            }
            .hero2-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero2.defaultProps = {
  content1:
    'Discover the magic of sailing under the stars and moonlight with our expert guidance on safe night sailing practices.',
  heading1: 'Experience the Beauty of Night Sailing',
  action2: 'Book Now',
  image1Src:
    'https://images.unsplash.com/photo-1452065656801-6c60b6e7cbc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTczNzkyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Learn More',
  image1Alt: 'Night Sailing Image',
}

Hero2.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Hero2
