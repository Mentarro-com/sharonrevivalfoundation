import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";

// FlyoutLink Component
const FlyoutLink = ({ children, to, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link to={to} className="relative text-white">
        {children}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-1 left-0 right-6 h-[2px] origin-left scale-x-0 rounded-full bg-green-300 transition-transform duration-300 ease-out"
        />
      </Link>
      {open && FlyoutContent && (
        <div className="absolute left-0 top-full mt-2">
          {FlyoutContent}
        </div>
      )}
    </div>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

const navVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 30,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 30,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const AnimatedHamburgerButton = ({ toggle, setToggle }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={toggle ? "open" : "closed"}
        onClick={() => setToggle(!toggle)}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const navLinks = [
  { id: "home", title: "Home", path: "/" },
  { id: "about", title: "About", path: "/about" },
  { id: "services", title: "Services", path: "/services" },
  { id: "gallery", title: "Gallery", path: "/gallery" },
  { id: "contact", title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleNavClick = (title) => {
    setActive(title);
    setToggle(false); // Close the sidebar after clicking
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar sticky top-0 bg-black z-50">
      {/* Logo */}
      <div className="flex">
        <img src="/logo1.png" alt="Logo Image 1" className="h-12 w-auto" /> {/* First logo image */}
        <img src="/name.png" alt="Logo Image 2" className="h-12 w-auto" /> {/* Second logo image */}
      </div>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <FlyoutLink
            key={nav.id}
            to={nav.path}
            FlyoutContent={<div>Your flyout content here</div>} // Optional
          >
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => handleNavClick(nav.title)}
            >
              {nav.title}
            </li>
          </FlyoutLink>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <AnimatedHamburgerButton toggle={toggle} setToggle={setToggle} />
        {/* Sidebar */}
        <motion.div
          initial={false}
          animate={toggle ? "open" : "closed"}
          variants={navVariants}
          className={`p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-40`}
          style={{ display: toggle ? "block" : "none" }} // This line hides the sidebar completely when closed
        >
          <motion.ul
            variants={navVariants}
            className="list-none flex justify-end items-start flex-1 flex-col"
          >
            {navLinks.map((nav, index) => (
              <motion.li
                variants={itemVariants}
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => handleNavClick(nav.title)}
              >
                <Link to={nav.path}>{nav.title}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
};


export default Navbar;
