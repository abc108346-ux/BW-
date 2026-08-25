import { motion } from 'motion/react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contato" className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Fale Conosco</h2>
          <div className="w-20 h-1 bg-[#1565FF] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Pronto para dar o próximo passo? Entre em contato agora mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.a 
            href="https://wa.me/5551980507193"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4 p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#1565FF]/50 transition-all group cursor-pointer"
          >
            <div className="w-16 h-16 bg-[#1565FF]/10 text-[#1565FF] rounded-full flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#1565FF] group-hover:text-white transition-all">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-xl font-bold">WhatsApp</h3>
            <p className="text-white/60 text-sm">(51) 98050-7193</p>
          </motion.a>

          <motion.a 
            href="mailto:contatosuportebw@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center gap-4 p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#1565FF]/50 transition-all group cursor-pointer"
          >
            <div className="w-16 h-16 bg-[#1565FF]/10 text-[#1565FF] rounded-full flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#1565FF] group-hover:text-white transition-all">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold">E-mail</h3>
            <p className="text-white/60 text-sm group-hover:text-white transition-colors">contatosuportebw@gmail.com</p>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center gap-4 p-8 bg-white/5 border border-white/10 rounded-2xl"
          >
            <div className="w-16 h-16 bg-white/5 text-white/50 rounded-full flex items-center justify-center mb-2">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold">Atendimento</h3>
            <p className="text-white/60 text-sm">100% Online para todo o Brasil</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
