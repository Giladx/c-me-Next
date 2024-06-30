import React from 'react'

import PropTypes from 'prop-types'

const Contact10 = (props) => {
  return (
    <>
      <div className="contact10-container thq-section-padding">
        <div className="contact10-max-width thq-section-max-width">
          <div className="contact10-content thq-flex-row">
            <div className="contact10-content1">
              <h2 className="contact10-text thq-heading-2">{props.heading1}</h2>
              <p className="contact10-text1 thq-body-large">{props.content1}</p>
            </div>
          </div>
          <div className="contact10-content2 thq-flex-row">
            <div className="contact10-container1">
              <img
                alt={props.location1ImageAlt}
                src={props.location1ImageSrc}
                className="contact10-image thq-img-ratio-16-9"
              />
              <h3 className="contact10-text2 thq-heading-3">
                {props.location1}
              </h3>
              <p className="contact10-text3 thq-body-large">
                {props.location1Description}
              </p>
              <div className="contact10-container2">
                <span className="thq-body-small thq-button-flat">
                  Get directions
                </span>
              </div>
            </div>
            <div className="contact10-container3">
              <img
                alt={props.location2ImageAlt}
                src={props.location2ImageSrc}
                className="contact10-image1 thq-img-ratio-16-9"
              />
              <h3 className="contact10-text5 thq-heading-3">
                {props.location2}
              </h3>
              <p className="contact10-text6 thq-body-large">
                {props.location2Description}
              </p>
              <div className="contact10-container4">
                <span className="thq-body-small thq-button-flat">
                  Get directions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact10-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact10-max-width {
            align-self: center;
          }
          .contact10-content {
            width: 100%;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .contact10-content1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact10-text {
            font-style: normal;
            font-family: 'Open Sans';
            font-weight: 700;
          }
          .contact10-text1 {
            font-family: 'Open Sans';
          }
          .contact10-content2 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact10-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact10-image {
            object-fit: cover;
          }
          .contact10-text2 {
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 700;
          }
          .contact10-text3 {
            font-family: 'Open Sans';
          }
          .contact10-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact10-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact10-image1 {
            object-fit: cover;
          }
          .contact10-text5 {
            font-style: normal;
            text-align: center;
            font-family: 'Open Sans';
            font-weight: 700;
          }
          .contact10-text6 {
            font-family: 'Open Sans';
          }
          .contact10-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .contact10-content {
              align-items: flex-start;
              justify-content: flex-start;
            }
            .contact10-content2 {
              position: relative;
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact10-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .contact10-image {
              width: 100%;
            }
            .contact10-image1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Contact10.defaultProps = {
  location2: 'Phone: +1-800-123-4567',
  location1: 'Email: info@sailingsafety.com',
  location2ImageAlt: 'Phone Icon',
  location1Description:
    "Send us an email and we'll get back to you as soon as possible.",
  location2ImageSrc:
    'https://images.unsplash.com/photo-1531141445733-14c2eb7d4c1f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHwlMjBzYWlsaW5nfGVufDB8fHx8MTcxOTY5NzY0NHww&ixlib=rb-4.0.3&w=1400',
  heading1: 'Contact Us',
  content1:
    'Have questions or need more information? Feel free to reach out to us.',
  location1ImageAlt: 'Email Icon',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1463567517034-628c51048aa2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHwlMjBzYWlsaW5nfGVufDB8fHx8MTcxOTY5NzY0NHww&ixlib=rb-4.0.3&w=1400',
  location2Description:
    'Give us a call during our office hours for immediate assistance.',
}

Contact10.propTypes = {
  location2: PropTypes.string,
  location1: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location1Description: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location2Description: PropTypes.string,
}

export default Contact10
