const ProjectCard = ({ project }) => {
  return (
    <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-8 border-b border-gray-100 last:border-0 hover:bg-gray-50/40 transition-all px-4 -mx-4 rounded-2xl">
      
      {/* Kolom Teks (7 Bagian) */}
      <div className="lg:col-span-7 space-y-4">
        {/* Kategori & Tag */}
        <div className="flex items-center gap-3">
          <span className="text-[9px] tracking-[0.2em] font-bold text-orange uppercase">
            {project.category}
          </span>
          <div className="h-[1px] w-6 bg-gray-200" />
          <div className="flex gap-2">
            {project.tags?.slice(0, 2).map(tag => (
              <span key={tag} className="text-[8px] text-muted-gray/60 uppercase tracking-tighter italic">#{tag}</span>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          {/* JUDUL */}
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block hover:text-tosca transition-colors">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-normal leading-tight text-rich-black tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              {project.title}
            </h3>
          </a>
          
          {/* INSIGHT */}
          <p className="text-tosca font-medium text-sm md:text-base italic leading-tight">
            {project.insight}
          </p>
        </div>

        {/* DESKRIPSI - Menghapus atribut title agar tidak double */}
        <div className="relative group/desc">
          <p 
            className="text-muted-gray text-xs md:text-sm leading-relaxed max-w-xl line-clamp-2 cursor-help"
            /* Atribut title dihapus dari sini */
          >
            {project.description}
          </p>
          
          {/* Custom Tooltip/Notes - Satu-satunya popup yang muncul */}
          <div className="absolute left-0 -top-2 transform -translate-y-full hidden group-hover/desc:block bg-rich-black text-white text-[10px] p-3 rounded-lg w-64 shadow-xl z-50 pointer-events-none opacity-0 group-hover/desc:opacity-100 transition-opacity duration-500 delay-500">
            <p className="leading-normal">{project.description}</p>
            <div className="absolute bottom-0 left-4 transform translate-y-full border-4 border-transparent border-t-rich-black"></div>
          </div>
        </div>

        {/* TOMBOL LINK */}
        <div className="pt-2">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-rich-black border-b border-orange hover:border-tosca transition-all pb-0.5"
          >
            Case Study
          </a>
        </div>
      </div>

      {/* Kolom Foto (5 Bagian) */}
      <div className="lg:col-span-5 relative">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl shadow-sm border border-gray-50">
          <div className="aspect-video bg-gray-50 relative overflow-hidden grayscale-[60%] group-hover:grayscale-0 transition-all duration-700">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;