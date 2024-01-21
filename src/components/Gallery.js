import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faUserCog, faSmile } from '@fortawesome/free-solid-svg-icons';

export default function ReasonsToChooseUs() {
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Why Choose Us</h2>
      <div style={reasonsContainerStyle}>
        <div style={reasonStyle}>
          <div style={iconAndTextContainer}>
            <FontAwesomeIcon icon={faTools} style={iconStyle} />
            <div>
              <h3 style={reasonTitleStyle}>Quality Workmanship</h3>
              <p style={reasonDescriptionStyle}>
                We take pride in delivering top-quality electrical services with a focus on safety. Our meticulous attention to detail ensures that every installation, repair, or maintenance task is executed flawlessly.
              </p>
            </div>
          </div>
        </div>
        <div style={verticalLine} />
        <div style={reasonStyle}>
          <div style={iconAndTextContainer}>
            <FontAwesomeIcon icon={faUserCog} style={iconStyle} />
            <div>
              <h3 style={reasonTitleStyle}>Experienced Team</h3>
              <p style={reasonDescriptionStyle}>
                Our skilled electricians have over 20 years of experience in the industry. Our team brings a wealth of knowledge, staying up-to-date with the latest electrical standards and technologies.
              </p>
            </div>
          </div>
        </div>
        <div style={verticalLine} />
        <div style={reasonStyle}>
          <div style={iconAndTextContainer}>
            <FontAwesomeIcon icon={faSmile} style={iconStyle} />
            <div>
              <h3 style={reasonTitleStyle}>Customer Satisfaction</h3>
              <p style={reasonDescriptionStyle}>
                We are dedicated to ensuring our customers' complete satisfaction on every project. We prioritize clear communication and tailored solutions to meet your specific electrical needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// Styles
const containerStyle = {
  backgroundColor: '#333333', // Dark gray background
  padding: '50px 0',
  textAlign: 'center',
};

const iconAndTextContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center content horizontally
  justifyContent: 'center', // Center content vertically
  textAlign: 'center', // Ensure text is centered
  height: '100%' // Take full height of parent
};

const headerStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
  color: 'white', // White text color
};

const reasonsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const reasonStyle = {
  flex: '1',
  padding: '20px',
};

const verticalLine = {
  borderLeft: '2px solid #fcb700',
  height: '100px',
  margin: '0 20px',
};

const iconStyle = {
  fontSize: '2rem',
  color: '#fcb700',
  marginBottom: '10px',
};

const reasonTitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '10px',
  color: 'white', // White text color
};

const reasonDescriptionStyle = {
  fontSize: '1rem',
  color: 'white', // White text color
};