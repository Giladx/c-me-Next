import React from 'react'

import PropTypes from 'prop-types'

const Testimonial17 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial17-max-width thq-section-max-width">
          <div className="testimonial17-container">
            <h2 className="testimonial17-text thq-heading-2">
              {props.heading1}
            </h2>
            <span className="testimonial17-text01 thq-body-small">
              {props.content1}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card"
                >
                  <div className="testimonial17-container02">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial17-image"
                    />
                    <div className="testimonial17-container03">
                      <strong className="testimonial17-text02 thq-body-large">
                        {props.author1Name}
                      </strong>
                      <span className="testimonial17-text03 thq-body-small">
                        {props.author1Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text04 thq-body-small">
                    {props.review1}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card1"
                >
                  <div className="testimonial17-container04">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial17-image1"
                    />
                    <div className="testimonial17-container05">
                      <strong className="testimonial17-text05 thq-body-large">
                        {props.author2Name}
                      </strong>
                      <span className="testimonial17-text06 thq-body-small">
                        {props.author2Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text07 thq-body-small">
                    {props.review2}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card2"
                >
                  <div className="testimonial17-container06">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial17-image2"
                    />
                    <div className="testimonial17-container07">
                      <strong className="testimonial17-text08 thq-body-large">
                        {props.author3Name}
                      </strong>
                      <span className="testimonial17-text09 thq-body-small">
                        {props.author3Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text10 thq-body-small">
                    {props.review3}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card3"
                >
                  <div className="testimonial17-container08">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial17-image3"
                    />
                    <div className="testimonial17-container09">
                      <strong className="testimonial17-text11 thq-body-large">
                        {props.author4Name}
                      </strong>
                      <span className="testimonial17-text12 thq-body-small">
                        {props.author4Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial17-text13 thq-body-small">
                    {props.review4}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial17-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial17-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .testimonial17-text {
            font-family: 'Open Sans';
          }
          .testimonial17-text01 {
            text-align: center;
            font-family: 'Open Sans';
          }
          .testimonial17-container02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container03 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text02 {
            font-family: 'Open Sans';
          }
          .testimonial17-text03 {
            font-family: 'Open Sans';
          }
          .testimonial17-text04 {
            text-align: left;
            font-family: 'Open Sans';
          }
          .testimonial17-container04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container05 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text05 {
            font-family: 'Open Sans';
          }
          .testimonial17-text06 {
            font-family: 'Open Sans';
          }
          .testimonial17-text07 {
            text-align: left;
            font-family: 'Open Sans';
          }
          .testimonial17-container06 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container07 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text08 {
            font-family: 'Open Sans';
          }
          .testimonial17-text09 {
            font-family: 'Open Sans';
          }
          .testimonial17-text10 {
            text-align: left;
            font-family: 'Open Sans';
          }
          .testimonial17-container08 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image3 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container09 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text11 {
            font-family: 'Open Sans';
          }
          .testimonial17-text12 {
            font-family: 'Open Sans';
          }
          .testimonial17-text13 {
            text-align: left;
            font-family: 'Open Sans';
          }
          @media (max-width: 991px) {
            .testimonial17-container {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial17-container {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial17-card {
              width: 100%;
            }
            .testimonial17-card1 {
              width: 100%;
            }
            .testimonial17-card2 {
              width: 100%;
            }
            .testimonial17-card3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial17.defaultProps = {
  author1Src:
    'https://images.unsplash.com/photo-1549820610-ec7475b33969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTY3NTA3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: 'Sarah Lee',
  author1Alt: 'Image of John Smith',
  author3Alt: 'Image of Michael Brown',
  content1:
    'Sailing at night used to be a nerve-wracking experience for me, but after implementing the regulations for preventing collisions at sea, I feel much more confident and safe on the water.',
  author2Position: 'Sailor',
  review2:
    'As a sailor, I understand the importance of safety at sea. These regulations have been instrumental in ensuring that I can enjoy the beauty of night sailing without compromising on safety.',
  author1Position: 'Captain',
  author3Src:
    'https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTY3NTA3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Emily Johnson',
  author3Position: 'Yacht Owner',
  review1:
    'The regulations provided valuable guidance that has significantly improved my night sailing experience. I highly recommend following them for a safer journey.',
  review4:
    "Implementing the regulations for sailing at night has made me feel more prepared and responsible on the water. It's a small effort that makes a big difference in ensuring everyone's safety.",
  author3Name: 'Michael Brown',
  heading1: 'Testimonials',
  author1Name: 'John Smith',
  review3:
    "I have been sailing for years, and these regulations have added an extra layer of security to my nighttime voyages. It's reassuring to know that there are guidelines in place to prevent collisions.",
  author4Alt: 'Image of Sarah Lee',
  author2Name: 'Emily Johnson',
  author2Src:
    'https://images.unsplash.com/photo-1513171920216-2640b288471b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTY3NTA3N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: 'First Mate',
  author4Src:
    'https://images.unsplash.com/photo-1464863979621-258859e62245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTY3NTA3N3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial17.propTypes = {
  author1Src: PropTypes.string,
  author4Name: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  content1: PropTypes.string,
  author2Position: PropTypes.string,
  review2: PropTypes.string,
  author1Position: PropTypes.string,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author3Position: PropTypes.string,
  review1: PropTypes.string,
  review4: PropTypes.string,
  author3Name: PropTypes.string,
  heading1: PropTypes.string,
  author1Name: PropTypes.string,
  review3: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Name: PropTypes.string,
  author2Src: PropTypes.string,
  author4Position: PropTypes.string,
  author4Src: PropTypes.string,
}

export default Testimonial17
