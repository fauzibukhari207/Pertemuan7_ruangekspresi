import React from "react";

const Footer = () => {
  const quickLinks = [
    ["Home", "#"],
    ["About", "#"],
    ["Program", "#"],
    ["Projects", "#"],
    ["Testimonials", "#"],
    ["Contact", "#"],
  ];

  const programs = [
    ["Career Talks", "#"],
    ["Extra Classes", "#"],
    ["Project Work", "#"],
    ["Mentoring", "#"],
  ];

  const contactInfo = [
    {
      type: "location",
      text: "Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55191",
      iconSrc: "src/assets/lokasi.png",
    },
    {
      type: "email",
      text: "ruang_ekspresi@webmail.uad.ac.id",
      iconSrc: "src/assets/footer3.png",
    },
    {
      type: "phone",
      text: "(0274) 511930",
      iconSrc: "src/assets/footer4.png",
    },
  ];

  return (
    <footer className="bg-[#3164A7] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">

          {/* KOLOM 1 – LOGO & DESKRIPSI */}
          <div className="space-y-5 max-w-sm">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="src/assets/footer.png"
                alt="Ruang Ekspresi Logo"
                className="h-12 w-12"
              />
              <div className="font-semibold text-lg leading-tight">
                <span className="block">ruang</span>
                <span className="block">ekspresi</span>
              </div>
            </div>

            {/* Deskripsi */}
            <p className="text-sm leading-relaxed text-blue-100">
              Wadah kreatif dan kompetitif untuk mahasiswa yang ingin
              mengembangkan potensi melalui ideation, creation, collaboration,
              dan guidance.
            </p>

            {/* Kontak */}
            <div className="space-y-4 pt-2">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-start text-blue-100">
                  <img
                    src={item.iconSrc}
                    alt={item.type}
                    className="w-7 h-7 mt-1 mr-3"
                  />
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* KOLOM 2 – QUICK LINKS */}
          <div>
            <h5 className="font-bold text-white mb-4 text-lg">Quick Links</h5>
            <ul className="space-y-2">
              {quickLinks.map(([text, href]) => (
                <li key={text}>
                  <a
                    href={href}
                    className="text-sm text-blue-100 hover:text-white transition"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3 – PROGRAMS */}
          <div>
            <h5 className="font-bold text-white mb-4 text-lg">Programs</h5>
            <ul className="space-y-2">
              {programs.map(([text, href]) => (
                <li key={text}>
                  <a
                    href={href}
                    className="text-sm text-blue-100 hover:text-white transition"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-blue-300 pt-4 pb-6 text-center text-sm text-blue-100">
          © 2025 Ruang Ekspresi | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
