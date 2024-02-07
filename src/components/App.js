import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Landing from "./Landing";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Contact from "./Contact";
import About from "./About";
import AboutUsPage from './About_Us_Page'; // Assuming this is your "About Us" page component
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const landingRef = useRef(null);

  return (
    <Router>
      <div>
        <Navbar landingRef={landingRef} />
        <Routes>
          <Route path="/" element={
            <>
              <Landing ref={landingRef} id="landing" />
              <About id="about" />
              <Services id="services" />
              <Gallery id="gallery" />
              <Testimonials id="testimonials" />
              <div style={{ height: '100px' }}></div> {/* Spacing div */}
              <Contact id="contact" />
              <div style={{ height: '100px' }}></div> {/* Spacing div */}
              <Footer id="footer" />
            </>
          } />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
