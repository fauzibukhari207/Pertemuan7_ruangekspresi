import React from 'react';

// Sub-komponen untuk kartu Pilar (Disesuaikan gayanya)
const PillarCard = ({ color, title, description, iconSrc }) => (
  // Revisi: rounded-3xl/4xl, p-8, shadow lebih tipis/custom
  <div className={`p-8 rounded-3xl shadow-md h-full ${color} flex flex-col justify-between`}>
    <div className="flex flex-col items-center text-center mb-6"> 
      
      {/* Icon: Ditempatkan di tengah, ukuran lebih besar (h-12 w-12) */}
      <img 
        src={iconSrc} 
        alt={`${title} Icon`} 
        className="h-12 w-12 mb-4" 
      />
      
      {/* Title: Ukuran dan tebal font disesuaikan */}
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      
      {/* Description: Teks deskripsi di dalam kartu */}
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  </div>
);

const PillarsSection = () => {
  const pillars = [
    {
      // Warna Latar Belakang Disesuaikan: Yellow (bg-yellow-100)
      color: 'bg-yellow-100',
      title: 'Ideation',
      description: 'Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.',
      iconSrc: 'src/assets/konten1.png',
    },
    {
      // Warna Latar Belakang Disesuaikan: Green (bg-green-100)
      color: 'bg-green-100',
      title: 'Creation',
      description: 'Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.',
      iconSrc: 'src/assets/konten1.2.png',
    },
    {
      // Warna Latar Belakang Disesuaikan: Blue (bg-blue-200)
      color: 'bg-blue-200',
      title: 'Collaboration',
      description: 'Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.',
      iconSrc: 'src/assets/collab.png',
    },
    {
      // Warna Latar Belakang Disesuaikan: Pink (bg-pink-200)
      color: 'bg-pink-200',
      title: 'Guidance & Support',
      description: 'Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.',
      iconSrc: 'src/assets/konten1.3.png',
    },
  ];

  return (
    <section className="py-20 bg-white"> {/* Tambah padding atas/bawah */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* JUDUL UTAMA */}
        {/* Revisi: Font lebih besar (text-4xl), warna biru di akhir */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Empat Pilar <span className="text-blue-700">Ruang Ekspresi</span>
        </h2>
        
        {/* DESKRIPSI UTAMA */}
        <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
          komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik 
        </p>

        {/* GRID KARTU */}
        {/* Revisi: Tetap responsif, jarak gap lebih besar (gap-8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;