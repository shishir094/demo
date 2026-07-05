import { FaFacebook, FaWhatsapp, FaTiktok, FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white pt-8">
      {/* 1. TWO-SECTION LAYOUT CONTAINER */}
      {/* md:flex-row splits them side-by-side on computers; flex-col stacks them on mobile */}
      <div className="mx-auto flex max-w-2xl flex-col justify-between gap-8 px-6 pb-6 md:flex-row md:items-start">
        
        {/* SECTION A: CONTACT US */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">
            Contact Us
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaPhone className="text-blue-600" />
              <a href="tel:+977123456789" className="hover:underline">+977-9766925069</a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              <a href="mailto:info@safagunj.com.np" className="hover:underline">info@safagunj.com.np</a>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-blue-600" />
              <span>Nepalgunj, Nepal</span>
            </div>
          </div>
        </div>

        {/* SECTION B: SOCIAL MEDIA */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">
            Follow Us
          </h3>
          <p className="text-xs text-gray-500">
            Stay updated with our latest services and cleaning routines.
          </p>
          {/* Flex row for social media link anchors */}
          <div className="flex gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full bg-gray-100 p-2.5 text-gray-600 transition-all hover:bg-blue-50 hover:text-blue-600"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a 
              href="https://wa.me/9779766925069" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full bg-gray-100 p-2.5 text-gray-600 transition-all hover:bg-green-50 hover:text-green-500"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full bg-gray-100 p-2.5 text-gray-600 transition-all hover:bg-black hover:text-white"
            >
              <FaTiktok className="h-5 w-5" />
            </a>
          </div>
        </div>

      </div>

      {/* 2. COPYRIGHT BAR SECTION */}
      <div className="border-t border-gray-100 bg-gray-50 py-4 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} SafaGunj. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer