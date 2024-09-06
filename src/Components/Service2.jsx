import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IMG_PADDING = 50; // Adjust padding if necessary

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.matchMedia("(min-width: 1025px)").matches);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize); // Update on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = useTransform(scrollYProgress, [0, 1, 3], [1, 0.75, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  const animatedScale = isDesktop ? scale : 1;
  const animatedOpacity = isDesktop ? opacity : 0;

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: isDesktop ? IMG_PADDING : "auto", 
        scale: animatedScale, 
      }}
      ref={targetRef}
      className={`${
        isDesktop ? "sticky top-0" : ""
      } z-0 overflow-hidden rounded-3xl`}
    >
      {/* Overlay with fading effect */}
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity: animatedOpacity }} 
      />
    </motion.div>
  );
};

const Feature = ({ children, topOffset, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.matchMedia("(min-width: 1025px)").matches);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const translateY = useTransform(scrollYProgress, [0, 500], [index * 180, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const animatedTranslateY = isDesktop ? translateY : 0;
  const animatedOpacity = isDesktop ? opacity : 1;

  return (
    <motion.div
      ref={ref}
      className={isDesktop ? `sticky top-${topOffset}` : ""} 
      style={
        isDesktop
          ? { opacity: animatedOpacity, translateY: animatedTranslateY }
          : {}
      } 
    >
      {children}
    </motion.div>
  );
};
const NewFeatures = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.matchMedia("(min-width: 1025px)").matches);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Update on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="relative mb-16">
      <div className="grid lg:grid-cols-2 lg:items-start ">
      <div className={`space-y-20 ${isDesktop ? "" : "mb-16"}`}>
          <Feature topOffset={"a"} index={0.5}>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-rocket"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
              </div>
              <div className="ml-4 ">
                <h4 className="text-2xl font-medium leading">
                  Advanced Learning Algorithms
                </h4>
                <p className="mt-2 text-lg">
                  Discover our improved learning algorithms that adapt to your
                  preferences and provide even more personalized learning
                  suggestions.
                </p>
              </div>
            </div>
          </Feature>
          <Feature topOffset={"b"} index={1.5}>
            <div className="flex ">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bookmark-plus"
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                    <line x1="12" x2="12" y1="7" y2="13" />
                    <line x1="15" x2="9" y1="10" y2="10" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-2xl font-medium leading">
                  Interactive Learning Resources
                </h4>
                <p className="mt-2 text-lg">
                  Access an extensive library of interactive resources that make
                  your learning journey engaging and interactive.
                </p>
              </div>
            </div>
          </Feature>
          <Feature topOffset={"c"} index={2.8}>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-video"
                  >
                    <path d="m22 8-6 4 6 4V8Z" />
                    <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-2xl font-medium leading">
                  Enhanced Video Streaming
                </h4>
                <p className="mt-2 text-lg">
                  Experience seamless video integration with enhanced streaming
                  capabilities, providing a better and more uninterrupted
                  learning experience.
                </p>
              </div>
            </div>
          </Feature>
          <Feature topOffset={"d"} index={3.8}>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-file-question"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-2xl font-medium leading">
                  Advanced Quiz Generation
                </h4>
                <p className="mt-2 text-lg">
                  Take your knowledge testing to the next level with advanced
                  quiz generation, providing more customization options for your
                  quizzes.
                </p>
              </div>
            </div>
          </Feature>
        </div>
        <div
          className={`sticky top-0 self-start ${
            isDesktop ? "h-[200vh]" : ""
          } lg:mt-0`}
        >
          <StickyImage imgUrl="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080" />
        </div>
      </div>
    </section>
  );
};

export default NewFeatures;
