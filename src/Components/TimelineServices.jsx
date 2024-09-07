import React from 'react';

const Timeline = () => {
  const timelineData = [
    {
      title: 'Frontend Development',
      description:
        'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.',
      
    },
    {
      title: 'Graphic Design',
      description:
        'Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.',
      
    },
    {
      title: 'Lead UI/UX Designer',
      description:
        'Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.',
      
    },
    {
      title: 'Lead UI/UX Designer',
      description:
        'Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.',
      
    },
  ];

  return (
    <div className="relative flex h-screen items-center justify-center bg-white px-6 md:px-60">
      {/* Title in the top left corner */}
      <h1 className="absolute top-0 left-0 p-4 text-4xl font-bold text-gray-700">
        My Timeline
      </h1>

      {/* Timeline content with responsive top padding for mobile */}
      <div className="mt-10 pt-10 md:pt-0 space-y-6 border-l-2 border-dashed">
        {timelineData.map((item, index) => (
          <div key={index} className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold text-green-500">{item.title}</h4>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
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
