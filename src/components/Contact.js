import React from 'react';
import Map from './Map';
import './css/contact.css'; // Ensure the path to your CSS file is correct

export default function Contact() {
  return (
    <div id="contact" className="contact-container">
        <div className="map-container">
            <Map />
        </div>
        <div className="form-container">
            <h2 className="contact-header">Contact Us</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" className="contact-input" />
                <input type="email" placeholder="Your Email Address" className="contact-input" />
                <input type="tel" placeholder="Your Phone Number" className="contact-input" />
                <textarea placeholder="Message" rows="4" className="contact-input"></textarea>
                <button type="submit" className="contact-button">Submit</button>
            </form>
        </div>
    </div>
  );
}

