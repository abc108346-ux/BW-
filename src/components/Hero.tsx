import { motion } from 'motion/react';
import { Rocket, MonitorSmartphone, Code2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#1565FF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#1565FF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl relative"
        >
          {/* Background Image behind the main phrase */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] -z-10 opacity-40 mix-blend-screen pointer-events-none">
            <img 
              src="https://i.postimg.cc/XrD5y2pR/image.png" 
              alt="Fundo abstrato" 
              className="w-full h-full object-contain blur-[2px]" 
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#1565FF] text-sm font-medium mb-6 relative z-10">
            <Rocket size={16} />
            Agência de Tecnologia
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Seu negócio merece um <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565FF] to-blue-400">site profissional.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed max-w-xl">
            Criamos sites modernos, rápidos e responsivos para empresas que desejam vender mais, transmitir credibilidade e conquistar novos clientes todos os dias.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5551980507193"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#1565FF] hover:bg-[#0f4ecc] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(21,101,255,0.4)]"
            >
              🚀 Solicitar orçamento
            </a>
            <a 
              href="#portfolio"
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
            >
              💼 Ver projetos
            </a>
          </div>
        </motion.div>

        {/* Abstract Tech Illustration */}
        <div className="hidden lg:block relative h-[600px] w-full">
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[#1565FF]/20 to-transparent rounded-full border border-white/10 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_50px_rgba(21,101,255,0.2)]"
          >
            <MonitorSmartphone size={80} className="text-[#1565FF]" strokeWidth={1} />
          </motion.div>

          <motion.div 
            animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-24 left-10 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl"
          >
            <Code2 size={40} className="text-white/80" strokeWidth={1.5} />
          </motion.div>

          <motion.div 
            animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-32 right-10 p-5 bg-black/50 border border-white/10 rounded-2xl backdrop-blur-xl flex flex-col gap-3"
          >
            <div className="w-24 h-2 bg-white/20 rounded-full" />
            <div className="w-16 h-2 bg-[#1565FF]/80 rounded-full" />
            <div className="w-20 h-2 bg-white/10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
