import React, { useState } from 'react';
import { database } from '../firebase'; // Adjust the path as necessary
import { ref, push, set } from 'firebase/database';
import Map from './Map';
import './css/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // State for submission confirmation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData); // Log form data
    try {
      const messagesRef = ref(database, 'messages');
      const newMessageRef = push(messagesRef);
      await set(newMessageRef, {
        ...formData,
        createdAt: new Date().toISOString(),
      });

      console.log('Message sent successfully'); // Log success message
      setIsSubmitted(true); // Set submission state to true
      setTimeout(() => setIsSubmitted(false), 5000); // Reset submission state after 5 seconds

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error("Error adding message: ", error); // Log any errors
      alert('Error sending message');
    }
  };

  return (
    <div id="contact" className="contact-container">
        <div className="map-container">
            <Map />
        </div>
        <div className="form-container">
            <h2 className="contact-header">Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="contact-input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="contact-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="contact-input"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="contact-input"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button type="submit" className={`contact-button ${isSubmitted ? 'contact-button-submitted' : ''}`}>
                  Submit
                </button>
                {isSubmitted && <p className="submission-confirmation">Your message has been sent!</p>}
            </form>
        </div>
    </div>
  );
}