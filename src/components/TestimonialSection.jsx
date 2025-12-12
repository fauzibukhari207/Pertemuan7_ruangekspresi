import React from 'react';

// Sub-komponen untuk Kartu Testimoni
const TestimonialCard = ({ name, role, quote, avatarSrc }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg h-full border border-gray-100 flex flex-col">
    <div className="flex items-center mb-4">
      {/* Placeholder for Avatar */}
      <img
        src={avatarSrc}
        alt={`Avatar ${name}`}
        className="h-12 w-12 rounded-full mr-3"
      />
      <div>
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-sm text-blue-600">{role}</p>
      </div>
    </div>
    <p className="text-gray-700 italic flex-grow">
      "{quote}"
    </p>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'fauzibukhari',
      role: 'Mahasiswa, Frontend Developer',
      quote: 'Dulu saya hanya fokus di disiplin ilmu saya. Di sini, saya belajar banyak hal dari teman-teman dan jurusan lain.',
      avatarSrc: 'src/assets/konten3.png',
    },
    {
      name: 'fauzibukhari',
      role: 'Mahasiswa, UX Designer',
      quote: 'Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dan jurusan lain.',
      avatarSrc: 'src/assets/konten3.png',
    },
    {
      name: 'fauzibukhari',
      role: 'Mahasiswa, Mobile Developer',
      quote: 'Ruang Ekspresi membantu saya mewujudkan ide-ide gila saya. Saya belajar banyak hal dari teman-teman dan jurusan lain.',
      avatarSrc: 'src/assets/konten3.png',
    },
  ];
  
  // Mengulang data agar sesuai dengan layout 6 kartu di desain
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center"></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repeatedTestimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              {...testimonial} 
              role={index % 2 === 0 ? 'Mahasiswa, Frontend Developer' : 'Mahasiswa, UX Designer'} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;