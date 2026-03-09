import { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Menghitung progress elemen relatif terhadap tengah layar (0 sampai 1)
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height / 1.5);
      
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logika Fokus: Puncak kejelasan (1) ada di tengah, memudar (0) di ujung atas/bawah
  const focusValue = scrollProgress < 0.2 
    ? scrollProgress * 5 
    : scrollProgress > 0.8 
      ? (1 - scrollProgress) * 5 
      : 1;

  // Efek transisi gabungan
  const blurValue = (1 - focusValue) * 8; // Blur hingga 8px saat tidak fokus
  const opacityValue = focusValue;
  const scaleValue = 0.97 + (focusValue * 0.03); // Sedikit membesar saat fokus
  const translateY = (1 - focusValue) * 40; // Bergeser 40px

  return (
  <section 
    id="about" 
    ref={sectionRef}
    className="py-20 sm:py-28 md:py-36 lg:py-48 bg-tosca-pale/60 
               -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 
               px-4 sm:px-6 md:px-8 lg:px-24 
               overflow-hidden transition-all duration-300 ease-out"
    style={{ 
      opacity: opacityValue,
      filter: `blur(${blurValue}px)`,
      transform: `scale(${scaleValue}) translateY(${translateY}px)`
    }}
  >
    <div className="max-w-5xl mx-auto">
      
      {/* Header Section */}
      <div className="mb-12 md:mb-16 lg:mb-20">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl font-normal text-rich-black tracking-tight" 
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          About Me<span className="text-orange">.</span>
        </h2>
        <div 
          className="h-[1px] bg-orange mt-4 md:mt-6 transition-all duration-500" 
          style={{ width: `${Math.min(scrollProgress * 200, 100)}px` }}
        />
      </div>

      {/* Grid Layout - Dioptimalkan untuk semua ukuran */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24">
        
        {/* Narasi Utama - Full width di tablet, 7 kolom di desktop */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 lg:space-y-10">
          <p className="text-xl sm:text-2xl md:text-3xl leading-snug font-normal text-rich-black" 
             style={{ fontFamily: 'var(--font-serif)' }}>
            Dedicated to optimizing marketing performance through data-driven insights.
          </p>
          
          <div className="space-y-6 md:space-y-8 text-muted-gray text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              Bridging technical analytics with high-impact visual communication to transform complex datasets into clear, actionable business strategies.
            </p>
            <p>
              Experience encompasses planning digital campaigns, analyzing performance metrics, and developing visual assets that effectively communicate brand narratives.
            </p>
            
            <div className="pt-6 md:pt-8 border-l-2 border-gray-200 pl-6 md:pl-8">
              <p className="italic text-rich-black/60 font-light text-sm sm:text-base md:text-lg leading-relaxed">
                "Decisions backed by data, presented through visual clarity, ensuring insights are actionable for every stakeholder."
              </p>
            </div>
          </div>
        </div>

        {/* Skill Grid - Responsif di semua ukuran */}
        <div className="lg:col-span-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {[
              { title: "Analytics", skills: ["Looker Studio", "SQL & Python", "Google Spreadsheets", "Data Interpretation"] },
              { title: "Marketing", skills: ["Social Media Strategy", "Advertising (Ads)", "Content Strategy", "Campaign Analysis"] },
              { title: "Web Development", skills: ["HTML / CSS", "JavaScript", "UI/UX Design", "Responsive Design"] },
              { title: "Visual Strategy", skills: ["Brand Identity", "Visual Storytelling", "Adobe Creative Suite"] }
            ].map((cat, i) => (
              <div key={i} className="space-y-3 md:space-y-4 lg:space-y-5 group">
                <h4 className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-rich-black border-b border-gray-200 pb-2 transition-colors group-hover:border-orange">
                  {cat.title}
                </h4>
                <ul className="text-[12px] sm:text-[13px] md:text-[14px] text-muted-gray space-y-2 md:space-y-3">
                  {cat.skills.map((skill, si) => (
                    <li key={si}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default About;