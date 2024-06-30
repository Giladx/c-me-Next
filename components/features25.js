import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features25-container1 thq-section-max-width">
          <div className="features25-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features25-tab-horizontal"
            >
              <div className="features25-divider-container">
                {activeTab === 0 && (
                  <div className="features25-container2"></div>
                )}
              </div>
              <div className="features25-content">
                <h2 className="features25-feature1-title thq-heading-2">
                  {props.feature1Title}
                </h2>
                <span className="features25-feature1-description thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features25-tab-horizontal1"
            >
              <div className="features25-divider-container1">
                {activeTab === 1 && (
                  <div className="features25-container3"></div>
                )}
              </div>
              <div className="features25-content1">
                <h2 className="features25-feature2-title thq-heading-2">
                  {props.feature2Title}
                </h2>
                <span className="features25-feature2-description thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features25-tab-horizontal2"
            >
              <div className="features25-divider-container2">
                {activeTab === 2 && (
                  <div className="features25-container4"></div>
                )}
              </div>
              <div className="features25-content2">
                <h2 className="features25-feature3-title thq-heading-2">
                  {props.feature3Title}
                </h2>
                <span className="features25-feature3-description thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
          <div className="features25-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features25-image thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features25-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features25-image2 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features25-container1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features25-tabs-menu {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features25-tab-horizontal {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features25-divider-container {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features25-container2 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features25-content {
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
          .features25-feature1-title {
            font-family: 'Open Sans';
          }
          .features25-feature1-description {
            font-family: 'Open Sans';
          }
          .features25-tab-horizontal1 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features25-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features25-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features25-content1 {
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
          .features25-feature2-title {
            font-family: 'Open Sans';
          }
          .features25-feature2-description {
            font-family: 'Open Sans';
          }
          .features25-tab-horizontal2 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features25-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features25-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features25-content2 {
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
          .features25-feature3-title {
            font-family: 'Open Sans';
          }
          .features25-feature3-description {
            font-family: 'Open Sans';
          }
          .features25-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features25-image {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features25-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features25-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          @media (max-width: 991px) {
            .features25-container1 {
              grid-gap: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .features25-tabs-menu {
              order: 2;
            }
          }
        `}
      </style>
    </>
  )
}

Features25.defaultProps = {
  feature3Title: 'Maintain Proper Lookout',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1536746803623-cef87080bfc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTY3NTA3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Assign a dedicated crew member to keep a continuous lookout for other vessels, obstacles, or navigational hazards.',
  feature1Title: 'Clear Navigation Lights',
  feature2Description:
    'Utilize radar and Automatic Identification System (AIS) to detect nearby vessels and their movements.',
  feature3ImgAlt: 'Proper Lookout Image',
  feature1ImgAlt: 'Navigation Lights Image',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1668777834795-6555704eec80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTY3NTA3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Ensure all navigation lights are in working order and clearly visible to other vessels.',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1687343220172-f3f53eafad71?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHwlMjBzYWlsaW5nJTIwaW4lMjB0aGUlMjBkYXJrfGVufDB8fHx8MTcxOTY5Nzc5OHww&ixlib=rb-4.0.3&w=1400',
  feature2ImgAlt: 'Radar and AIS Image',
  feature2Title: 'Use Radar and AIS Systems',
}

Features25.propTypes = {
  feature3Title: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
}

export default Features25
