import React from "react";

const ServiceFeature = () => {
  return (
    <div className="relative z-20 sm:z-auto mt-16">
      <div className="mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8">
        
        {/* Heading and Subheading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900">Our Services</h1>
          <p className="text-lg text-slate-600 mt-4">
            Explore the features we offer to enhance your experience.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          
          {/* Feature 1: Upload File */}
          <div className="flex">
            <div className="p-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                />
              </svg>
            </div>
            <div className="ml-6">
              <h2 className="text-lg font-semibold leading-6 text-slate-900">
                Upload File
              </h2>
              <p className="mt-2 text-base leading-6 text-slate-700">
                In the case of file upload, Browser reads the file, and for URL
                upload, it sends the URL to the server, returns HTML data, and
                then views it in the Output section.
              </p>
            </div>
          </div>

          {/* Feature 2: Enter Information */}
          <div className="flex">
            <div className="p-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </div>
            <div className="ml-6">
              <h2 className="text-lg font-semibold leading-6 text-slate-900">
                Enter Information
              </h2>
              <p className="mt-2 text-base leading-6 text-slate-700">
                Wrong widen drawn ample eat off doors money. Offending belonging
                promotion provision an be oh consulted ourselves it.
              </p>
            </div>
          </div>

          {/* Feature 3: Fast Transfer */}
          <div className="flex">
            <div className="p-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>
            </div>
            <div className="ml-6">
              <h2 className="text-lg font-semibold leading-6 text-slate-900">
                Fast Transfer
              </h2>
              <p className="mt-2 text-base leading-6 text-slate-700">
                Lose away off why half led have near bed. At engage simple
                father of period others except. My giving do summer of though
                narrow marked at.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceFeature;
