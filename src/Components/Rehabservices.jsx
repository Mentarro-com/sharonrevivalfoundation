import React from "react";
import { FaHandHoldingHeart, FaBrain, FaWalking } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const Service1 = () => {
  // Service card component
  const ServiceCard = ({ title, description, icon, bgPosition }) => {
    return (
      <div className="relative bg-white rounded-xl overflow-hidden transform hover:scale-95 transition-transform duration-300 max-w-xs">
        {/* Background image for larger screens */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: "url(./logo1.png)",
            backgroundPosition: bgPosition,
            backgroundSize: "310%",
          }}
        ></div>
        <div className="relative p-16 flex flex-col items-center bg-opacity-50 bg-white">
          {/* Icon */}
          <div className="bg-[#22C55E] text-white p-4 rounded-full mb-4">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {" "}
        {/* Adjusted for responsive layout */}
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

// Define animation variants for left and right animations
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

// Section component to wrap each service
const Section = ({ children, variants, id }) => (
  <motion.div
    id={id}
    className="flex flex-col md:flex-row items-center justify-center mb-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={variants}
  >
    {children}
  </motion.div>
);

const RehabServices = () => {
  return (
    <div className="text-center p-8">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-12">
        Why Choose Us?
      </h2>

      <Section variants={fadeInLeft} id="holistic-therapies">
        <div className="w-full my-12 md:w-3/5 lg:w-1/2 px-4">
          <img
            src="/service6.jpg"
            alt="gem"
            className="inline-block rounded shadow-lg border border-merino-400"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Holistic Therapies
          </h3>
          <p className="sm:text-lg mt-6">
            Holistic therapies focus on healing the mind, body, and spirit,
            addressing the whole person rather than isolated symptoms. This
            approach combines traditional practices, such as meditation, yoga,
            and herbal remedies, with innovative techniques like art therapy and
            biofeedback to create a balanced therapeutic experience. By
            tailoring treatments to individual needs, holistic therapies
            encourage mental clarity, emotional resilience, and physical
            well-being, empowering individuals to reconnect with themselves and
            foster a harmonious, healthy lifestyle. The goal is to provide a
            compassionate and supportive environment that facilitates a
            reflective journey toward lasting wellness and personal growth.
          </p>
        </div>
      </Section>

      <Section variants={fadeInRight} id="alcohol-detox">
        <div className="w-full my-12 md:w-3/5 lg:w-1/2 px-4">
          <img
            src="/service9.jpg"
            alt="project members"
            className="inline-block rounded shadow-lg border border-merino-400"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Alcohol Detox Programs
          </h3>
          <p className="sm:text-lg mt-6">
            Alcohol detox programs provide a compassionate and supportive
            environment for individuals seeking to overcome alcohol dependence.
            These programs are designed to help individuals safely navigate the
            withdrawal process under the guidance of experienced professionals.
            A focus on holistic well-being ensures that each person receives
            comprehensive care that addresses not just the physical symptoms of
            detox, but also the emotional and psychological aspects of recovery.
            By offering tailored support, including counseling and therapeutic
            interventions, alcohol detox programs aim to foster lasting
            recovery, empowering individuals to build healthier lifestyles and
            cope with the challenges of sobriety in a nurturing atmosphere.
          </p>
        </div>
      </Section>

      {/* Third service section with fadeInLeft for consistency */}
      <Section variants={fadeInLeft} id="medical-detox">
        <div className="w-full my-12 md:w-3/5 lg:w-1/2 px-4">
          <img
            src="/service6.jpg"
            alt="editor"
            className="inline-block rounded shadow-lg border border-merino-400"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Medical Detoxification Programs
          </h3>
          <p className="sm:text-lg mt-6">
            Medical detoxification programs play a crucial role in the recovery
            journey for individuals grappling with substance dependence. These
            programs are meticulously designed to provide a safe, structured
            environment where individuals can undergo the challenging process of
            detoxification under the careful supervision of a dedicated medical
            team. This team not only addresses the physical aspects of
            withdrawal but also offers emotional and psychological support,
            recognizing that detoxification is as much a mental journey as it is
            a physical one. By focusing on comprehensive care, these programs
            help individuals manage withdrawal symptoms effectively, reducing
            the discomfort and risks associated with the detox process.
          </p>
        </div>
      </Section>

      <Section variants={fadeInRight}>
        <div className="w-full my-12 md:w-3/5 lg:w-1/2 px-4">
          <img
            src="/smoke.webp"
            alt="bulk editing"
            className="inline-block rounded shadow-lg border border-merino-400"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
          <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Mindfulness and Meditation Programs
          </h3>
          <p className="sm:text-lg mt-6">
            Mindfulness and meditation programs focus on cultivating
            present-moment awareness and reducing stress through various
            mindfulness techniques. These programs guide participants in
            practicing meditation, breathing exercises, and mindfulness
            practices that promote relaxation and emotional balance. By learning
            to observe their thoughts and feelings without judgment, individuals
            can develop greater self-awareness and resilience in the face of
            life’s challenges. This approach not only enhances mental clarity
            but also improves emotional regulation, enabling individuals to
            respond to stressors more effectively. Regular practice has been
            linked to a myriad of benefits, including reduced symptoms of
            anxiety and depression, improved concentration, and a greater sense
            of peace.
          </p>
        </div>
      </Section>
    </div>
  );
};

export { Service1, RehabServices };
