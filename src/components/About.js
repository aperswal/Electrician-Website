import React from 'react';
import companyImage from '../img/about_us.jpg';

export default function About() {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={imageContainerStyle}>
          <img src={companyImage} alt="Company" style={imgStyle} />
        </div>

        <div style={textContainerStyle}>
          <h2 style={headerStyle}>About Our Company</h2>
          <p style={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  backgroundColor: '#f2f2f2', // Light gray background
  padding: '60px 0', // Increased padding for better spacing
  display: 'flex',
  justifyContent: 'center',
};

const contentStyle = {
  display: 'flex',
  alignItems: 'center',
  maxWidth: '1200px',
  width: '100%',
  padding: '0 20px',
};

const imageContainerStyle = {
  flex: 1,
  marginRight: '100px', // Added margin for better spacing
};

const imgStyle = {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '10px',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)', // Added shadow for depth
};

const textContainerStyle = {
  flex: 1,
};

const headerStyle = {
  fontSize: '2rem', // Larger font size for the header
  marginBottom: '20px', // Increased margin for better separation
  color: '#333', // Darker text color
};

const paragraphStyle = {
  fontSize: '1.2rem', // Slightly larger font size for the paragraph
  lineHeight: '1.5', // Improved line height for readability
  color: '#666', // Dark gray text color
};
