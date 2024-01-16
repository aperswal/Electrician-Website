import React from 'react';
import electricianImage from '../img/electrician.jpg';

export default function Landing() {
  return (
    <div style={{
      backgroundImage: `url(${electricianImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', // Full viewport height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end', // Align text to the right
      paddingRight: '10%', // Add padding to the right side
      paddingLeft: '20px', // Maintain existing left padding
      paddingTop: '20px', // Maintain existing top padding
      paddingBottom: '20px', // Maintain existing bottom padding
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Light white opaque background
        padding: '20px',
        textAlign: 'center', // Center align the text
        maxWidth: '400px',
        borderRadius: '10px', // Optional: adds rounded corners
      }}>
        <h1 style={{ color: 'black' }}>US Electrician & Electrical Contractors</h1>
        <p style={{ color: 'black' }}>A full-service electrical services company, specializing in residential and commercial projects. We believe that your home is your refuge—it’s where you want to feel safe, relaxed, and comfortable. That’s why we take pride in our workmanship. When you hire us, you’re hiring the best of the best to make sure that your home is safe and sound.</p>
        <p style={{ color: 'black' }}>We specialize in everything from installing new outlets to repairing electrical problems in existing wiring. We’ve got over 20 years of experience, so when you need a job done right, look no further than our company.</p>
        <button style={{
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          padding: '15px 30px',
          fontSize: '1.2em',
          cursor: 'pointer',
          boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
          marginTop: '20px'
        }}>
          Get a Free Quote Today
        </button>
      </div>
    </div>
  );
}
