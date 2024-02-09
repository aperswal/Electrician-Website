import React from 'react';
import Contact from './Contact'; // Assuming you have a Contact component
import Footer from './Footer'; // Assuming you have a Footer component
import Gallery from './Gallery';
import residentialServiceImage from '../img/ele_Service4.png';
import commercialServiceImage from '../img/ele_Service1.jpg';
import industrialServiceImage from '../img/ele_Service2.jpg';
import generatorsServiceImage from '../img/ele_Service3.png';

// Mock service descriptions with larger text for demonstration
const serviceDescriptions = {
    residential: "Extended description for Residential Electrical Services. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    commercial: "Extended description for Commercial Electrical Services. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    industrial: "Extended description for Industrial Electrical Services. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    generators: "Extended description for Residential & Commercial Generators. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
  };
  
  export default function ServicesPage() {
    // Array of service objects with updated background colors
    const services = [
      { image: commercialServiceImage, title: "Commercial Electrical Services", description: serviceDescriptions.commercial, bgColor: 'lightgray', textColor: 'white' },
      { image: residentialServiceImage, title: "Residential Electrical Services", description: serviceDescriptions.residential, bgColor: 'white', textColor: 'black' },
      { image: industrialServiceImage, title: "Industrial Electrical Services", description: serviceDescriptions.industrial, bgColor: 'darkgray', textColor: 'white' }, // Changed to white
      { image: generatorsServiceImage, title: "Residential & Commercial Generators", description: serviceDescriptions.generators, bgColor: 'white', textColor: 'black' } // Changed to dark gray
    ];
  
    return (
      <div>
        {services.map((service, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            padding: '40px 10%',
            justifyContent: 'space-between',
            backgroundColor: service.bgColor,
            color: service.textColor,
            '@media (max-width: 768px)': {
              flexDirection: 'column', // Stack vertically on smaller screens
              padding: '20px', // Reduce padding on smaller screens
            },
          }}>
            <img src={service.image} alt={service.title} style={{
              width: '100%', // Full width on smaller screens
              maxWidth: '35%', // Max width on larger screens
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              '@media (max-width: 768px)': {
                margin: '0 auto 20px', // Center image and add margin below on smaller screens
              },
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
            <div style={{
              width: '100%', // Full width on smaller screens
              maxWidth: '55%', // Max width on larger screens
              textAlign: 'left',
              '@media (max-width: 768px)': {
                marginTop: '20px', // Add margin top for spacing on smaller screens
              },
            }}>
              <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '10px' }}>{service.title}</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>{service.description}</p>
            </div>
          </div>
        ))}
        <Gallery id="gallery" />
        <Contact id="contact" />
        <Footer id="footer" />
      </div>
    );
  }