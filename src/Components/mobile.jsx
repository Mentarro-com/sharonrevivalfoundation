import { motion, useInView } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import { useRef } from "react";

const MobilePhone = () => {
  const textRef = useRef(null); // Reference for the text container
  const isInView = useInView(textRef, { once: true }); // Trigger only once when in view

  return (
    <section className="relative flex flex-col items-center bg-[#F9FAFB] justify-center p-12 sm:flex-row overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-[-50px] left-[-50px] h-[200px] w-[200px] rounded-full bg-green-100 opacity-50" />
      <div className="absolute bottom-[-60px] right-[-60px] h-[250px] w-[250px] rounded-full bg-blue-100 opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[200px] bg-gradient-to-r from-green-50 to-blue-50 rounded-full opacity-20 transform rotate-12" />

      <FloatingPhone />

      <motion.div
        ref={textRef} // Attach the ref here
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
        transition={{ duration: 1, delay: 0.3 }}
        className="relative mt-6 sm:ml-24 sm:mt-0 text-black z-10"
      >
        <h2 className="text-lg font-medium underline decoration-2 underline-offset-4 sm:text-xl md:text-2xl text-[#E1306C]">
          INSTAGRAM
        </h2>

        <div className="mt-4 flex flex-col space-y-2 sm:space-y-4 sm:block">
          <p className="text-2xl font-semibold sm:inline-block sm:text-3xl md:text-4xl lg:text-5xl">
            Follow our
          </p>
          <p className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">page</p>
        </div>

        <p className="mt-4 text-xl font-bold text-[#4CAF50] sm:text-2xl md:text-3xl">@sharon</p>
      </motion.div>
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-green-200"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <img
          src="/we.jpg"
          alt="Phone Screen"
          className="h-full w-full rounded-[20px] object-cover"
        />
      </motion.div>
    </div>
  );
};






// const HeaderBar = () => {
//   return (
//     <>
//       <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
//       <div className="absolute right-3 top-2 z-10 flex gap-2">
//         <FiWifi className="text-neutral-600" />
//         <FiBatteryCharging className="text-neutral-600" />
//       </div>
//     </>
//   );
// };

// const Screen = () => {
//   return (
//     <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
//       <svg
//         width="50"
//         height="39"
//         viewBox="0 0 50 39"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="fill-violet-500"
//       >
//         <path
//           d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
//           stopColor="#000000"
//         ></path>
//         <path
//           d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
//           stopColor="#000000"
//         ></path>
//       </svg>

//       <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-violet-500 backdrop-blur">
//         Get Started
//       </button>

//       <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-violet-500" />
//     </div>
//   );
// };

export default MobilePhone;
