import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1565FF] to-blue-600 rounded-3xl p-10 md:p-20 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Abstract circles */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
              Vamos criar o site da sua empresa?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Solicite um orçamento sem compromisso e transforme sua presença digital com um site moderno, profissional e otimizado para resultados.
            </p>
            
            <a 
              href="https://wa.me/5551980507193?text=Ol%C3%A1!%20Quero%20criar%20o%20site%20da%20minha%20empresa%20com%20a%20BW."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#1565FF] hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              <MessageCircle size={24} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
