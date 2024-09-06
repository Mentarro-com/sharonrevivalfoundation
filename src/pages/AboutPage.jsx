import TestimonialSlider from "../Components/Testimonial";
const About = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
      <p className="mt-4 text-lg text-gray-600">
        We are a company committed to delivering the best services to our clients. Our team of experts is dedicated to ensuring customer satisfaction.
      </p>
      <TestimonialSlider />
    </div>
  );
};

export default About;
