import React from 'react';
import { FaHandHoldingHeart, FaBrain, FaWalking } from 'react-icons/fa';

const App = () => {
  // Service card component
  const ServiceCard = ({ title, description, icon, bgPosition }) => {
    return (
      <div className="relative bg-white rounded-xl overflow-hidden transform hover:scale-95 transition-transform duration-300 max-w-xs">
        {/* Background image for larger screens */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: 'url(./logo1.png)',
            backgroundPosition: bgPosition,
            backgroundSize: '310%',
          }}
        ></div>
        <div className="relative p-16 flex flex-col items-center bg-opacity-50 bg-white">
          {/* Icon */}
          <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
            {icon}
          </div>
          {/* Title */}
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
          {/* Description */}
          <p className="text-gray-600 text-center">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1"> {/* Adjusted for responsive layout */}
        <ServiceCard
          title="Alcohol Deaddiction"
          description="Helping you regain mobility and strength healing."
          icon={<FaWalking size={24} />}
          bgPosition="0% 0%"
        />
        <ServiceCard
          title="Drug Deaddiction"
          description="Overcoming drug addiction through support and recovery for future."
          icon={<FaBrain size={24} />}
          bgPosition="50% 0%"
        />
        <ServiceCard
          title="Smoke Deaddiction"
          description="Smoke de-addiction means reclaiming health and vitality."
          icon={<FaHandHoldingHeart size={24} />}
          bgPosition="100% 0%"
        />
        <ServiceCard
          title="Best Psychiatric Service"
          description="Psychiatric services offer healing and mental support."
          icon={<FaBrain size={24} />}
          bgPosition="0% 50%"
        />
        <ServiceCard
          title="Ayurveda and Homeopathy"
          description="Naturopathy and homeopathy focus on holistic healing."
          icon={<FaWalking size={24} />}
          bgPosition="50% 50%"
        />
        <ServiceCard
          title="Yoga & Meditation for Healthy Life"
          description="Yoga promotes balance, strength, and inner peace for Healthy Life."
          icon={<FaHandHoldingHeart size={24} />}
          bgPosition="100% 50%"
        />
        <ServiceCard
          title="Addiction Counseling"
          description="Addiction counseling guides recovery."
          icon={<FaBrain size={24} />}
          bgPosition="0% 100%"
        />
        <ServiceCard
          title="Rehabilitation Programs"
          description="Comprehensive rehabilitation services."
          icon={<FaWalking size={24} />}
          bgPosition="50% 100%"
        />
        <ServiceCard
          title="Dietary Management"
          description="Dietary management promotes health."
          icon={<FaHandHoldingHeart size={24} />}
          bgPosition="100% 100%"
        />
      </div>
    </div>
  );
};

export default App;
