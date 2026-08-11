import { motion } from 'motion/react';
import { Target } from 'lucide-react';

export const About = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[2rem] p-8 md:p-16 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1565FF]/10 rounded-full blur-[80px]" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Quem Somos</h2>
              <div className="w-20 h-1 bg-[#1565FF] rounded-full mb-8"></div>
              
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                A <strong className="text-white">BW | Bernardo Web Design</strong> é especializada na criação de sites modernos e personalizados para empresas de diversos segmentos.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Nosso objetivo é desenvolver projetos rápidos, bonitos, seguros e focados em resultados, oferecendo uma experiência profissional que fortalece a presença digital do cliente e aumenta suas oportunidades de negócio.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm aspect-square bg-gradient-to-tr from-[#1565FF]/20 to-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-center items-center text-center gap-6 shadow-2xl">
                <Target size={64} className="text-[#1565FF]" />
                <h3 className="text-2xl font-bold">Foco em Resultados</h3>
                <p className="text-white/60 text-sm">
                  Design estratégico para converter visitantes em clientes reais.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
