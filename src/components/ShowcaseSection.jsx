import React, { useState } from 'react';

// IMPORT SEMUA GAMBAR DI SINI
import avatar from '../assets/konten3.png';
import demoIcon from '../assets/Demo.png';
import heroImg from '../assets/herosection.png';
import arrowLeft from '../assets/gridicons_play.png';
import arrowRight from '../assets/kanan.png';

// Sub-komponen untuk Kartu Proyek
const ProjectCard = ({ category, title, description, team, imageSrc }) => (
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
    <div className="lg:w-1/2 p-8">
      
      <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-800 mb-4">
        {category}
      </span>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

      <p className="text-gray-600 mb-6 text-base">{description}</p>

      <h4 className="font-semibold mb-3">Tim Pembuat:</h4>
      <ul className="space-y-3 mb-8">
        {team.map((member, index) => (
          <li key={index} className="flex items-center text-base">
            <img 
              src={avatar}
              alt={member.name}
              className="h-9 w-9 rounded-full mr-4"
            />

            <div className="flex justify-between items-center w-full">
              <p className="font-bold text-gray-900 w-32 md:w-40 text-left">
                {member.name}
              </p>
              <p className="text-sm text-gray-600 text-right">{member.role}</p>
            </div>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-md"
      >
        <img src={demoIcon} alt="Live Demo Icon" className="h-5 w-5 mr-2" />
        Live Demo
      </a>
    </div>

    <div className="lg:w-1/2 overflow-hidden flex-shrink-0 p-4">
      <img
        src={imageSrc}
        alt={`Proyek ${title}`}
        className="w-full h-full object-cover rounded-3xl border-4 border-pink-400"
      />
    </div>
  </div>
);

const ShowcaseSection = () => {
  const projects = [
    {
      category: 'UI/UX Design',
      title: 'Creative Portfolio Platform',
      description: 'Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas',
      team: [
        { name: 'fauzibukhari', role: 'Backend Developer' },
        { name: 'fauzibukhari', role: 'Frontend Lead' },
        { name: 'fauzibukhari', role: 'DevOps' },
      ],
      imageSrc: heroImg,
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
      imageSrc: heroImg,
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
      imageSrc: heroImg,
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
        
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Showcase <span className="text-blue-700">Student Projects</span>
        </h2>
        <p className="text-gray-600 mb-16 max-w-3xl mx-auto text-base">
          Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
        </p>

        <div className="relative">
          <ProjectCard {...projects[activeIndex]} />

          {/* SLIDER BUTTONS */}
          <button
            onClick={prevProject}
            className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-blue-500 w-14 h-14 rounded-full shadow-lg hover:bg-blue-800 transition hidden lg:flex items-center justify-center"
          >
            <img src={arrowLeft} alt="Previous" className="h-7 w-7" />
          </button>

          <button
            onClick={nextProject}
            className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-blue-500 w-14 h-14 rounded-full shadow-lg hover:bg-blue-800 transition hidden lg:flex items-center justify-center"
          >
            <img src={arrowRight} alt="Next" className="h-7 w-7" />
          </button> 

          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition ${
                  activeIndex === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
