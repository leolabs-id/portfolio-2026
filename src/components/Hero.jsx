import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Mengambil posisi scroll untuk animasi dinamis
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Perhitungan intensitas memudar (opacity) dan mengecil (scale)
  const fadeOpacity = Math.max(0, 1 - scrollY / 500);
  const imageScale = Math.max(0.9, 1 - scrollY / 2000);

  return (
    <section 
      id="home" 
      className="relative flex flex-col md:flex-row items-center justify-center min-h-[80vh] py-12 md:py-20 gap-10 border-b border-gray-50 overflow-hidden"
      style={{ opacity: fadeOpacity }} // Hero memudar saat scroll ke bawah
    >
      
      {/* Bagian Teks */}
      <div className="w-full md:w-7/12 space-y-8 z-10 order-2 md:order-1 text-center md:text-left">
        <div className="space-y-3">
          <span className="text-tosca font-semibold tracking-[0.2em] text-[10px] md:text-[11px] uppercase block transition-all duration-500">
            Marketing Data Analyst
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-normal leading-tight text-rich-black md:whitespace-nowrap" 
              style={{ fontFamily: 'var(--font-serif)' }}>
            Leonard Ari Raharja<span className="text-orange">.</span>
          </h1>
        </div>

        <p className="text-sm md:text-base lg:text-lg text-muted-gray leading-relaxed max-w-lg mx-auto md:mx-0">
          Leveraging data analytics to optimize marketing performance. Transforming raw datasets into actionable insights through the synergy of analytical and strategic visual communication to drive business growth.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
          <a 
            href="#works" 
            className="px-8 py-3 bg-rich-black text-white text-[13px] font-medium rounded-full hover:bg-tosca hover:text-rich-black transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-sm"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-gray-200 text-[13px] font-medium rounded-full hover:border-rich-black transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Bagian Foto dengan Animasi Mengecil */}
      <div className="w-full md:w-5/12 flex justify-center md:justify-end items-end order-1 md:order-2 self-stretch">
        <div 
          className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md transition-transform duration-300 ease-out"
          style={{ transform: `scale(${imageScale})` }} // Mengecil saat scroll
        >
          <div className="relative overflow-hidden" 
               style={{ 
                 maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' 
               }}>
            <img 
              src="testa.png" 
              alt="Leonard Ari Raharja" 
              className="w-full h-auto object-cover object-top block" 
            />
          </div>
          
          <div className="absolute -top-5 -right-5 w-24 h-24 bg-tosca-pale rounded-full -z-10 blur-3xl opacity-40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;