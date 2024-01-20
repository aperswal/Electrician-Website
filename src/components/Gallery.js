import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function ReasonsToChooseUs() {
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Why Choose Us</h2>
      <div style={reasonsContainerStyle}>
        <div style={reasonStyle}>
          <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
          <h3 style={reasonTitleStyle}>Quality Workmanship</h3>
          <p style={reasonDescriptionStyle}>
            We take pride in delivering top-quality electrical services with a focus on safety.
          </p>
        </div>
        <div style={verticalLine} />
        <div style={reasonStyle}>
          <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
          <h3 style={reasonTitleStyle}>Experienced Team</h3>
          <p style={reasonDescriptionStyle}>
            Our skilled electricians have over 20 years of experience in the industry.
          </p>
        </div>
        <div style={verticalLine} />
        <div style={reasonStyle}>
          <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
          <h3 style={reasonTitleStyle}>Customer Satisfaction</h3>
          <p style={reasonDescriptionStyle}>
            We are dedicated to ensuring our customers' complete satisfaction on every project.
          </p>
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
