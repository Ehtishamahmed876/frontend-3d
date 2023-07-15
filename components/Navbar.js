import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            {/* Logo and Image */}
            <div className="flex-shrink-0 flex gap-2 items-center">
              <img className="h-16 w-auto" src="/logo3d2.jpeg" alt="Logo" />
              <h2 className='text-black text-xl font-serif  '>BookTo3D</h2>
            </div>
        
          </div>
          <div className="flex space-x-4 text-lg">
            {/* Navigation Links */}
            <Link href="/">
              <div className="text-gray-600 hover:text-gray-800">Home</div>
            </Link>
            <Link href="/about">
              <div className="text-gray-600 hover:text-gray-800">About</div>
            </Link>
            <Link href="/contact">
              <div className="text-gray-600 hover:text-gray-800">Contact Us</div>
            </Link>
            <Link href="/login">
              <div className="text-gray-600 hover:text-gray-800">Login</div>
            </Link>
            <Link href="/signup">
              <div className="text-gray-600 hover:text-gray-800">Sign Up</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
