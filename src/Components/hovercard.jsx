import React from 'react';

const HoverCard = () => {
  return (
    <div className="w-screen max-h-48 bg-repeat-x relative overflow-hidden group h-[500px] bg-primary card-hidden">
      <img
        src="https://images.unsplash.com/photo-1595239244990-b609da3d95f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxkYXRhJTNBaW1hZ2UlMkZibXAlM0JiYXNlNjQlMkNRazMyQkFBQUFBQUFBRFlBQUFBb0FBQUFDQUFBQUFnQUFBQUJBQmdBQUFBQUFNQUFBQUFUQ3dBQUV3c0FBQUFBQUFBQUFBQUFvWnRhbnBaTm9aTTR0S05KeTd0dzBjV0Z1clYlMkZpcEJqcDZSMW41dGtsSTQlMkZvWmxLdkxWNXlNT1R0TFNLaFl0Z3I2Mk1vYUY1aUl0Tmk1RlRxN0NJdnNLa3I3T1dnSVpkdGJPYXBhYUhobzVnaEpKbnBMS1l1Y1N5ckxTZ2ZvVmZ0N1dkcXF1T2s1bDBrcDklMkZyTHFudk1pN3JiYW1nSWRtdDdPWHNLMlBwYWFGckxHV3ZzYTB4YzYlMkZzYm1vaG8xdXRiQ1BzNiUyQk50YkdSd0wlMkJsenRDOHp0TEJ0cnlwaTVKMXRLJTJCTHRhJTJCTXVyV1Z5TVdxMU5TJTJGMGRUQnVMMm9qcFIzfGVufDB8MHx8fDE3MjM0MDU0MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
        className="h-full transition-all delay-300 duration-400 ease-in w-full absolute group-hover:scale-105 object-center"
        alt="Background"
      />
      <div className="absolute p-8 z-50 gap-4 flex flex-col justify-end bg-opacity-45 h-full w-full bottom-0">
        <span className="text-[20px] sm:text-[24px] text-white md:text-[28px] font-canela">
          Hover Card to see Magic
        </span>
        <p className="group-hover:block text-white text-[14px] hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio accusantium dolores, in cumque labore non assumenda necessitatibus vel at voluptates deleniti minus nesciunt nobis repellendus dolorum blanditiis ex magni impedit?
        </p>
        <a href="contactus.html" className="flex items-center gap-2">
          <div className="flex group-hover:bg-secondary justify-center items-center rounded-full bg-primary min-h-10 min-w-10 max-h-10 max-w-10">
            <img
              src="https://images.unsplash.com/photo-1595239244990-b609da3d95f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxkYXRhJTNBaW1hZ2UlMkZibXAlM0JiYXNlNjQlMkNRazMyQkFBQUFBQUFBRFlBQUFBb0FBQUFDQUFBQUFnQUFBQUJBQmdBQUFBQUFNQUFBQUFUQ3dBQUV3c0FBQUFBQUFBQUFBQUFvWnRhbnBaTm9aTTR0S05KeTd0dzBjV0Z1clYlMkZpcEJqcDZSMW41dGtsSTQlMkZvWmxLdkxWNXlNT1R0TFNLaFl0Z3I2Mk1vYUY1aUl0Tmk1RlRxN0NJdnNLa3I3T1dnSVpkdGJPYXBhYUhobzVnaEpKbnBMS1l1Y1N5ckxTZ2ZvVmZ0N1dkcXF1T2s1bDBrcDklMkZyTHFudk1pN3JiYW1nSWRtdDdPWHNLMlBwYWFGckxHV3ZzYTB4YzYlMkZzYm1vaG8xdXRiQ1BzNiUyQk50YkdSd0wlMkJsenRDOHp0TEJ0cnlwaTVKMXRLJTJCTHRhJTJCTXVyV1Z5TVdxMU5TJTJGMGRUQnVMMm9qcFIzfGVufDB8MHx8fDE3MjM0MDU0MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
              className="w-[28px] h-8 rounded-full overflow-hidden"
              alt="Contact"
            />
          </div>
          <h2 className="font-bold text-[16px] text-white">Contact Us</h2>
        </a>
      </div>

      <div className="absolute transition-all duration-400 ease-in bg-gradient-to-b from-transparent to-black min-h-[650px] text-white bottom-0 group-hover:bottom-0 group-hover:min-h-[900px] w-full z-30"></div>
    </div>

    
  );
};

export default HoverCard;
