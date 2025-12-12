import React from 'react';

// Sub-komponen untuk kartu Aktivitas (Career Talks, Extra Classes, dll.)
const ActivityCard = ({ color, title, description, iconSrc }) => (
  // p-6, rounded-3xl, shadow-md ringan
  <div className={`p-6 rounded-3xl shadow-md h-full ${color}`}>
    <div className="flex flex-col items-start mb-4">
      
      {/* Icon: Ditempatkan di pojok kiri atas, ukuran disesuaikan */}
      <img src={iconSrc} alt={`${title} Icon`} className="h-10 w-10 mb-6" />
      
      {/* Title: Di bawah ikon, font bold */}
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
    
    {/* Description: Teks deskripsi di dalam kartu */}
    <p className="text-gray-700 text-sm mt-2">{description}</p>
  </div>
);

// Sub-komponen untuk Sesi Pagi & Sore (Kartu Utama dengan Gradient)
const MainSessionCard = ({ title, time, description, gradientClasses, iconSrc }) => (
    // Menggunakan gradient horizontal
    <div className={`p-5 rounded-xl shadow-inner h-full text-gray-800 ${gradientClasses}`}>
        <h4 className="text-md font-semibold mb-3">{title}</h4>
        
        <div className="flex items-center space-x-2">
            
            {/* Ikon Jam dan Waktu */}
            <img src={iconSrc} alt="Clock Icon" className="h-5 w-5" />
            <p className="text-xl font-bold">{time}</p>
        </div>
        
        <p className="text-sm mt-3">{description}</p>
    </div>
);


const ScheduleSection = () => {
  
  // Data sesi utama (Sesi Pagi & Sore)
  const mainSessions = [
    { 
        title: 'Sesi Pagi', 
        time: '09.00 - 12.00 WIB', 
        description: 'Workshop, Career Talks, dan Extra Classes intensif', 
        gradientClasses: 'from-yellow-200 to-green-100 bg-gradient-to-r',
        iconSrc: 'src/assets/konten2.2.png', // Ikon jam kuning
    },
    { 
        title: 'Sesi Sore', 
        time: '16.00 - 19.00 WIB', 
        description: 'Project Work, Mentoring, dan Collaboration Session', 
        gradientClasses: 'from-blue-200 to-green-100 bg-gradient-to-r',
        iconSrc: 'src/assets/konten2.2.png', // Ikon jam biru
    },
  ];

  // Data aktivitas (Bagian Bawah - Actitivitas Grid)
  const activities = [
    {
      color: 'bg-yellow-100', // Warna Kuning
      title: 'Carrer Talks',
      description: 'Sesi sharing dari praktisi industri dan alumni sukses',
      iconSrc: 'src/assets/konten2.3.png', // Ikon Outline Kuning
    },
    {
      color: 'bg-green-100', // Warna Hijau Muda
      title: 'Extra Classes',
      description: 'Kelas tambahan skill development dan workshop teknis',
      iconSrc: 'src/assets/konten2.4.png', // Ikon Buku Hijau
    },
    {
      color: 'bg-blue-200', // Warna Biru Muda
      title: 'Project Work',
      description: 'Mengerjakan project nyata dengan bimbingan mentor',
      iconSrc: 'src/assets/konten2.5.png', // Ikon Coding Biru
    },
    {
      color: 'bg-pink-200', // Warna Pink
      title: 'Mentoring',
      description: 'Sesi konsultasi personal dengan mentor berpengalaman',
      iconSrc: 'src/assets/konten2.6.png', // Ikon Orang Pink
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* JUDUL UTAMA */}
        <h2 className="text-4xl font-bold text-blue-700 mb-2">Jadwal & Program Kegiatan</h2>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto text-base">
          Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan pengembangan skill Setiap Sabtu
        </p>

        {/* KARTU JADWAL UTAMA (Sesi Sabtu) */}
        {/* Dihilangkan border-b-8 dan div elemen biru di bawahnya */}
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl max-w-4xl mx-auto mb-16 relative">
            
            {/* Indikator Hari */}
            <div className="flex items-center justify-center text-blue-700 font-bold mb-8">
                {/* Placeholder for Calendar Icon */}
                <img src="src/assets/konten2.png" alt="Calendar Icon" className="h-6 w-6 mr-3" />
                <span className="text-lg">Setiap Sabtu</span>
            </div>

            {/* Grid Sesi Pagi dan Sore */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mainSessions.map((session, index) => (
                    <MainSessionCard key={index} {...session} />
                ))}
            </div>
        </div>
        
        {/* Sub-judul Aktivitas Grid */}
        <h3 className="text-xl font-bold text-gray-800 mb-8"></h3>

        {/* ACTIVITIES GRID (Bagian Bawah) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;