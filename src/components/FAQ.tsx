import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Quanto tempo demora para o site ficar pronto?', a: 'O prazo médio é de 7 a 15 dias, dependendo da complexidade do projeto e da agilidade na entrega dos materiais (textos e imagens).' },
  { q: 'Quanto custa um site?', a: 'O valor varia de acordo com as funcionalidades necessárias. Solicite um orçamento sem compromisso pelo nosso WhatsApp.' },
  { q: 'O site funciona no celular?', a: 'Sim, todos os nossos sites são 100% responsivos e otimizados para funcionar perfeitamente em celulares, tablets e computadores.' },
  { q: 'Vocês oferecem manutenção?', a: 'Sim! Oferecemos planos de manutenção mensal para garantir que seu site continue seguro, rápido e atualizado.' },
  { q: 'Como funciona o pagamento?', a: 'Trabalhamos com entrada de 50% para iniciar o projeto e os 50% restantes apenas na aprovação e entrega final. Aceitamos PIX e cartões.' },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#050505]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Dúvidas Frequentes</h2>
          <div className="w-20 h-1 bg-[#1565FF] rounded-full mx-auto mb-6"></div>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
              >
                <span className="font-semibold text-lg">{faq.q}</span>
                <ChevronDown 
                  className={`text-[#1565FF] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-white/60 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
