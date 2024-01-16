import React, { useRef } from 'react';
import Navbar from "./Navbar";
import Landing from "./Landing";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const landingRef = useRef(null);

  return (
    <div>
      <Navbar landingRef={landingRef} />
      <Landing ref={landingRef} />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
      <div style={{ height: '200px' }}></div> {/* Spacing div */}
      <Footer />
    </div>
  );
}

export default App;
