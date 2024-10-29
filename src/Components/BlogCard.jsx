import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ image, title, description, link, sectionId }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const navigate = useNavigate();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  const handleClick = () => {
    navigate("/services");
    // Delay to ensure page is fully loaded before scrolling
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <motion.div
      ref={ref}
      className="bg-[#2b4f2b] shadow-md border border-gray-200 rounded-lg max-w-sm mb-5"
      initial={{ opacity: 0, x: 40 }}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div onClick={handleClick}>
        <img className="rounded-t-lg" src={image} alt={title} />
      </div>
      <div className="p-5">
        <div onClick={handleClick}>
          <h5 className="text-[#F6F1E6] font-bold text-2xl tracking-tight mb-2 cursor-pointer">
            {title}
          </h5>
        </div>
        <p className="font-normal text-[#F6F1E6] mb-3">{description}</p>
        <button
          onClick={handleClick}
          className="text-white bg-[#22C55E] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
        >
          Read more
        </button>
      </div>
    </motion.div>
  );
};

const BlogCardGrid = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  const blogPosts = [
    {
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
      title: "Holistic Therapies",
      description:
        "At Sharon Revival Foundation, our approach to holistic therapies is grounded in the belief that true healing embraces the mind, body, and spirit. ",
      link: "/services",
      sectionId: "holistic-therapies",
    },
    {
      image: "https://flowbite.com/docs/images/blog/image-2.jpg",
      title: "Alcohol Detox Programs",
      description:
        "At Sharon Revival Foundation, our Alcohol Detox Programs offer a compassionate and supportive journey toward sobriety. ",
      link: "/services",
      sectionId: "alcohol-detox",
    },
    {
      image: "https://flowbite.com/docs/images/blog/image-3.jpg",
      title: "Medical Detoxification Programs",
      description:
        "Experience complete healing with Sharon Revival Foundation’s Medical Detoxification Programs. Guided by our committed medical team, we provide a safe and thorough detox process. ",
      link: "/services",
      sectionId: "medical-detox",
    },
  ];

  return (
    <div className="p-4 bg-[#f6fcf5]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 mt-12 text-center">
          What Happens In Detox
        </h2>
        <p className="text-xl text-gray-600 mb-8 text-center mx-4 md:mx-20 lg:mx-40">
        During detox, the body naturally expels toxins built up from substance
          use. Patients may experience withdrawal symptoms, which are managed
          and alleviated under professional care. The process paves the way for
          deeper healing, setting the foundation for long-term recovery.
        </p>
      </motion.div>
      <div className="max-w-7xl mx-auto mb-8 p-4">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              title={post.title}
              description={post.description}
              link={post.link}
              sectionId={post.sectionId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCardGrid;
