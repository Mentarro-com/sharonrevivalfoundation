import ContactForm from "../Components/ContactForm";
import MobilePhone from "../Components/mobile"

const Contact = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-600">
        If you have any questions or would like to reach out to us, please fill out the form below or contact us at (123) 456-7890.
      </p>
      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-indigo-200"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-indigo-200"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-indigo-200"
            placeholder="Your Message"
            rows="4"
          />
        </div>
        <button className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
          Send Message
        </button>
      </form>
      <MobilePhone/>
      <ContactForm />
    </div>
  );
};

export default Contact;
