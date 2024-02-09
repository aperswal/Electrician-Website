import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import companyImage from '../img/about_us.jpg';

export default function YourComponentName() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Responsive button styles with media query for smaller screens
  const buttonStyle = {
    display: 'block',
    margin: '40px auto 0',
    padding: '15px 30px',
    backgroundColor: isHovered ? '#fcb700' : '#f2f2f2',
    color: '#333',
    border: '2px solid #666',
    borderRadius: '20px',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    '@media (max-width: 768px)': {
      fontSize: '0.8rem',
      padding: '12px 24px',
      margin: '20px auto 0',
    },
  };

  const goToAboutUsPage = () => navigate('/about-us');

  return (
    <div id="about" style={containerStyle}>
      <div style={responsiveContentStyle}>
        <div style={imageContainerStyle}>
          <img src={companyImage} alt="Company" style={responsiveImgStyle} />
        </div>

        <div style={textContainerStyle}>
          <h2 style={headerStyle}>About Our Company</h2>
          <p style={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <button
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={goToAboutUsPage}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Adapted styles for responsiveness
const containerStyle = {
  backgroundColor: '#f2f2f2',
  padding: '60px 0',
  display: 'flex',
  justifyContent: 'center',
};

const responsiveContentStyle = {
  display: 'flex',
  flexDirection: 'row', // Default to row layout
  alignItems: 'center',
  maxWidth: '1200px',
  width: '100%',
  padding: '0 20px',
  '@media (max-width: 768px)': {
    flexDirection: 'column', // Switch to column layout for smaller screens
    alignItems: 'center',
  },
};

const imageContainerStyle = {
  flex: 1,
  marginRight: '100px',
  '@media (max-width: 768px)': {
    marginRight: '0',
    marginBottom: '30px', // Add bottom margin when in column layout
  },
};

const responsiveImgStyle = {
  maxWidth: '100%',
  height: 'auto', // Ensure the image height scales with its width
  borderRadius: '10px',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
};

const textContainerStyle = {
  flex: 1,
};

const headerStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
  color: '#333',
  '@media (max-width: 768px)': {
    fontSize: '1.5rem', // Smaller font size for smaller screens
  },
};

const paragraphStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.5',
  color: '#666',
  '@media (max-width: 768px)': {
    fontSize: '1rem', // Smaller font size for smaller screens
  },
};
