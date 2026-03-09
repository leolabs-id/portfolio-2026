import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Bagian Identitas */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-rich-black tracking-tight">
                Leonard Ari Raharja<span className="text-orange">.</span>
              </h2>
              <p className="text-[13px] text-muted-gray font-medium">
                Marketing Data Analyst
              </p>
              <p className="text-[12px] text-muted-gray/70 italic">
                Based in Jakarta, Indonesia
              </p>
            </div>
            <p className="text-[11px] text-muted-gray uppercase tracking-widest">
              Analyst — Marketing — Development — Design
            </p>
          </div>

          {/* Bagian Kontak (Hanya Logo) */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex gap-5 text-muted-gray">
              <a href="https://github.com/leolabs-id" target="_blank" rel="noreferrer" className="hover:text-tosca transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/leonard-ari-raharja" target="_blank" rel="noreferrer" className="hover:text-tosca transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:leonard.raharja@gmail.com" className="hover:text-tosca transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-tosca transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            
            <p className="text-[11px] text-muted-gray/60 font-medium">
              © {new Date().getFullYear()} Leonard Ari Raharja. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;