import { motion } from 'motion/react';
import { GlareHover } from './GlareHover';
import { 
  Monitor, 
  LayoutTemplate, 
  Briefcase, 
  Utensils, 
  Dumbbell, 
  Stethoscope, 
  Scissors, 
  ShoppingCart, 
  Settings 
} from 'lucide-react';

const services = [
  { icon: LayoutTemplate, title: 'Landing Pages', desc: 'Páginas focadas em alta conversão para campanhas.' },
  { icon: Monitor, title: 'Sites Institucionais', desc: 'Apresentação profissional da sua empresa.' },
  { icon: Briefcase, title: 'Portfólios', desc: 'Exiba seus melhores trabalhos com estilo.' },
  { icon: Utensils, title: 'Restaurantes', desc: 'Cardápios digitais e sistemas de reserva.' },
  { icon: Dumbbell, title: 'Academias', desc: 'Planos, horários e captação de alunos.' },
  { icon: Stethoscope, title: 'Clínicas', desc: 'Agendamentos e informações sobre especialistas.' },
  { icon: Scissors, title: 'Salões de Beleza', desc: 'Mostre seus serviços e facilite agendamentos.' },
  { icon: ShoppingCart, title: 'Lojas Virtuais', desc: 'E-commerce completo para vender online.' },
  { icon: Settings, title: 'Manutenção e Atualizações', desc: 'Seu site sempre seguro e atualizado.' },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-[#1565FF] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Soluções digitais completas para colocar seu negócio em destaque na internet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <GlareHover className="h-full">
                <div className="group h-full bg-white/5 border border-white/10 p-8 rounded-[inherit] hover:bg-white/10 hover:border-[#1565FF]/50 transition-all duration-300 cursor-pointer">
                  <div className="w-14 h-14 bg-[#1565FF]/10 text-[#1565FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1565FF] group-hover:text-white transition-all duration-300">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
