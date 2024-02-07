import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import companyImage from '../img/about_us.jpg';

export default function YourComponentName() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Hook to navigate

  // Button styles
  const buttonStyle = {
    display: 'block', // Make the button a block element to center it
    margin: '40px auto 0', // Increase vertical margin for spacing and auto for horizontal centering
    padding: '15px 30px', // Larger padding for a bigger button
    backgroundColor: isHovered ? '#fcb700' : '#f2f2f2', // Light gray normally, changes on hover
    color: '#333', // Dark gray text color
    border: '2px solid #666', // Dark gray border
    borderRadius: '20px',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '1rem', // Larger font size
    fontWeight: 'bold', // Bold font weight
    transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s', // Smooth transition for color, background color, and box-shadow change
    textAlign: 'center', // Ensure text is centered within the button
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect for "popped off" look
  };

  const goToAboutUsPage = () => navigate('/about-us');

  return (
    <div id="about" style={containerStyle}>
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
            <p style={paragraphStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={paragraphStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* Button with hover effect, increased spacing, and "popped off" appearance */}
            <div style={{ marginTop: '50px', textAlign: 'center' }}>
              <button
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={goToAboutUsPage} // Navigate when button is clicked
              >
                Learn More
              </button>
            </div>
          </div>
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
  height: '100%',
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