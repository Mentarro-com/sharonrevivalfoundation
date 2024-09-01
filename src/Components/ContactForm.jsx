import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (e) => {
    e.target.parentNode.classList.add('focus');
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      e.target.parentNode.classList.remove('focus');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Construct the WhatsApp URL with the message
    const message = `Hello, I'm ${formData.name}. My email is ${formData.email} and my phone number is ${formData.phone}. Here's my message: ${formData.message}`;
    const whatsappURL = `https://wa.me/+917339068991?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.location.href = whatsappURL;
  };

  // Define the map source URL with a fixed zoom level
  const zoom = 15; // Adjust zoom level as needed
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8257769351076!2d80.12139291113274!3d12.982992644789467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f006ab0c14b%3A0xa693f5ddd497698e!2sSharon%20Revival%20Foundation!5e0!3m2!1sen!2sin!4v1724337188064!5m2!1sen!2sin&zoom=${zoom}`;

  return (
    <div className="relative w-full min-h-screen p-8 bg-gray-50 flex flex-col items-center justify-start overflow-hidden">
      {/* Full-width Google Map */}
      <div className="w-full">
        <iframe
          src={mapSrc}
          className="w-full h-80 sm:h-96 md:h-112 border-none"
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>

      {/* Main content container */}
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden mt-8">
        {/* "Let's Get in Touch" Section */}
        <div className="p-6 md:p-8" data-aos="fade-right">
          <h3 className="text-teal-500 text-2xl font-semibold mb-4">Let's get in touch</h3>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!
          </p>
          <div className="mb-4">
            <div className="flex items-center text-gray-600 mb-3">
              <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 mr-3" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="flex items-center text-gray-600 mb-3">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-3" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="flex items-center text-gray-600 mb-3">
              <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" />
              <p>123-456-789</p>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-3">Connect with us:</p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 text-white flex items-center justify-center rounded hover:scale-110 hover:bg-teal-700 transition-all"
                data-aos="zoom-in"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 text-white flex items-center justify-center rounded hover:scale-110 hover:bg-teal-700 transition-all"
                data-aos="zoom-in"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 text-white flex items-center justify-center rounded hover:scale-110 hover:bg-teal-700 transition-all"
                data-aos="zoom-in"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 text-white flex items-center justify-center rounded hover:scale-110 hover:bg-teal-700 transition-all"
                data-aos="zoom-in"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="relative bg-teal-500 p-6 md:p-8" data-aos="fade-left">
          <span className="absolute w-32 h-32 bg-gradient-to-br from-transparent to-teal-600 rounded-full right-6 top-6 animate-bounce-slow"></span>
          <span className="absolute w-20 h-20 bg-gradient-to-br from-transparent to-teal-700 rounded-full right-10 top-10 animate-bounce-slow delay-150"></span>
          
          <form className="relative z-10" onSubmit={handleSubmit}>
            <h3 className="text-white text-2xl font-semibold mb-4">Contact us</h3>
            <div className="relative mb-4">
              <input
                type="text"
                name="name"
                className="w-full p-3 border-2 border-white rounded-full bg-transparent text-white placeholder-transparent focus:outline-none focus:border-white transition"
                placeholder="Username"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                data-aos="fade-up"
              />
              <label
                className={`absolute left-5 top-1/2 transform -translate-y-1/2 text-white pointer-events-none transition-all duration-300 ease-in-out ${
                  formData.name && 'transform -translate-y-6 text-xs'
                }`}
              >
                Username
              </label>
            </div>
            <div className="relative mb-4">
              <input
                type="email"
                name="email"
                className="w-full p-3 border-2 border-white rounded-full bg-transparent text-white placeholder-transparent focus:outline-none focus:border-white transition"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                data-aos="fade-up"
              />
              <label
                className={`absolute left-5 top-1/2 transform -translate-y-1/2 text-white pointer-events-none transition-all duration-300 ease-in-out ${
                  formData.email && 'transform -translate-y-6 text-xs'
                }`}
              >
                Email
              </label>
            </div>
            <div className="relative mb-4">
              <input
                type="tel"
                name="phone"
                className="w-full p-3 border-2 border-white rounded-full bg-transparent text-white placeholder-transparent focus:outline-none focus:border-white transition"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                data-aos="fade-up"
              />
              <label
                className={`absolute left-5 top-1/2 transform -translate-y-1/2 text-white pointer-events-none transition-all duration-300 ease-in-out ${
                  formData.phone && 'transform -translate-y-6 text-xs'
                }`}
              >
                Phone
              </label>
            </div>
            <div className="relative mb-6">
              <textarea
                name="message"
                className="w-full p-3 border-2 border-white rounded-lg bg-transparent text-white placeholder-transparent focus:outline-none focus:border-white transition"
                rows="4"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                data-aos="fade-up"
              ></textarea>
              <label
                className={`absolute left-5 top-1/2 transform -translate-y-1/2 text-white pointer-events-none transition-all duration-300 ease-in-out ${
                  formData.message && 'transform -translate-y-6 text-xs'
                }`}
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-white text-teal-500 font-semibold rounded-full transition hover:bg-gray-200"
              data-aos="zoom-in"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
