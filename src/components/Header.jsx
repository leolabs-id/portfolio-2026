import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Mengubah background menjadi putih dengan sedikit transparansi dan border halus
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Menggunakan font Serif agar senada dengan Hero */}
          <a href="#" className="hover:opacity-80 transition-opacity">
            <div className="flex items-center">
              <span 
                className="text-xl font-bold tracking-tight text-rich-black"
              >
                Leonard<span className="text-orange">.</span>
              </span>
            </div>
          </a>

          {/* Desktop Menu - Menggunakan warna Tosca untuk hover dan abu-abu gelap untuk teks */}
          <nav className="hidden md:flex space-x-10 text-[13px] font-medium text-muted-gray">
            <a href="#about" className="hover:text-tosca transition-colors">About</a>
            <a href="#works" className="hover:text-tosca transition-colors">Works</a>
            <a href="#contact" className="hover:text-tosca transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button - Warna disesuaikan ke Rich Black */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-rich-black">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Background disesuaikan ke putih */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-6 space-y-4 shadow-sm">
          <a href="#about" className="block text-sm font-medium text-muted-gray hover:text-tosca" onClick={() => setIsOpen(false)}>About</a>
          <a href="#works" className="block text-sm font-medium text-muted-gray hover:text-tosca" onClick={() => setIsOpen(false)}>Works</a>
          <a href="#contact" className="block text-sm font-medium text-muted-gray hover:text-tosca" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;