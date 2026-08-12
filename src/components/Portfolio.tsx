import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { GlareHover } from './GlareHover';

const projects = [
  { name: 'Titanium POA', category: 'Academias / Negócios', url: 'https://titaniumpoa.lovable.app/' },
  { name: 'Fitness Nation', category: 'Academias', url: 'https://fitness-nation-landing--bernardog311012.replit.app' },
  { name: 'Ayzu Beauty & Care', category: 'Salões de Beleza', url: 'https://ayzubeautyandcare.lovable.app' },
  { name: 'Baita Brasa', category: 'Restaurantes', url: 'https://baita-brasa-display--bwwweb.replit.app' },
  { name: 'Trigo Pizzaria', category: 'Restaurantes', url: 'https://trigopizzaria.netlify.app' },
  { name: 'Terraço Bowling Bar', category: 'Entretenimento', url: 'https://terracobowlingbar.netlify.app' },
  { name: 'La Ragazza', category: 'Restaurantes', url: 'https://laragazzapoa.netlify.app' },
  { name: 'Donna Luiza', category: 'Restaurantes', url: 'https://donna-luiza.vercel.app' },
  { name: 'Pepperoni Restaurante', category: 'Restaurantes', url: 'https://professional-site-builder--begames52bww.replit.app' },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Nosso Portfólio</h2>
          <div className="w-20 h-1 bg-[#1565FF] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Confira alguns dos projetos entregues pela nossa agência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlareHover className="h-full">
                <div className="group h-full relative overflow-hidden rounded-[inherit] bg-white/5 border border-white/10 aspect-[4/3] flex flex-col items-center justify-center p-8 text-center hover:bg-white/10 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1565FF]/5 to-transparent z-0 group-hover:from-[#1565FF]/10 transition-colors duration-500" />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="text-[#1565FF] text-xs font-bold uppercase tracking-wider mb-3 group-hover:scale-105 transition-transform duration-300">
                      {project.category}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">{project.name}</h3>
                    
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#1565FF] hover:bg-[#0f4ecc] text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(21,101,255,0.3)]"
                    >
                      Acessar Projeto <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
