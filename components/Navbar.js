import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNav = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex">
            {/* Logo and Image */}
            <div className="flex-shrink-0 flex gap-2 items-center">
              <img className="h-16 w-auto" src="/logo3d2.jpeg" alt="Logo" />
              <h2 className="text-black text-xl font-serif">BookTo3D</h2>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link href="/" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-800">Home</a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-800">About</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </Link>
              <Link href="/login" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-800">Login</a>
              </Link>
              <Link href="/signup" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-800">Signup</a>
              </Link>
            </div>
          </div>
          <div className="sm:hidden">
            <button
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Toggle navigation"
              onClick={toggleNav}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {showNavLinks && (
          <div className="px-2 pt-2 pb-4 space-y-2 sm:hidden">
            <Link href="/" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-800 block">Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-800 block">About</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-800 block">Contact Us</a>
            </Link>
            <Link href="/login" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-800">Login</a>
              </Link>
              <Link href="/signup" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-800">Signup</a>
              </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
