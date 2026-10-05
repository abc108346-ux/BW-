import { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Rocket, 
  Building2, 
  Briefcase, 
  Calendar, 
  ShoppingCart, 
  Settings, 
  MonitorPlay, 
  Sparkles, 
  Star, 
  Crown, 
  Globe 
} from 'lucide-react';
import { GlareHover } from '../components/GlareHover';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface Plan {
  id: string;
  name: string;
  price: string;
  isStartingPrice?: boolean;
  desc: string;
  badge?: string;
  isMainHighlight?: boolean;
  isPremium?: boolean;
  isCommercialHighlight?: boolean;
  targetAudience?: string;
  features: string[];
  buttonText: string;
  icon: typeof Rocket;
}

const plans: Plan[] = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    price: '597',
    isStartingPrice: false,
    desc: 'Ideal para profissionais e pequenos negócios.',
    features: [
      '1 página',
      'Design profissional',
      'Layout responsivo',
      'Integração com WhatsApp',
      'SEO básico',
      'Publicação do site'
    ],
    buttonText: 'Quero minha Landing Page',
    icon: Rocket
  },
  {
    id: 'site-institucional',
    name: 'Site Institucional',
    price: '997',
    isStartingPrice: false,
    badge: 'Alta Procura',
    isCommercialHighlight: true,
    desc: 'Para empresas que querem apresentar seus serviços de forma profissional.',
    features: [
      'Até 5 páginas/seções',
      'Design personalizado',
      'Layout responsivo',
      'WhatsApp',
      'Instagram',
      'Google Maps',
      'SEO básico',
      'Publicação do site'
    ],
    buttonText: 'Quero meu Site Institucional',
    icon: Building2
  },
  {
    id: 'site-profissional',
    name: 'Site Profissional',
    price: '1.497',
    isStartingPrice: false,
    badge: 'MAIS ESCOLHIDO',
    isMainHighlight: true,
    desc: 'Principal plano para empresas que buscam máxima presença, autoridade e conversão.',
    features: [
      'Até 8 páginas/seções',
      'Design personalizado',
      'Animações',
      'Formulários',
      'WhatsApp',
      'Instagram',
      'Google Maps',
      'SEO',
      'Otimização de velocidade',
      'Publicação do site'
    ],
    buttonText: 'Quero o Site Profissional',
    icon: Briefcase
  },
  {
    id: 'site-agendamento',
    name: 'Site Profissional + Agendamento',
    price: '1.997',
    isStartingPrice: false,
    badge: 'Opção Premium',
    isPremium: true,
    targetAudience: 'Clínicas, estética, barbearias, salões e profissionais.',
    desc: 'Tudo do Site Profissional com sistema inteligente de agendamento online integrado.',
    features: [
      'Tudo do Site Profissional',
      'Sistema de agendamento',
      'Formulário de agendamento',
      'Organização de horários',
      'Integração com WhatsApp',
      'Design personalizado',
      'SEO',
      'Otimização de velocidade',
      'Publicação do site'
    ],
    buttonText: 'Quero Site com Agendamento',
    icon: Calendar
  },
  {
    id: 'loja-virtual',
    name: 'Loja Virtual',
    price: '2.497',
    isStartingPrice: true,
    desc: 'Estrutura completa e preparada para vendas online com alta conversão.',
    features: [
      'Catálogo de produtos',
      'Página individual de produtos',
      'Carrinho',
      'Checkout',
      'Integração de pagamento',
      'Layout responsivo',
      'SEO básico',
      'Estrutura preparada para vendas online'
    ],
    buttonText: 'Criar minha Loja Virtual',
    icon: ShoppingCart
  },
  {
    id: 'projeto-personalizado',
    name: 'Projeto Personalizado',
    price: '2.500',
    isStartingPrice: true,
    desc: 'Para projetos que precisam de funcionalidades específicas e desenvolvimento sob medida.',
    features: [
      'Sistemas personalizados',
      'Integrações',
      'Funcionalidades exclusivas',
      'Áreas administrativas',
      'Agendamento avançado',
      'Projetos sob medida'
    ],
    buttonText: 'Solicitar Projeto Sob Medida',
    icon: Settings
  }
];

const extras = [
  { name: 'Página adicional', price: '80' },
  { name: 'Integração personalizada', price: '100' },
  { name: 'Manutenção', price: '79/mês' },
  { name: 'Área administrativa', price: 'Orçamento personalizado' }
];

export const Pricing = () => {
  const whatsappNumber = "5551980507193";
  const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    document.title = "Planos & Preços para Criação de Sites | BW Web Design";
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#000] text-white">
      {/* Hero Section */}
      <section className="relative px-6 pb-16 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] -z-10 opacity-30 mix-blend-screen pointer-events-none">
          <div className="w-[300px] h-[300px] bg-[#1565FF] rounded-full blur-[120px] mx-auto" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#1565FF] text-sm font-semibold mb-6"
        >
          <MonitorPlay size={16} />
          Sites profissionais • Design personalizado • Layout responsivo
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
        >
          Seu novo site <span className="text-[#1565FF]">começa aqui.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
        >
          Escolha a solução ideal para o seu negócio e leve sua presença digital para outro nível com a BW Web Design.
        </motion.p>
      </section>

      {/* Pricing Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            Planos para cada necessidade
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-sm md:text-base"
          >
            Do primeiro passo ao projeto completo, criamos sites modernos pensados para gerar presença, credibilidade e conversão.
          </motion.p>
        </div>

        {/* 6 Cards Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan, index) => {
            const planMessage = `Olá! Gostaria de saber mais sobre o plano ${plan.name} (${plan.isStartingPrice ? `a partir de R$ ${plan.price}` : `R$ ${plan.price}`}).`;
            const planHref = `${whatsappBaseUrl}?text=${encodeURIComponent(planMessage)}`;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative flex flex-col h-full pt-5 ${plan.isMainHighlight ? 'z-20' : 'z-10'}`}
              >
                {/* Clean, Non-Clipping Badges */}
                {plan.isMainHighlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#1565FF] via-blue-500 to-[#1565FF] text-white text-xs font-black tracking-wider uppercase px-4 py-1.5 rounded-full shadow-[0_0_25px_rgba(21,101,255,0.9)] border border-blue-300/40 whitespace-nowrap">
                      <Sparkles size={13} className="text-yellow-300 fill-yellow-300 shrink-0" />
                      MAIS ESCOLHIDO
                    </span>
                  </div>
                )}

                {plan.isPremium && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 via-blue-600 to-[#1565FF] text-white text-xs font-black tracking-wider uppercase px-4 py-1.5 rounded-full shadow-[0_0_25px_rgba(21,101,255,0.6)] border border-blue-300/40 whitespace-nowrap">
                      <Crown size={13} className="text-amber-300 fill-amber-300 shrink-0" />
                      OPÇÃO PREMIUM
                    </span>
                  </div>
                )}

                {plan.isCommercialHighlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                    <span className="inline-flex items-center gap-1 bg-[#1565FF]/20 text-blue-300 text-xs font-bold tracking-wider uppercase px-3.5 py-1 rounded-full border border-[#1565FF]/40 backdrop-blur-md whitespace-nowrap shadow-[0_0_15px_rgba(21,101,255,0.3)]">
                      <Star size={12} className="text-blue-400 fill-blue-400 shrink-0" />
                      ALTA PROCURA
                    </span>
                  </div>
                )}

                {/* Card Container with Glare Effect */}
                <GlareHover className="w-full h-full flex flex-col" overflowHidden={false}>
                  <div 
                    className={`h-full flex flex-col p-6 sm:p-8 rounded-2xl transition-all duration-300 relative ${
                      plan.isMainHighlight
                        ? 'bg-gradient-to-b from-[#1565FF]/25 via-[#1565FF]/10 to-white/[0.02] border-2 border-[#1565FF] shadow-[0_0_40px_rgba(21,101,255,0.35)] ring-1 ring-[#1565FF]/40'
                        : plan.isPremium
                        ? 'bg-gradient-to-b from-blue-950/40 via-white/[0.03] to-white/[0.01] border border-blue-400/30 hover:border-[#1565FF]/60 shadow-[0_0_25px_rgba(21,101,255,0.15)]'
                        : plan.isCommercialHighlight
                        ? 'bg-gradient-to-b from-[#1565FF]/10 via-white/[0.02] to-transparent border border-[#1565FF]/30 hover:border-[#1565FF]/60'
                        : 'bg-white/[0.02] border border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div 
                        className={`p-3 rounded-xl shrink-0 transition-colors ${
                          plan.isMainHighlight 
                            ? 'bg-[#1565FF] text-white shadow-lg shadow-[#1565FF]/50' 
                            : plan.isPremium
                            ? 'bg-gradient-to-br from-blue-600 to-[#1565FF] text-white shadow-md shadow-[#1565FF]/30'
                            : 'bg-white/5 text-[#1565FF] border border-white/5'
                        }`}
                      >
                        <plan.icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">{plan.name}</h3>
                        {plan.isMainHighlight && (
                          <span className="text-[11px] font-semibold text-blue-300 tracking-wide block mt-0.5">
                            Principal Recomendação
                          </span>
                        )}
                        {plan.isPremium && (
                          <span className="text-[11px] font-semibold text-blue-300 tracking-wide block mt-0.5">
                            Recursos Avançados
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Target Audience Highlight for Premium Plan */}
                    {plan.targetAudience && (
                      <div className="mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-400/20 text-xs text-white/85 leading-relaxed">
                        <span className="font-bold text-blue-300 block mb-1 uppercase tracking-wide text-[10px]">
                          Indicado especialmente para:
                        </span>
                        {plan.targetAudience}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-sm text-white/65 mb-6 min-h-[40px] leading-relaxed">
                      {plan.desc}
                    </p>

                    {/* Price Tag */}
                    <div className="mb-6 pt-2 border-t border-white/5">
                      {plan.isStartingPrice ? (
                        <span className="text-xs uppercase tracking-wider text-white/50 font-semibold block mb-1">
                          A partir de
                        </span>
                      ) : (
                        <span className="text-xs uppercase tracking-wider text-white/40 font-semibold block mb-1 opacity-0 select-none">
                          Valor Fixo
                        </span>
                      )}
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-bold text-[#1565FF]">R$</span>
                        <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                          {plan.price}
                        </span>
                      </div>
                    </div>

                    {/* Feature List */}
                    <div className="mb-8 flex-grow">
                      <p className="text-xs uppercase font-semibold text-white/40 tracking-wider mb-3">
                        O que está incluso:
                      </p>
                      <ul className="space-y-3">
                        {plan.features.map(feature => (
                          <li key={feature} className="flex items-start gap-3 text-sm">
                            <Check size={18} className="text-[#1565FF] shrink-0 mt-0.5" />
                            <span className="text-white/85 leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button with Official WhatsApp Icon */}
                    <a 
                      href={planHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto w-full py-4 px-4 rounded-xl font-semibold flex justify-center items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base ${
                        plan.isMainHighlight 
                          ? 'bg-[#1565FF] text-white hover:bg-[#0f4ecc] shadow-[0_0_30px_rgba(21,101,255,0.5)]' 
                          : plan.isPremium
                          ? 'bg-[#1565FF] text-white hover:bg-[#0f4ecc] shadow-[0_0_20px_rgba(21,101,255,0.3)]'
                          : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      <WhatsAppIcon 
                        size={18} 
                        className={plan.isMainHighlight || plan.isPremium ? 'text-white' : 'text-[#25D366]'} 
                      />
                      <span>{plan.buttonText}</span>
                    </a>
                  </div>
                </GlareHover>
              </motion.div>
            );
          })}
        </div>

        {/* Informações Claras sobre Domínio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-white/[0.04] to-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 backdrop-blur-sm shadow-lg">
            <div className="p-3.5 rounded-xl bg-[#1565FF]/15 text-[#1565FF] shrink-0 border border-[#1565FF]/30 shadow-[0_0_20px_rgba(21,101,255,0.2)]">
              <Globe size={26} />
            </div>
            <div className="space-y-1.5 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-white">
                Domínio não incluso. O registro e a renovação do domínio são de responsabilidade do cliente.
              </p>
              <p className="text-white/70 text-sm">
                A BW pode auxiliar na configuração do domínio, mas o custo de registro e renovação é de responsabilidade do cliente.
              </p>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-white/40 text-xs sm:text-sm mt-8 mb-16 max-w-2xl mx-auto">
          Valores sem surpresas e transparentes. Cada projeto é desenvolvido com código moderno, alta performance e foco total nos objetivos da sua empresa.
        </p>
      </section>

      {/* Extras Section */}
      <section className="px-6 max-w-5xl mx-auto mb-20">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-8"
        >
          Precisa de algo a mais?
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {extras.map((extra, i) => (
            <motion.div
              key={extra.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/[0.02] border border-white/5 rounded-xl p-6 text-center hover:bg-white/[0.04] transition-colors"
            >
              <h4 className="font-semibold text-white/90 mb-2 text-sm sm:text-base">{extra.name}</h4>
              <p className="text-[#1565FF] font-semibold text-sm">
                {extra.price.includes('Orçamento') ? extra.price : `A partir de R$ ${extra.price}`}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-[#1565FF]/20 via-[#1565FF]/5 to-transparent border border-[#1565FF]/30 p-10 md:p-16 rounded-3xl relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1565FF]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
            Não sabe qual plano escolher?
          </h2>
          <p className="text-base md:text-lg text-white/75 mb-8 max-w-2xl mx-auto leading-relaxed">
            Fale com a BW e explique o que sua empresa precisa. Vamos encontrar a solução ideal para o seu projeto.
          </p>
          <a 
            href={`${whatsappBaseUrl}?text=${encodeURIComponent('Olá! Não sei qual plano escolher para minha empresa. Gostaria de encontrar a solução ideal com a BW.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-9 py-4 rounded-full font-bold text-base transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,211,102,0.4)]"
          >
            <WhatsAppIcon size={22} className="text-white shrink-0" />
            <span>Falar com a BW</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
};
