import React from 'react';

const HeroSection = () => {

  // Data untuk Pill/Chip di bawah judul
  const pills = [
    { name: 'Ideation', bgColor: 'bg-yellow-100', hoverColor: 'hover:bg-yellow-200' },
    { name: 'Creation', bgColor: 'bg-green-100', hoverColor: 'hover:bg-green-200' },
    { name: 'Collaboration', bgColor: 'bg-blue-200', hoverColor: 'hover:bg-blue-300' },
    { name: 'Guidance & Support', bgColor: 'bg-pink-100', hoverColor: 'hover:bg-pink-200' },
  ];

  return (
    <header className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* KIRI: Judul dan Pills */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            {/* Revisi: Ukuran font lebih besar, dan teks RUANG EKSPRESI biasanya 
              berwarna biru (text-blue-600) atau menggunakan font kustom. 
              Kita gunakan text-gray-900 dan font-extrabold untuk kesan tebal. 
            */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
              <span className="text-blue-700">RUANG EKSPRESI</span> : Wadah kreatif & Kompetitif Mahasiswa
            </h1>
            
            {/* Paragraph tidak ada di desain, jadi kita hapus untuk kemiripan: */}
            {/* <p className="text-lg text-gray-600 mb-8">
              Tempat berkumpulnya mahasiswa untuk mengasah bakat, membangun kolaborasi, dan mendapatkan dukungan profesional.
            </p> */}
            
            {/* Pill Navigation/Tags */}
            <div className="flex space-x-3 flex-wrap gap-3 mt-10">
              {pills.map((pill) => (
                <span
                  key={pill.name}
                  className={`px-4 py-2 text-sm font-medium rounded-full cursor-pointer 
                              ${pill.bgColor} text-gray-800 ${pill.hoverColor} transition`}
                >
                  {pill.name}
                </span>
              ))}
            </div>
          </div>
          
          {/* KANAN: Gambar */}
          <div className="md:w-1/2 flex justify-center">
            {/* Placeholder for Hero Image */}
            <img
              src="src/assets/herosection.png"
              alt="Mahasiswa berdiskusi dalam kelompok"
              className="rounded-xl shadow-2xl w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;