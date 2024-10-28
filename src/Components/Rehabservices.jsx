import React from 'react';
import { FaHandHoldingHeart, FaBrain, FaWalking } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const Service1 = () => {
  // Service card component
  const ServiceCard = ({ title, description, icon, bgPosition }) => {
    return (
      <div className="relative bg-white rounded-xl overflow-hidden transform hover:scale-95 transition-transform duration-300 max-w-xs">
        {/* Background image for larger screens */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: 'url(./logo1.png)',
            backgroundPosition: bgPosition,
            backgroundSize: '310%',
          }}
        ></div>
        <div className="relative p-16 flex flex-col items-center bg-opacity-50 bg-white">
          {/* Icon */}
          <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
            {icon}
          </div>
          {/* Title */}
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
          {/* Description */}
          <p className="text-gray-600 text-center">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1"> {/* Adjusted for responsive layout */}
        <ServiceCard
          title="Alcohol Deaddiction"
          description="Helping you regain mobility and strength healing."
          icon={<FaWalking size={24} />}
          bgPosition="0% 0%"
        />
        <ServiceCard
          title="Drug Deaddiction"
          description="Overcoming drug addiction through support and recovery for future."
          icon={<FaBrain size={24} />}
          bgPosition="50% 0%"
        />
        <ServiceCard
          title="Smoke Deaddiction"
          description="Smoke de-addiction means reclaiming health and vitality."
          icon={<FaHandHoldingHeart size={24} />}
          bgPosition="100% 0%"
        />
        <ServiceCard
          title="Best Psychiatric Service"
          description="Psychiatric services offer healing and mental support."
          icon={<FaBrain size={24} />}
          bgPosition="0% 50%"
        />
        <ServiceCard
          title="Ayurveda and Homeopathy"
          description="Naturopathy and homeopathy focus on holistic healing."
          icon={<FaWalking size={24} />}
          bgPosition="50% 50%"
        />
        <ServiceCard
          title="Yoga & Meditation for Healthy Life"
          description="Yoga promotes balance, strength, and inner peace for Healthy Life."
          icon={<FaHandHoldingHeart size={24} />}
          bgPosition="100% 50%"
        />
        <ServiceCard
          title="Addiction Counseling"
          description="Addiction counseling guides recovery."
          icon={<FaBrain size={24} />}
          bgPosition="0% 100%"
        />
        <ServiceCard
          title="Rehabilitation Programs"
          description="Comprehensive rehabilitation services."
          icon={<FaWalking size={24} />}
          bgPosition="50% 100%"
        />
        <ServiceCard
          title="Dietary Management"
          description="Dietary management promotes health."
          icon={<FaHandHoldingHeart size={24} />}
          bgPosition="100% 100%"
        />
      </div>
    </div>
  );
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 }
};

const Section = ({ children, variants, order }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-wrap items-center mt-20 text-left text-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const RehabServices = () => {
  return (
    <div className="text-center p-8">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Why Choose Us?
      </h2>

      <Section variants={fadeInLeft} id="holistic-therapies">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src="/service6.jpg"
            alt="gem"
            className="inline-block rounded shadow-lg border border-merino-400"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Simple integration
          </h3>
          <p className="sm:text-lg mt-6">
            Use the LocaleData gem to download translations directly into your Ruby on Rails
            projects using the provided command line interface. Just create a project and follow
            the step-by-step instructions.
          </p>
        </div>
      </Section>

      <Section variants={fadeInRight} id="alcohol-detox">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src="/service9.jpg"
            alt="project members"
            className="inline-block rounded shadow-lg border border-merino-400"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Easy collaboration
          </h3>
          <p className="sm:text-lg mt-6">
            All LocaleData projects are private. Each project can have multiple collaborators
            with different roles and access permissions. You determine who can see and edit
            your translations. Just add admins, developers, translators and configure their
            access rights.
          </p>
        </div>
      </Section>

      <Section variants={fadeInLeft} id="medical-detox">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src="/service10.jpg"
            alt="editor"
            className="inline-block rounded shadow-lg border border-merino-400"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            No more syntax errors
          </h3>
          <p className="sm:text-lg mt-6">
            LocaleData provides you easy import/export functions for your YAML files.
            Use a simple editor with many predefined languages to manage your locales.
            LocaleData also supports multiple translation types, such as simple text, plural forms,
            numbers, booleans, symbols, arrays, ...
          </p>
        </div>
      </Section>

      <Section variants={fadeInRight}>
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <img
            src="/smoke.webp"
            alt="bulk editing"
            className="inline-block rounded shadow-lg border border-merino-400"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Bulk editing
          </h3>
          <p className="sm:text-lg mt-6">
            Do you need to change the path of many translation keys at once? No problem, just
            use the bulk editing feature and enjoy the results.
          </p>
        </div>
      </Section>
    </div>
  );
};

export {Service1, RehabServices};
