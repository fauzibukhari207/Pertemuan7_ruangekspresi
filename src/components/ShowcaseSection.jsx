import React, { useState } from 'react';

// Sub-komponen untuk Kartu Proyek
const ProjectCard = ({ category, title, description, team, imageSrc }) => (
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
    <div className="lg:w-1/2 p-8">
      
      {/* Kategori Tag/Pill */}
      <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-800 mb-4">
        {category}
      </span>
      
      {/* Judul Proyek - ICON AVATAR DIHILANGKAN DARI SINI */}
      <div className="flex items-center space-x-3 mb-4">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      
      {/* Deskripsi */}
      <p className="text-gray-600 mb-6 text-base">{description}</p>
      
      {/* Tim Pembuat */}
      <h4 className="font-semibold mb-3">Tim Pembuat:</h4>
      <ul className="space-y-3 mb-8"> {/* Meningkatkan space-y-2 menjadi space-y-3 agar ada jarak antar baris */}
        {team.map((member, index) => (
          // REVISI: Mengubah text-sm di <li> menjadi text-base
          <li key={index} className="flex items-center text-base"> 
            {/* Gambar Profil */}
            <img 
              src="src/assets/konten3.png" 
              alt={member.name} 
              className="h-9 w-9 rounded-full mr-4" // Icon diperbesar sedikit (h-9 w-9) dan mr-4
            />
            
            {/* START REVISI: Perapian Nama dan Peran dengan Font Lebih Besar */}
            <div className="flex justify-between items-center w-full"> 
                {/* Nama (Font diperbesar dari font-medium text-gray-800 text-sm/base) */}
                <p className="font-bold text-gray-900 flex-shrink-0 w-32 md:w-40 text-left">
                    {member.name}
                </p>
                {/* Peran (Font diperbesar dari text-xs menjadi text-sm) */}
                <p className="text-sm text-gray-600 flex-shrink-0 text-right">
                    {member.role}
                </p>
            </div>
            {/* END REVISI */}
            
          </li>
        ))}
      </ul>

      {/* Tombol Demo */}
      <a
        href="#"
        className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-md"
      >
        {/* Placeholder for Demo Icon */}
        <img src="src/assets/Demo.png" alt="Live Demo Icon" className="h-5 w-5 mr-2" />
        Live Demo
      </a>
    </div>

    {/* BAGIAN GAMBAR */}
    <div className="lg:w-1/2 overflow-hidden flex-shrink-0 p-4">
      <img
        src={imageSrc}
        alt={`Proyek ${title}`}
        // Gunakan rounded-3xl pada gambar itu sendiri dan border pink
        className="w-full h-full object-cover rounded-3xl border-4 border-pink-400"
      />
    </div>
  </div>
);

const ShowcaseSection = () => {
  const projects = [
    // Data Proyek (tetap sama)
    {
      category: 'UI/UX Design',
      title: 'Creative Portfolio Platform',
      description: 'Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas',
      team: [
        { name: 'fauzibukhari', role: 'Backend Developer' }, 
        { name: 'fauzibukhari', role: 'Frontend Lead' }, 
        { name: 'fauzibukhari', role: 'DevOps' },
      ],
      imageSrc: 'src/assets/herosection.png', 
    },
    {
      category: 'Web Development',
      title: 'CMS E-Learning',
      description: 'Sistem manajemen konten untuk kursus online yang interaktif dan modern.',
      team: [
        { name: 'fauzibukhari', role: 'Backend Developer' },
        { name: 'fauzibukhari', role: 'Frontend Lead' },
        { name: 'fauzibukhari', role: 'DevOps' },
      ],
      imageSrc: 'src/assets/herosection.png', 
    },
    {
      category: 'Mobile Development',
      title: 'Smart Home App',
      description: 'Aplikasi mobile untuk mengontrol perangkat rumah pintar secara terpusat.',
      team: [
        { name: 'fauzibukhari', role: 'Mobile Developer' },
        { name: 'fauzibukhari', role: 'UI Designer' },
        { name: 'fauzibukhari', role: 'Tester' },
      ],
      imageSrc: 'src/assets/herosection.png', 
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* JUDUL UTAMA */}
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Showcase <span className="text-blue-700">Student Projects</span>
        </h2>
        <p className="text-gray-600 mb-16 max-w-3xl mx-auto text-base">
          Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
        </p>


        <div className="relative">
          
          {/* CONTAINER DENGAN ANIMASI TRANSISI */}
          <div 
            key={activeIndex} 
            className="transition-opacity duration-700 ease-in-out" 
            style={{ opacity: 1 }}
          >
            <ProjectCard {...projects[activeIndex]} />
          </div>

          {/* SLIDER CONTROLS (Desktop) */}
          <button
            onClick={prevProject}
            className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-blue-500 w-14 h-14 rounded-full shadow-lg hover:bg-blue-800 transition hidden lg:flex items-center justify-center"
            aria-label="Previous Project"
          >
            <img src="src/assets/gridicons_play.png" alt="Previous" className="h-27 w-27" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-blue-500 w-14 h-14 rounded-full shadow-lg hover:bg-blue-800 transition hidden lg:flex items-center justify-center"
            aria-label="Next Project"
          >
            <img src="src/assets/kanan.png" alt="Next" className="h-27 w-27" />
          </button> 

          {/* MOBILE CONTROLS (Dots) */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition ${
                  activeIndex === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;