import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Mempertahankan shadow-md, sticky, dan z-50
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* LOGO SECTION - Disesuaikan agar mirip desain */}
          <div className="flex items-center flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              {/* Placeholder untuk Ikon/Logo Utama (Kotak Biru) */}
              <img 
                src="src/assets/Logonav.png" 
                alt="Ruang Ekspresi Logo" 
                className="h-8 w-8" 
              />
              <div className="text-blue-700 font-semibold text-base leading-none">
                <span className="block text-sm">ruang</span>
                <span className="block text-sm">ekspresi</span>
              </div>
            </a>
          </div>

          {/* NAVIGASI DESKTOP */}
          <div className="hidden md:ml-6 md:flex md:space-x-8 items-center">
            {['Home', 'About', 'Program', 'Project', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                // Gaya teks navigasi dibuat lebih kecil dan rapi
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-normal transition" 
              >
                {item}
              </a>
            ))}
            {/* Tombol LOGIN dihapus karena tidak terlihat di desain yang baru */}
          </div>
          
          {/* MOBILE MENU BUTTON */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {/* Placeholder for menu icon */}
              <img src="placeholder-menu-icon.png" alt="Menu Icon" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {['Home', 'About', 'Program', 'Project', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              >
                {item}
              </a>
            ))}
            {/* Tombol LOGIN Mobile juga dihapus */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;