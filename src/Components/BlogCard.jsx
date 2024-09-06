import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BlogCard = ({ image, title, description, link }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5"
      initial={{ opacity: 0, x: 40 }}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <a href={link}>
        <img className="rounded-t-lg" src={image} alt={title} />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {title}
          </h5>
        </a>
        <p className="font-normal text-gray-700 mb-3">{description}</p>
        <a
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          href={link}
        >
          Read more
        </a>
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
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "#",
    },
    {
      image: "https://flowbite.com/docs/images/blog/image-2.jpg",
      title: "The next big thing in tech",
      description:
        "Discover what's coming next in the world of technology and innovation.",
      link: "#",
    },
    {
      image: "https://flowbite.com/docs/images/blog/image-3.jpg",
      title: "How to stay ahead in a competitive market",
      description:
        "Strategies to keep you ahead of the competition in the ever-changing tech landscape.",
      link: "#",
    },
  ];

  return (
    <div className=" p-4 bg-pink-300">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4  mt-12 text-center">
          Trending Tech Insights
        </h2>
        <p className="text-lg font-semibold text-gray-600 mb-8 text-center">
          Stay informed with the latest trends and innovations in technology,
          handpicked for you.
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
            />
          ))}
    </div>
      </div>
    </div>
  );
};    

export default BlogCardGrid;
