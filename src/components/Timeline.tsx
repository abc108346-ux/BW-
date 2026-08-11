import { motion } from 'motion/react';

const steps = [
  { title: 'Contato', desc: 'Você entra em contato pelo WhatsApp e nos conta sua ideia.' },
  { title: 'Levantamento das necessidades', desc: 'Entendemos seu negócio e definimos as melhores soluções.' },
  { title: 'Desenvolvimento', desc: 'Criamos o design e programamos o site.' },
  { title: 'Aprovação', desc: 'Apresentamos o projeto para sua avaliação e ajustes.' },
  { title: 'Publicação', desc: 'Colocamos seu site no ar com domínio e hospedagem.' },
  { title: 'Suporte', desc: 'Acompanhamento e suporte técnico pós-entrega.' },
];

export const Timeline = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Como Funciona</h2>
          <div className="w-20 h-1 bg-[#1565FF] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Um processo simples, transparente e focado em entregar o melhor resultado no menor tempo possível.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-12 w-full`}>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#1565FF]/50 transition-colors">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#1565FF] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
                
                {/* Number node */}
                <div className="absolute left-[20px] md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-10 h-10 rounded-full bg-[#000] border-2 border-[#1565FF] flex items-center justify-center text-[#1565FF] font-bold shadow-[0_0_15px_rgba(21,101,255,0.4)] z-10">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
