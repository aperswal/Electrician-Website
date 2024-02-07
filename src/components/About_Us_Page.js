import React from 'react';
import Contact from './Contact'; // Assuming you have a Contact component
import Footer from './Footer'; // Assuming you have a Footer component
import Services from './Services';

export default function AboutUsPage() {
  return (
    <div>
      <h1 style={headerStyle}>About Highlights Chicago</h1>
      <div style={textContainerStyle}>
        {/* Paragraphs with the content */}
        <p style={paragraphStyle}>
          Highlights Chicago is a full-service, family owned, electrical company that has been serving
          the Chicago land area for over 11 years. From the very beginning, we have focused on providing
          high-quality work and superior customer service. Our guiding philosophy is very simple; we
          provide the level of service that we ourselves would like to receive. This single pursuit of
          exceeding clients' expectations has fuelled our expansion. While we’re proud of our growth, we
          never forget that delivering on our promises and satisfying our clients on each and every
          project is the most important thing we do.
        </p>
        <p style={paragraphStyle}>
          Throughout the years, the spectrum of services that Highlights Chicago provides has expanded
          from serving residential clients to include industrial, commercial, and institutional clients.
          Our electricians’ service, repair, and install all things electrical. Highlights Chicago is
          committed to attracting and retaining top talent. Our technicians are highly experienced and
          undergo ongoing training to keep current on ever-changing technologies affecting our industry.
        </p>
        <p style={paragraphStyle}>
          At Highlights Chicago, we pride ourselves on delivering projects on time and within budget.
          We look forward to an opportunity to provide our expertise and superior quality electrical
          services to serve your residential and business needs. We are fully licensed, bonded, and
          insured electrical contractor.
        </p>
      </div>
      <div style={{ height: '100px' }}></div>
      <Services />
      <div style={{ height: '100px' }}></div>
      <Contact id="contact" />
      <div style={{ height: '100px' }}></div>
      <Footer id="footer" />
    </div>
  );
}

// Styles
const headerContainerStyle = {
  backgroundColor: '#f2f2f2', // Light gray background for the header to stand out
  padding: '20px 0', // Padding around the header for spacing
  textAlign: 'center', // Center the header text
};

const headerStyle = {
    color: '#333', // Dark gray color for the header text
    textAlign: 'center', // Center the header text
    fontSize: '2.5rem', // Larger font size for the header
    marginTop: '40px', // Increased top margin for spacing from the Navbar
    marginBottom: '40px', // Increased bottom margin for spacing from the content
    fontWeight: 'bold', // Bold the header text
  };
  
  const textContainerStyle = {
    padding: '0 10%', // Adjusted padding for alignment with the header
    textAlign: 'justify', // Justify text for a clean, aligned look
    lineHeight: '1.6', // Increase line height for readability
  };
  
  const paragraphStyle = {
    color: '#666', // Dark gray color for paragraph text
    marginBottom: '20px', // Margin at the bottom of each paragraph for spacing
    fontSize: '1.1rem', // Slightly larger font size for readability
  };
