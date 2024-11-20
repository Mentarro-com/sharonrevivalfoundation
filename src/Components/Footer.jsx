import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import backgroundImage from './Images/green.jpg'; // Placeholder for background image
// import companyLogo from './Images/amma_logo-2.png'; // Placeholder for company logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [zoom, setZoom] = useState(15); // Initial zoom level
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Function to handle zoom in and out
  const handleZoomChange = (type) => {
    if (type === "in" && zoom < 20) {
      setZoom(zoom + 1); // Increase zoom level
    } else if (type === "out" && zoom > 1) {
      setZoom(zoom - 1); // Decrease zoom level
    }
  };

  // Update the screen size state on window resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8257769351076!2d80.12139291113274!3d12.982992644789467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f006ab0c14b%3A0xa693f5ddd497698e!2sSharon%20Revival%20Foundation!5e0!3m2!1sen!2sin!4v1724337188064!5m2!1sen!2sin&zoom=${zoom}`;

  return (
    <footer
      className="relative bg-gray-900 text-white py-8"
      style={{
        backgroundImage: `https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`relative rounded-lg shadow-lg p-8 max-w-6xl mx-auto ${
          isDesktop
            ? "border border-gray-300 bg-white bg-opacity-10 backdrop-blur-sm"
            : "bg-transparent"
        }`}
        style={{ padding: isDesktop ? "2rem 4rem" : "2rem" }} // Adjusted padding for extended border
      >
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          {/* Company Logo and Description */}
          <div className="flex flex-col items-start space-y-6 flex-1">
            <img
              src="logo1.png"
              alt="Company Logo"
              className="w-32 h-auto"
            />
            <p className="text-sm text-justify font-sans">
              Sharon in Chennai is one of the leading businesses in the
              Rehabilitation Centre For Alcohol. Also known for Rehabilitation
              Centre For Alcohol, Rehabilitation Centre For Drug Addiction and
              much more Healing Hands Hub, Chennai.
            </p>
            {/* Icons below the description */}
            <div className="flex space-x-4 mt-4">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-lg hover:text-[#1877F2] transition duration-300 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-lg hover:text-[#1DA1F2] transition duration-300 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-lg hover:text-[#0077B5] cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-lg hover:bg-gradient-to-r from-[#F58529] via-[#DD2A7B] via-[#8134AF] to-[#FEDA77] transition duration-300 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-lg hover:text-[#25D366] cursor-pointer"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 flex-1">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#22C55E]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#22C55E]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#22C55E]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#22C55E]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#22C55E]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information and Location */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 flex-1">
            {/* Contact Information */}
            <div
              className={`flex flex-col space-y-4 flex-1 ${
                isDesktop ? "-ml-36" : ""
              }`}
            >
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="group flex items-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-2 text-xl transition-colors group-hover:text-gray-500"
                />
                <p className="text-sm group-hover:text-gray-500">
                  No 112 JN Road Anakaputhur Chennai-70
                </p>
              </div>
              <div className="group flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-xl transition-colors group-hover:text-gray-500"
                />
                <p className="text-sm group-hover:text-gray-500">
                  sharonrevivalfoundation@gmail.com
                </p>
              </div>
              <div className="group flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 text-xl transition-colors group-hover:text-gray-500"
                />
                <p className="text-sm group-hover:text-gray-500">
                  +91 72008 00851/52/53
                </p>
              </div>
              <div className="flex space-x-4">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-lg hover:text-[#1877F2] transition duration-300 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-lg hover:text-[#1DA1F2] transition duration-300 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-lg hover:text-[#0077B5] cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-lg hover:bg-gradient-to-r from-[#F58529] via-[#DD2A7B] via-[#8134AF] to-[#FEDA77] transition duration-300 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-lg hover:text-[#25D366] cursor-pointer"
                />
              </div>
            </div>

            {/* Google Map */}
            <div className="relative w-full h-60 md:h-180 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Google Map"
              ></iframe>
              <div className="absolute top-0 right-0 p-2">
                <button
                  className="bg-gray-700 text-white p-2 rounded-full"
                  onClick={() => handleZoomChange("in")}
                >
                  +
                </button>
                <button
                  className="bg-gray-700 text-white p-2 rounded-full mt-2"
                  onClick={() => handleZoomChange("out")}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-xs">
          &copy; 2024 Sharon Revival Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
