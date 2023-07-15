import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-white text-black font-serif flex flex-col min-h-screen">
      <Navbar />
      <div className='flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center flex-col gap-2 lg:flex-row '>
        <div className="flex-1 py-12  ">
          <h1 className="text-5xl font-bold mb-8">About Us</h1>
          <p className="text-3xl">
            Our mission is to empower students with the tools they need to succeed academically, inspire their curiosity, and foster a lifelong love for learning. By leveraging the power of 3D models, we aim to transform education and provide students with an immersive and engaging learning experience.
          </p>
          <p className="text-3xl mt-4">
            3D models offers learning experience to students
            Provide rich and diverse library of 3D models to students
            Communication and collaboration among students
          </p>
        </div>
        <div className="md:w-1/2 bg-gray-100 p-4">
          <img src="/about.avif" alt="Login" className="object-cover w-full h-full" />
        </div>
      </div>



      <Footer />
    </div>
  );
};

export default About;
