import React from 'react';
import './DotsBackground.css';

const Timeline = () => {
  const timelineData = [
    {
      title: 'Initial Consultation',
      description:
        'An in-depth assessment to understand the individual’s needs and create a personalized treatment plan.',
    },
    {
      title: 'Detoxification Phase',
      description:
        'A medically supervised detox process to safely remove harmful substances from the body.',
    },
    {
      title: 'Rehabilitation Therapy',
      description:
        'Personalized therapy sessions to address physical, psychological, and emotional recovery.',
    },
    {
      title: 'Aftercare Planning',
      description:
        'Development of a long-term recovery plan including support groups and ongoing counseling.',
    },
  ];

  return (
    <div className="relative flex flex-col items-center dots-bg px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-16">
      <div className="dots-pattern dots-top-right"></div>
      <div className="dots-pattern dots-bottom-left"></div>
    
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mb-6">
        Rehabilitation Timeline
      </h1>

      {/* Timeline content */}
      <div className="relative space-y-8 md:space-y-12 lg:space-y-16 border-l-2 border-dashed border-gray-300">
        {timelineData.map((item, index) => (
          <div key={index} className="relative flex items-start md:items-center">
            {/* Timeline marker */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -left-4 md:-left-6 lg:-left-8 h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-6">
              <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-green-500">
                {item.title}
              </h4>
              <p className="mt-2 text-sm md:text-base lg:text-lg text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
