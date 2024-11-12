import React from 'react';

const HighlightedFeatures = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6 animate-fade-in">
      {/* Main Heading */}
      <div className="text-center mb-10 animate-slide-up">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">About Us</h2>
      </div>

      <div className="flex flex-col md:flex-row animate-slide-up">
        {/* Image Section */}
        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
          <img
            className="w-1/2 md:w-full mx-auto "
            src="https://via.placeholder.com/400"
            alt="can_help_banner"
          />
        </div>

        {/* Features Section */}
        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 mb-4 px-2 transition-transform duration-500 ease-out transform hover:scale-105"
            >
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl animate-fade-in">
                <h3 className="text-2xl font-bold text-md mb-6">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

// Feature data
const features = [
  {
    title: "Dynamic Personalization",
    description: "Our platform leverages user data and behavior to provide a highly personalized experience, with dynamic content and product recommendations that change in real-time."
  },
  {
    title: "Mobile-Optimized Interface",
    description: "Our website is designed with a mobile-first approach, offering a seamless browsing experience across all devices, including smartphones and tablets."
  },
  {
    title: "24/7 Customer Support",
    description: "Our U.S.-based customer support team is available around the clock to answer any questions, resolve any issues, and provide helpful solutions."
  },
  {
    title: "Secure Payment Processing",
    description: "We use cutting-edge security measures to protect our customers' sensitive information and ensure the safety of all transactions made on our site."
  }
];

export default HighlightedFeatures;
