import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Star, Shield, Layout, Settings, MonitorPlay } from 'lucide-react';
import { GlareHover } from '../components/GlareHover';

const plans = [
  {
    name: 'Landing Page',
    price: '397',
    desc: 'Ideal para campanhas, profissionais autônomos e empresas que precisam de uma página objetiva.',
    features: [
      'Página única',
      'Design personalizado',
      'Responsivo para celular e computador',
      'Botões de WhatsApp',
      'Formulário de contato',
      'Publicação do site'
    ],
    buttonText: 'Quero minha Landing Page',
    popular: false,
    icon: Zap
  },
  {
    name: 'Site Institucional',
    price: '697',
    desc: 'Ideal para empresas que precisam apresentar seus serviços e transmitir mais credibilidade.',
    features: [
      'Até 5 páginas',
      'Design personalizado',
      'Responsivo',
      'Botões de WhatsApp',
      'Formulário de contato',
      'Publicação do site'
    ],
    buttonText: 'Quero meu Site',
    popular: true,
    icon: Layout
  },
  {
    name: 'Site Profissional',
    price: '997',
    desc: 'Para empresas que precisam de um site mais completo e personalizado.',
    features: [
      'Até 8 páginas',
      'Design personalizado',
      'Animações modernas',
      'Formulários',
      'Integrações',
      'Responsividade',
      'Publicação do site'
    ],
    buttonText: 'Quero meu Site Profissional',
    popular: false,
    icon: Star
  },
  {
    name: 'Loja Virtual',
    price: '1.997',
    desc: 'Para empresas que querem vender produtos pela internet.',
    features: [
      'Catálogo de produtos',
      'Carrinho',
      'Estrutura de e-commerce',
      'Integrações de pagamento',
      'Design personalizado',
      'Responsividade',
      'Publicação'
    ],
    buttonText: 'Criar minha Loja',
    popular: false,
    icon: Shield
  }
];

const premiumPlan = {
  name: 'Site Premium',
  price: '1.497',
  desc: 'Para projetos maiores, personalizados e com necessidades específicas.',
  features: [
    'Projeto totalmente personalizado',
    'Estrutura avançada',
    'Animações avançadas',
    'Integrações personalizadas',
    'Recursos sob medida',
    'Responsividade',
    'Publicação'
  ],
  buttonText: 'Solicitar Orçamento',
  icon: Settings
};

const extras = [
  { name: 'Página adicional', price: '80' },
  { name: 'Integração personalizada', price: '100' },
  { name: 'Manutenção', price: '79/mês' },
  { name: 'Área administrativa', price: 'Orçamento personalizado' }
];

export const Pricing = () => {
  const whatsappNumber = "5551980507193";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    document.title = "Planos & Preços para Criação de Sites | BW Web Design";
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#000]">
      {/* Hero Section */}
      <section className="relative px-6 pb-20 text-center max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] -z-10 opacity-30 mix-blend-screen pointer-events-none">
          <div className="w-[300px] h-[300px] bg-[#1565FF] rounded-full blur-[120px] mx-auto"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#1565FF] text-sm font-semibold mb-6"
        >
          <MonitorPlay size={16} />
          Sites profissionais • Design personalizado • Responsivo
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
          className="text-lg md:text-xl text-white/60"
        >
          Escolha a solução ideal para o seu negócio e leve sua presença digital para outro nível.
        </motion.p>
      </section>

      {/* Pricing Plans */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Planos para cada necessidade
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Do primeiro passo ao projeto completo, criamos sites profissionais pensados para gerar presença, credibilidade e resultados.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 relative">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`h-full flex ${plan.popular ? 'lg:-translate-y-4' : ''}`}
            >
              <GlareHover className="w-full">
                <div className={`h-full flex flex-col p-8 rounded-[inherit] bg-white/[0.02] border transition-colors duration-300 relative ${
                  plan.popular ? 'border-[#1565FF] hover:border-[#1565FF]/80' : 'border-white/5 hover:border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1565FF] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                      Mais Escolhido
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${plan.popular ? 'bg-[#1565FF]/20 text-[#1565FF]' : 'bg-white/5 text-white/60'}`}>
                      <plan.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                  </div>

                  <p className="text-sm text-white/60 mb-6 flex-grow">{plan.desc}</p>

                  <div className="mb-8">
                    <span className="text-sm text-white/50">A partir de</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-2xl font-bold text-[#1565FF]">R$</span>
                      <span className="text-4xl font-bold">{plan.price}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check size={18} className="text-[#1565FF] shrink-0 mt-0.5" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={`${whatsappUrl}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o plano ${plan.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto w-full py-4 rounded-xl font-semibold flex justify-center items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${
                      plan.popular 
                        ? 'bg-[#1565FF] text-white hover:bg-[#0f4ecc] shadow-[0_0_20px_rgba(21,101,255,0.3)]' 
                        : 'bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </div>

        {/* Premium Plan (Spans wider or sits centered) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12"
        >
          <GlareHover className="w-full">
            <div className="flex flex-col md:flex-row gap-8 p-8 md:p-10 rounded-[inherit] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-white/20 transition-colors duration-300">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#1565FF]/20 text-[#1565FF]">
                    <premiumPlan.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{premiumPlan.name}</h3>
                </div>
                <p className="text-white/60 mb-6">{premiumPlan.desc}</p>
                <div className="mb-6">
                  <span className="text-sm text-white/50">A partir de</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold text-[#1565FF]">R$</span>
                    <span className="text-5xl font-bold">{premiumPlan.price}</span>
                  </div>
                </div>
                <a 
                  href={`${whatsappUrl}?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para o Site Premium.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {premiumPlan.buttonText} <ArrowRight size={18} />
                </a>
              </div>
              <div className="flex-1">
                <ul className="space-y-4">
                  {premiumPlan.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check size={18} className="text-[#1565FF] shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlareHover>
        </motion.div>

        <p className="text-center text-white/40 text-sm mt-12 mb-20 max-w-2xl mx-auto">
          Valores iniciais. O orçamento final pode variar conforme a complexidade e os recursos solicitados.
        </p>
      </section>

      {/* Extras Section */}
      <section className="px-6 max-w-5xl mx-auto mb-24">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-10"
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
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/5 rounded-xl p-6 text-center hover:bg-white/[0.04] transition-colors"
            >
              <h4 className="font-semibold text-white/90 mb-2">{extra.name}</h4>
              <p className="text-[#1565FF] font-medium text-sm">
                {extra.price.includes('Orçamento') ? extra.price : `A partir de R$ ${extra.price}`}
              </p>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center text-white/40 text-xs mt-6">
          * Domínio e serviços de terceiros podem ser cobrados separadamente.
        </p>
      </section>

      {/* Final CTA */}
      <section className="px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-[#1565FF]/20 to-transparent border border-[#1565FF]/30 p-10 md:p-16 rounded-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Não sabe qual plano escolher?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Conte o que sua empresa precisa e nós indicaremos a melhor solução para o seu projeto.
          </p>
          <a 
            href={`${whatsappUrl}?text=${encodeURIComponent('Olá! Gostaria de uma consultoria para escolher o melhor plano de site para minha empresa.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1565FF] hover:bg-[#0f4ecc] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(21,101,255,0.4)]"
          >
            Falar com a BW no WhatsApp <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>
    </div>
  );
};
