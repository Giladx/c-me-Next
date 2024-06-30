import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features24-container1 thq-section-max-width">
          <div className="features24-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features24-image thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features24-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features24-image2 thq-img-ratio-16-9"
              />
            )}
          </div>
          <div className="features24-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features24-tab-horizontal"
            >
              <div className="features24-divider-container">
                {activeTab === 0 && (
                  <div className="features24-container2"></div>
                )}
              </div>
              <div className="features24-content">
                <h2 className="features24-feature1-title thq-heading-2">
                  {props.feature1Title}
                </h2>
                <span className="features24-feature1-description thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features24-tab-horizontal1"
            >
              <div className="features24-divider-container1">
                {activeTab === 1 && (
                  <div className="features24-container3"></div>
                )}
              </div>
              <div className="features24-content1">
                <h2 className="features24-feature2-title thq-heading-2">
                  {props.feature2Title}
                </h2>
                <span className="features24-feature2-description thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features24-tab-horizontal2"
            >
              <div className="features24-divider-container2">
                {activeTab === 2 && (
                  <div className="features24-container4"></div>
                )}
              </div>
              <div className="features24-content2">
                <h2 className="features24-feature3-title thq-heading-2">
                  {props.feature3Title}
                </h2>
                <span className="features24-feature3-description thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features24-container1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features24-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features24-image {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features24-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features24-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features24-tabs-menu {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features24-tab-horizontal {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features24-divider-container {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features24-container2 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features24-content {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features24-feature1-title {
            font-family: 'Open Sans';
          }
          .features24-feature1-description {
            font-family: 'Open Sans';
          }
          .features24-tab-horizontal1 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features24-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features24-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features24-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features24-feature2-title {
            font-family: 'Open Sans';
          }
          .features24-feature2-description {
            font-family: 'Open Sans';
          }
          .features24-tab-horizontal2 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features24-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features24-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features24-content2 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features24-feature3-title {
            font-family: 'Open Sans';
          }
          .features24-feature3-description {
            font-family: 'Open Sans';
          }
          @media (max-width: 991px) {
            .features24-container1 {
              grid-gap: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Features24.defaultProps = {
  feature1ImgAlt: 'Navigation Lights Image',
  feature3Title: 'Maintain Proper Lookout',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1551354697-05e654fadd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTY3NTA3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Utilize radar and Automatic Identification System (AIS) to detect nearby vessels and their movements.',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1520670255513-79161a36e39c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fCUyMHNhaWxpbmclMjB3aXRoJTIwbGlnaHRzfGVufDB8fHx8MTcxOTY5Nzk5M3ww&ixlib=rb-4.0.3&w=1400',
  feature3Description:
    'Assign a dedicated crew member to keep a constant lookout for other vessels, obstacles, or changes in the environment.',
  feature2Title: 'Use Radar and AIS Systems',
  feature2ImgAlt: 'Radar and AIS Image',
  feature1Title: 'Clear Navigation Lights',
  feature3ImgAlt: 'Proper Lookout Image',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1550653048-f88dbcf465c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTY3NTA3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    "Ensure your vessel's navigation lights are in working order and clearly visible to other vessels.",
}

Features24.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1Description: PropTypes.string,
}

export default Features24
