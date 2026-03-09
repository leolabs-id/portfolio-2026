import { useState, useEffect, useCallback, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { ChevronUp, ChevronDown } from 'lucide-react';

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('down');

  // Mengelompokkan project menjadi pasangan (2 project per slide)
  const pairs = useMemo(() => {
    const result = [];
    for (let i = 0; i < projects.length; i += 2) {
      result.push(projects.slice(i, i + 2));
    }
    return result;
  }, []);

  // Fungsi navigasi utama yang dibungkus useCallback agar aman digunakan di useEffect
  const handlePageChange = useCallback((newIndex, moveDirection) => {
    if (isTransitioning) return;
    setDirection(moveDirection);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 400); 
  }, [isTransitioning]);

  const nextPair = useCallback(() => {
    const nextIndex = (currentIndex + 1) % pairs.length;
    handlePageChange(nextIndex, 'down');
  }, [currentIndex, pairs.length, handlePageChange]);

  const prevPair = useCallback(() => {
    const prevIndex = (currentIndex - 1 + pairs.length) % pairs.length;
    handlePageChange(prevIndex, 'up');
  }, [currentIndex, pairs.length, handlePageChange]);

  // Navigasi Keyboard tanpa peringatan dependensi
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') prevPair();
      if (e.key === 'ArrowDown') nextPair();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPair, prevPair]);

  return (
    <section id="works" className="py-20 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-rich-black leading-tight" 
            style={{ fontFamily: 'var(--font-serif)' }}>
          Selected Works<span className="text-orange">.</span>
        </h2>
        <p className="text-muted-gray max-w-xs text-sm leading-relaxed">
          A curated list of projects focusing on data-driven marketing strategies and technical analytics.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">
        {/* Tombol Navigasi Atas */}
        <button 
          onClick={prevPair}
          disabled={isTransitioning}
          className="group p-2.5 border border-gray-100 rounded-full hover:bg-rich-black hover:text-white transition-all active:scale-90 disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Previous projects"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Project Display Area */}
        <div className="w-full relative min-h-[520px] flex flex-col justify-center items-center overflow-hidden">
          <div 
            className={`flex flex-col gap-8 transition-all duration-500 ease-in-out transform w-full ${
              isTransitioning 
                ? `opacity-0 ${direction === 'down' ? '-translate-y-16' : 'translate-y-16'}` 
                : 'opacity-100 translate-y-0'
            }`}
          >
            {pairs[currentIndex]?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Tombol Navigasi Bawah */}
        <button 
          onClick={nextPair}
          disabled={isTransitioning}
          className="group p-2.5 border border-gray-100 rounded-full hover:bg-rich-black hover:text-white transition-all active:scale-90 disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Next projects"
        >
          <ChevronDown size={24} className="group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
      
      {/* Pagination Indicators */}
      <div className="mt-12 flex gap-3 justify-center">
        {pairs.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index, index > currentIndex ? 'down' : 'up')}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              currentIndex === index ? 'w-8 bg-orange' : 'w-2 bg-gray-200 hover:bg-gray-300'
            }`}
            aria-label={`Go to project page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;