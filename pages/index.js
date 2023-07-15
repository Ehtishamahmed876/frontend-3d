import TextImageSection from '@/components/Section1';
import Navbar from '../components/Navbar';
import TextImageSection2 from '@/components/Section2';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className='bg-white'>
      <Navbar />
  
      {/* Rest of your content */}
      <TextImageSection
        title="Introduction"
        text="At our core, we are passionate about harnessing the power of 3D technology to revolutionize the way people interact with digital content. We believe that 3D brings a new level of realism, interactivity, and depth to online experiences, opening up a world of possibilities for various industries and applications."
        imageUrl="/section1.webp"
      />

<TextImageSection2
        title="Our Goal"
        text="We are committed to staying at the forefront of technological advancements, continuously improving our platform, and expanding the possibilities of 3D experiences. Join us on this exciting journey as we push the boundaries of what's possible in the digital realm."
        imageUrl="/section2.webp"
      />
    <Footer />

    </div>

  );
};

export default Home;
