import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faUserCog, faSmile } from '@fortawesome/free-solid-svg-icons';

export default function ReasonsToChooseUs() {
  return (
    <div>
      <style>{mediaQueryStyles}</style>
      <div id="gallery" className="containerStyle">
        <h2 className="headerStyle">Why Choose Us</h2>
        <div className="reasonsContainerStyle">
          <div className="reasonStyle">
            <div className="iconAndTextContainer">
              <FontAwesomeIcon icon={faTools} className="iconStyle" />
              <div>
                <h3 className="reasonTitleStyle">Quality Workmanship</h3>
                <p className="reasonDescriptionStyle">
                  We take pride in delivering top-quality electrical services with a focus on safety. Our meticulous attention to detail ensures that every installation, repair, or maintenance task is executed flawlessly.
                </p>
              </div>
            </div>
          </div>
          <div className="verticalLine"></div>
          <div className="reasonStyle">
            <div className="iconAndTextContainer">
              <FontAwesomeIcon icon={faUserCog} className="iconStyle" />
              <div>
                <h3 className="reasonTitleStyle">Experienced Team</h3>
                <p className="reasonDescriptionStyle">
                  Our skilled electricians have over 20 years of experience in the industry. Our team brings a wealth of knowledge, staying up-to-date with the latest electrical standards and technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="verticalLine"></div>
          <div className="reasonStyle">
            <div className="iconAndTextContainer">
              <FontAwesomeIcon icon={faSmile} className="iconStyle" />
              <div>
                <h3 className="reasonTitleStyle">Customer Satisfaction</h3>
                <p className="reasonDescriptionStyle">
                  We are dedicated to ensuring our customers' complete satisfaction on every project. We prioritize clear communication and tailored solutions to meet your specific electrical needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mediaQueryStyles = `
  @media (max-width: 768px) {
    .reasonsContainerStyle {
      flex-direction: column;
      align-items: center;
    }

    .reasonStyle {
      margin-bottom: 1rem;
    }

    .verticalLine {
      display: none; // This will hide the vertical lines on smaller screens
    }

    .headerStyle {
      font-size: 1.5rem;
    }
  }

  .containerStyle {
    background-color: #333333;
    padding: 3.125rem 0;
    text-align: center;
  }

  .iconAndTextContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }

  .headerStyle {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    color: white;
  }

  .reasonsContainerStyle {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  .reasonStyle {
    flex: 1;
    padding: 1.25rem;
    min-width: 250px;
  }

  .verticalLine {
    border-left: 2px solid #fcb700;
    height: 100px;
    margin: 0 1.25rem;
  }

  .iconStyle {
    font-size: 2rem;
    color: #fcb700;
    margin-bottom: 0.625rem;
  }

  .reasonTitleStyle {
    font-size: 1.5rem;
    margin-bottom: 0.625rem;
    color: white;
  }

  .reasonDescriptionStyle {
    font-size: 1rem;
    color: white;
  }
`;
