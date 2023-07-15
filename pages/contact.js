import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="bg-white text-black font-serif flex flex-col min-h-screen">
      <Navbar />

      <section className="flex flex-col mt-2  px-4 sm:px-6 lg:px-8 items-center justify-center bg-white py-16">
      <h2 className="text-3xl text-black font-bold mb-4">Contact Us</h2>
      <p className="text-lg text-black mb-8">We would love to hear from you!</p>
      <div className="flex flex-col items-center justify-center bg-blue-500 p-8 rounded-md">
        <p className="text-white text-lg mb-4">John Doe</p>
        <p className="text-white text-lg mb-4">Email: johndoe@example.com</p>
        <p className="text-white text-lg">Phone: 123-456-7890</p>
      </div>
      <form className="flex  flex-col w-1/2 mt-8">
        <input
          type="text"
          placeholder="Your Name"
          className="mb-4 py-2 px-4 rounded-md bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:bg-gray-200"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="mb-4 py-2 px-4 rounded-md bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:bg-gray-200"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="mb-4 py-2 px-4 rounded-md bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:bg-gray-200"
        ></textarea>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>

      <Footer />
    </div>
  );
};

export default Contact;
