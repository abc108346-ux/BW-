import { motion } from 'motion/react';
import { ArrowRight, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlareHover } from './GlareHover';

export const Portfolio = () => {
  return (
    <section className="py-12 md:py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GlareHover className="w-full">
          <div className="relative overflow-hidden bg-gradient-to-br from-white/[0.02] to-white/[0.05] border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Efeito de Brilho de Fundo */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1565FF]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" />

            <div className="flex-1 relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm font-bold tracking-wide uppercase mb-6 border border-white/10">
                <LayoutDashboard size={16} />
                Projetos reais • Design personalizado • Experiências profissionais
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-white">
                Veja nossos <span className="text-white border-b-2 border-[#1565FF]">projetos</span>
              </h2>
              <p className="text-lg text-white/60 max-w-xl mx-auto md:mx-0">
                Conheça alguns dos sites que já criamos para diferentes tipos de negócios.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-200 px-8 py-5 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                Ver portfólio <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </GlareHover>
      </motion.div>
    </section>
  );
};
