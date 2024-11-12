import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Powerful API",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: "https://www.svgrepo.com/show/503163/api-settings.svg"
    },
    {
      title: "Easy to integrate SDK",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: "https://www.svgrepo.com/show/503138/webpack.svg"
    },
    {
      title: "Low Transaction Cost",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: "https://www.svgrepo.com/show/511771/dashboard-671.svg"
    },
    {
      title: "Powerful Dashboard",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: "https://www.svgrepo.com/show/76267/free-commercial-label.svg"
    }
  ];

  return (
    <section className="py-12 bg-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase animate-slide-down">
            Why choose us?
          </h2>
          <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
            We know tech, we know finance. We are fintech experts.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
            We know how to handle taxation for all the countries we operate in. We care for our customers and help them manage cashflows.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative transition-transform transform hover:scale-105 animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <img src={feature.icon} alt={`${feature.title} icon`} className="w-8 h-8" />
              </div>
              <div className="ml-16">
                <p className="font-heading text-lg leading-6 font-bold text-gray-700">{feature.title}</p>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slide-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 1s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
