import { motion } from 'motion/react';
import { 
  Palette, 
  Smartphone, 
  Zap, 
  Search, 
  MessageCircle, 
  ShieldCheck, 
  Server, 
  Globe, 
  Code, 
  HeartHandshake 
} from 'lucide-react';

const differentials = [
  { icon: Palette, text: 'Design exclusivo' },
  { icon: Smartphone, text: 'Site responsivo' },
  { icon: Zap, text: 'Alta velocidade' },
  { icon: Search, text: 'SEO otimizado' },
  { icon: MessageCircle, text: 'Integração com WhatsApp' },
  { icon: ShieldCheck, text: 'Segurança' },
  { icon: Server, text: 'Hospedagem' },
  { icon: Globe, text: 'Domínio personalizado' },
  { icon: Code, text: 'Código limpo' },
  { icon: HeartHandshake, text: 'Suporte pós-entrega' },
];

export const Differentials = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Diferenciais</h2>
          <div className="w-20 h-1 bg-[#1565FF] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Entregamos qualidade superior em cada detalhe do seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {differentials.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center text-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] hover:border-[#1565FF]/30 transition-colors"
            >
              <diff.icon className="text-[#1565FF]" size={32} strokeWidth={1.5} />
              <span className="font-medium text-sm text-white/80">{diff.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
