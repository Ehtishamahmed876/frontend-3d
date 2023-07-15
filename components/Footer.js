const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-white mt-auto">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500">© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
    );
  };
  
  export default Footer;