import React, { useState } from 'react';
import electricianImage from '../img/electrician.jpg';

export default function Landing() {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);

    // Function to scroll to the contact section
  const scrollToContact = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

  // Hover event handlers
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div style={landingStyle}>
      <div style={contentStyle}>
        <h1 style={{ color: 'black' }}>US Electrician & Electrical Contractors</h1>
        <p style={{ color: 'black' }}>
          A full-service electrical services company, specializing in residential and commercial projects. We believe that your home is your refuge—it’s where you want to feel safe, relaxed, and comfortable. That’s why we take pride in our workmanship. When you hire us, you’re hiring the best of the best to make sure that your home is safe and sound.
        </p>
        <p style={{ color: 'black' }}>
          We specialize in everything from installing new outlets to repairing electrical problems in existing wiring. We’ve got over 20 years of experience, so when you need a job done right, look no further than our company.
        </p>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: isHovered ? '#fcb700' : 'white', // Change color on hover
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={scrollToContact} // Add the onClick event handler
        >
          Get a Free Quote Today
        </button>
      </div>
    </div>
  );
}

// Styles
const landingStyle = {
  backgroundImage: `url(${electricianImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  padding: '20px 10% 20px 20px', // Top Right Bottom Left
};

const contentStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  padding: '20px',
  textAlign: 'center',
  maxWidth: '400px',
  width: '100%', // Ensure it's responsive
  borderRadius: '10px',
};

const buttonStyle = {
  color: 'black',
  border: 'none',
  padding: '15px 30px',
  fontSize: '1.2em',
  cursor: 'pointer',
  boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
  marginTop: '20px',
  transition: 'background-color 0.3s ease', // Smooth transition for background color
};

// Media query for smaller screens
if (document.styleSheets.length > 0) {
  document.styleSheets[0].insertRule(`
    @media (max-width: 768px) {
      ${landingStyle} {
        alignItems: 'center';
        padding: '20px';
      }
      ${contentStyle} {
        maxWidth: '90%';
      }
    }
  `, 0);
}
