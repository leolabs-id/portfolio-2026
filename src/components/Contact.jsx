import { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Menghitung progress fokus elemen di layar (0 sampai 1)
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height / 2);
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logika Opacity dan Blur: Semakin fokus (tengah layar), semakin jelas
  // Jika menjauh dari fokus, akan memudar (opacity rendah) dan blur meningkat
  const opacityValue = scrollProgress < 0.3 ? scrollProgress * 3 : 1;
  const blurValue = (1 - opacityValue) * 10;
  const scaleValue = 0.95 + (opacityValue * 0.05);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-32 md:py-48 border-t border-gray-50 text-center space-y-10 px-6 transition-all duration-500 ease-out"
      style={{ 
        opacity: opacityValue,
        filter: `blur(${blurValue}px)`,
        transform: `scale(${scaleValue})`
      }}
    >
      <div className="space-y-4">
        <h2 className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-tosca">
          Contact
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-rich-black" style={{ fontFamily: 'var(--font-serif)' }}>
          Let's work together
        </h3>
      </div>

      <p className="text-muted-gray text-sm md:text-base max-w-sm md:max-w-md mx-auto leading-relaxed">
        If you'd like to discuss a project or collaborate on data-driven marketing, feel free to reach out.
      </p>

      <div className="pt-6">
        <a 
          href="mailto:leonard.raharja@gmail.com" 
          className="group px-8 py-4 bg-tosca text-rich-black text-[13px] md:text-[14px] font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-tosca/20 active:scale-95 inline-flex items-center gap-3"
        >
          <Mail size={18} className="group-hover:rotate-12 transition-transform" /> 
          Send an Email
        </a>
      </div>

      <div className="flex justify-center gap-8 pt-10 text-muted-gray">
        <a href="https://linkedin.com/in/leonard-ari-raharja" target="_blank" rel="noreferrer" className="hover:text-tosca transition-all hover:-translate-y-1" aria-label="LinkedIn">
          <Linkedin size={22} />
        </a>
        <a href="https://github.com/leolabs-id" target="_blank" rel="noreferrer" className="hover:text-tosca transition-all hover:-translate-y-1" aria-label="GitHub">
          <Github size={22} />
        </a>
        <a href="https://instagram.com/leonard.raharja" target="_blank" rel="noreferrer" className="hover:text-tosca transition-all hover:-translate-y-1" aria-label="Instagram">
          <Instagram size={22} />
        </a>
      </div>
    </section>
  );
};

export default Contact;