import React from 'react';
import Map from './Map';
import './css/contact.css';

export default function Contact() {
  return (
      <div id="contact" className="contact-container" style={containerStyle}>
          <div className="map-container" style={mapContainerStyle}>
              <Map />
          </div>
          <div className="form-container" style={formContainerStyle}>
              <h2 style={headerStyle}>Contact Us</h2>
              <form style={formStyle}>
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email Address" style={inputStyle} />
          <input type="tel" placeholder="Your Phone Number" style={inputStyle} />
          <textarea placeholder="Message" rows="4" style={inputStyle}></textarea>
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>
    </div>
  );
}

// Inline Styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  gap: '30px'
};

const mapContainerStyle = {
  flex: 1,
};

const formContainerStyle = {
  flex: 1,
  padding: '20px',
  background: '#f2f2f2',
  borderRadius: '15px',
  boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
};

const headerStyle = {
  textAlign: 'center',
  textDecoration: 'underline',
  fontWeight: 'bold',
  color: '#fcb700',
  marginBottom: '10px'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
};
const inputStyle = {
  padding: '10px 15px',
  borderRadius: '5px',
  border: 'solid 1px #d9d9d9',
  background: 'white',
  boxShadow: 'inset 0px 0px 5px rgba(0,0,0,0.1)',
};

const buttonStyle = {
  padding: '10px 15px',
  borderRadius: '5px',
  border: 'none',
  background: '#FCB700',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
  transition: 'background-color 0.3s',
};

document.styleSheets[0].insertRule(`
  @media (max-width: 768px) {
    ${containerStyle} {
      flexDirection: 'column';
      alignItems: 'stretch';
    }
    ${mapContainerStyle}, ${formContainerStyle} {
      maxWidth: '100%';
      flex: none;
    }
  }
`, 0);
