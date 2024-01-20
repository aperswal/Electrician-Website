import React from 'react';
import residentialServiceImage from '../img/ele_Service4.png';
import commercialServiceImage from '../img/ele_Service1.jpg';
import industrialServiceImage from '../img/ele_Service2.jpg';
import generatorsServiceImage from '../img/ele_Service3.png';

export default function Services() {
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Our Services</h2>
      <div style={servicesGridStyle}>
        <ServiceItem image={residentialServiceImage} title="Residential Electrical Services" />
        <ServiceItem image={commercialServiceImage} title="Commercial Electrical Services" />
        <ServiceItem image={industrialServiceImage} title="Industrial Electrical Services" />
        <ServiceItem image={generatorsServiceImage} title="Residential & Commercial Generators" />
      </div>
    </div>
  );
}

// ServiceItem component for each service
const ServiceItem = ({ image, title }) => {
  const [hover, setHover] = React.useState(false);

  const cardStyle = {
    ...serviceItemStyle,
    boxShadow: hover ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : '0px 2px 4px rgba(0, 0, 0, 0.05)',
    transform: hover ? 'scale(1.05)' : 'scale(1)'
  };

  return (
    <div style={cardStyle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={image} alt={title} style={imageStyle} />
      <p style={titleStyle}>{title}</p>
    </div>
  );
};

// Styles
const containerStyle = {
  textAlign: 'center',
  padding: '40px 20px',
  backgroundColor: 'white'
};

const headerStyle = {
  fontSize: '2.5em',
  color: '#333',
  marginBottom: '30px'
};

const servicesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '20px',
  alignItems: 'start', // Align items to the start to ensure equal height
  justifyContent: 'center'
};

const serviceItemStyle = {
  textAlign: 'center',
  padding: '20px',
  borderRadius: '8px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%' // Ensure equal height for all cards
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  aspectRatio: '1 / 1',
  objectFit: 'cover',
  marginBottom: '15px',
  borderRadius: '5px'
};

const titleStyle = {
  fontWeight: 'bold' // Make the title text bold
};
