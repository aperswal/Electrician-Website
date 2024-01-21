import React, { useRef } from 'react';
import Navbar from "./Navbar";
import Landing from "./Landing";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Contact from "./Contact";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const landingRef = useRef(null);

  return (
    <div>
      <Navbar landingRef={landingRef} />
      {/* Assign an ID to each section */}
      <Landing ref={landingRef} id="landing" />
      <About id="about" />
      <Services id="services" />
      <Gallery id="gallery" />
      <Testimonials id="testimonials" />
      <Contact id="contact" />
      <div style={{ height: '200px' }}></div> {/* Spacing div */}
      <Footer id="footer" />
    </div>
  );
}

export default App;
