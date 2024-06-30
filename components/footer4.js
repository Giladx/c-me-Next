import React from 'react'

import PropTypes from 'prop-types'

const Footer4 = (props) => {
  return (
    <>
      <footer className="footer4-footer7 thq-section-padding">
        <div className="footer4-max-width thq-section-max-width">
          <div className="footer4-content">
            <div className="footer4-logo">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="footer4-logo1"
              />
            </div>
            <div className="footer4-links">
              <span className="footer4-text thq-body-small">{props.link1}</span>
              <span className="footer4-text1 thq-body-small">
                {props.link2}
              </span>
              <span className="footer4-text2 thq-body-small">
                {props.link3}
              </span>
              <span className="footer4-text3 thq-body-small">
                {props.link4}
              </span>
              <span className="footer4-text4 thq-body-small">
                {props.link5}
              </span>
            </div>
          </div>
          <div className="footer4-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer4-row">
              <div className="footer4-container">
                <span className="footer4-text5 thq-body-small">
                  © 2024 TeleportHQ
                </span>
              </div>
              <div className="footer4-footer-links">
                <span className="footer4-text6 thq-body-small">
                  {props.privacyLink}
                </span>
                <span className="footer4-text7 thq-body-small">
                  {props.termsLink}
                </span>
                <span className="footer4-text8 thq-body-small">
                  {props.cookiesLink}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer4-footer7 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer4-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-content {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-logo {
            gap: 24px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer4-logo1 {
            height: 2rem;
          }
          .footer4-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer4-text {
            font-family: 'Open Sans';
          }
          .footer4-text1 {
            font-family: 'Open Sans';
          }
          .footer4-text2 {
            font-family: 'Open Sans';
          }
          .footer4-text3 {
            font-family: 'Open Sans';
          }
          .footer4-text4 {
            font-family: 'Open Sans';
          }
          .footer4-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer4-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer4-container {
            display: flex;
            align-items: flex-start;
          }
          .footer4-text5 {
            font-family: 'Open Sans';
          }
          .footer4-footer-links {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer4-text6 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-family: 'Open Sans';
          }
          .footer4-text7 {
            font-family: 'Open Sans';
          }
          .footer4-text8 {
            font-family: 'Open Sans';
          }
          @media (max-width: 767px) {
            .footer4-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer4-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer4-links {
              flex-direction: column;
            }
            .footer4-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer4.defaultProps = {
  termsLink: 'Terms and Conditions',
  link1: 'Contact Us',
  link3: 'FAQs',
  link4: 'Safety Tips',
  privacyLink: 'Privacy Policy',
  link2: 'About Us',
  link5: 'Sitemap',
  logoSrc: '/external/pastedimage-s1c-1500h.webp',
  logoAlt: 'Sailing at Night Logo',
  cookiesLink: 'Cookies Policy',
}

Footer4.propTypes = {
  termsLink: PropTypes.string,
  link1: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  privacyLink: PropTypes.string,
  link2: PropTypes.string,
  link5: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  cookiesLink: PropTypes.string,
}

export default Footer4
