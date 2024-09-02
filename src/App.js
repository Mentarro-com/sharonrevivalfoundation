import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/HomePage";
import Services from "./pages/ServicesPage";
import About from "./pages/AboutPage";
import Gallery from "./pages/GalleryPage";
import Contact from "./pages/ContactPage";
import WhatsApp from "./Components/Whatsapp";
import ScrollUpButton from "./Components/ScrollUp";
import Phone from "./Components/Contact";

function App() {
  return (
    <Router>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`sm:px-16 px-6 flex justify-center items-center`}>
          <div className={`xl:max-w-[1280px] w-full `}>
            <Navbar />
          </div>
        </div>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsApp />
      <ScrollUpButton/>
      <Phone/>
    </Router>
  );
}

export default App;

