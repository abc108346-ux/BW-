import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, LayoutDashboard, Search } from 'lucide-react';
import { GlareHover } from '../components/GlareHover';
import { useLocation } from 'react-router-dom';

const projects = [
  { name: 'Titanium POA', category: 'Academias', url: 'https://titaniumpoa.lovable.app/', type: 'Institucionais' },
  { name: 'Escola Livre de Artes da Cena', category: 'Educação / Artes', url: 'https://escolalivredeartesdacenars.com.br', type: 'Institucionais' },
  { name: 'Baita Brasa', category: 'Restaurantes', url: 'https://baita-brasa-display--bwwweb.replit.app', type: 'Restaurantes' },
  { name: 'Trigo Pizzaria', category: 'Restaurantes', url: 'https://trigopizzaria.netlify.app', type: 'Restaurantes' },
  { name: 'Terraço Bowling Bar', category: 'Entretenimento', url: 'https://terracobowlingbar.netlify.app', type: 'Outros' },
  { name: 'La Ragazza', category: 'Restaurantes', url: 'https://laragazzapoa.netlify.app', type: 'Restaurantes' },
  { name: 'Donna Luiza', category: 'Restaurantes', url: 'https://donna-luiza.vercel.app', type: 'Restaurantes' },
  { name: 'Pepperoni Restaurante', category: 'Restaurantes', url: 'https://professional-site-builder--begames52bww.replit.app', type: 'Restaurantes' },
];

const categories = ['Todos', 'Landing Pages', 'Institucionais', 'Restaurantes', 'Saúde', 'Outros'];

export const PortfolioPage = () => {
  const [filter, setFilter] = useState('Todos');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Portfólio | BW - Bernardo Web Design";
  }, [pathname]);

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#000]">
      {/* Hero Section */}
      <section className="relative px-6 pb-12 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] -z-10 opacity-30 mix-blend-screen pointer-events-none">
          <div className="w-[300px] h-[300px] bg-[#1565FF] rounded-full blur-[120px] mx-auto"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#1565FF] text-sm font-semibold mb-6"
        >
          <LayoutDashboard size={16} />
          Nosso Trabalho
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
        >
          Projetos que transformam ideias em <span className="text-[#1565FF]">presença digital.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60"
        >
          Confira alguns dos projetos desenvolvidos pela BW | Bernardo Web Design.
        </motion.p>
      </section>

      {/* Filters */}
      <section className="px-6 max-w-7xl mx-auto mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                filter === category 
                  ? 'bg-[#1565FF] text-white shadow-[0_0_15px_rgba(21,101,255,0.4)]' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 max-w-7xl mx-auto min-h-[500px]">
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <GlareHover className="h-full">
                  <div className="group h-full flex flex-col rounded-[inherit] bg-white/[0.02] border border-white/5 overflow-hidden transition-colors duration-300 hover:border-white/20">
                    {/* Preview Image */}
                    <div className="relative aspect-video overflow-hidden bg-[#0a0a0a]">
                      <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:text-[#1565FF]/20 transition-colors z-0">
                        <Search size={48} />
                      </div>
                      <img 
                        src={`https://image.thum.io/get/width/800/crop/800/${project.url}`}
                        alt={`Preview do site ${project.name}`}
                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 relative z-10"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to a styled placeholder if image fails to load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-20" />
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6 flex flex-col flex-grow relative z-30 -mt-10">
                      <div className="bg-black/60 backdrop-blur-md self-start px-3 py-1 rounded-full border border-white/10 text-xs font-semibold text-[#1565FF] mb-4">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                      <p className="text-sm text-white/60 mb-6 flex-grow">
                        Projeto de web design criado para o nicho de {project.category.toLowerCase()}, com layout responsivo e focado em conversão.
                      </p>
                      
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-[#1565FF] text-white px-6 py-3 rounded-xl font-semibold transition-all group-hover:shadow-[0_0_20px_rgba(21,101,255,0.2)]"
                      >
                        Ver projeto <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </GlareHover>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-white/50"
          >
            Nenhum projeto encontrado nesta categoria.
          </motion.div>
        )}
      </section>
    </div>
  );
};
