import { Instagram, Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Header';

export const Footer = () => {
  const location = useLocation();

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Sobre Nós', path: '/#sobre' },
    { label: 'Serviços', path: '/#servicos' },
    { label: 'Portfólio', path: '/portfolio' },
    { label: 'Planos & Preços', path: '/precos' },
    { label: 'Perguntas Frequentes', path: '/#faq' },
    { label: 'Fale Conosco', path: '/#contato' }
  ];

  const renderFooterLink = (link: { label: string; path: string }) => {
    const isHash = link.path.includes('#');

    if (isHash && location.pathname === '/') {
      return (
        <a
          key={link.label}
          href={link.path.replace('/', '')}
          className="text-white/60 hover:text-[#1565FF] text-sm transition-colors inline-flex items-center gap-1 group"
        >
          <span>{link.label}</span>
        </a>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.path}
        className="text-white/60 hover:text-[#1565FF] text-sm transition-colors inline-flex items-center gap-1 group"
      >
        <span>{link.label}</span>
      </Link>
    );
  };

  return (
    <footer className="bg-black pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-40 bg-[#1565FF]/10 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Bio & Social */}
          <div className="lg:col-span-1">
            <div className="mb-6 inline-block">
              <Logo />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Especialistas em desenvolvimento de sites modernos, landing pages de alta conversão e soluções digitais focadas em resultado e autoridade.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/bwweb.design"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da BW Web Design"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#1565FF] hover:text-white hover:border-[#1565FF] transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/5551980507193?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20o%20site%20da%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da BW Web Design"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
              >
                <Phone size={18} />
              </a>
              <a 
                href="mailto:contatosuportebw@gmail.com"
                aria-label="E-mail de Contato"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#1565FF] hover:text-white hover:border-[#1565FF] transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Menu Rápido */}
          <div>
            <h4 className="font-bold text-white text-base mb-6 tracking-wide">Navegação</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map(link => (
                <li key={link.label}>
                  {renderFooterLink(link)}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Dados de Contato e Atendimento */}
          <div>
            <h4 className="font-bold text-white text-base mb-6 tracking-wide">Contato Direto</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li>
                <a 
                  href="https://wa.me/5551980507193?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20cria%C3%A7%C3%A3o%20de%20sites."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <Phone size={16} className="text-[#1565FF] group-hover:scale-110 transition-transform" />
                  <span>(51) 98050-7193</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contatosuportebw@gmail.com"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <Mail size={16} className="text-[#1565FF] group-hover:scale-110 transition-transform" />
                  <span className="break-all">contatosuportebw@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#1565FF] shrink-0 mt-0.5" />
                <span>Porto Alegre - RS • Atendimento Online para todo o Brasil</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#1565FF] shrink-0 mt-0.5" />
                <span>Segunda a Sexta: 08h às 19h</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Segurança & Garantias */}
          <div>
            <h4 className="font-bold text-white text-base mb-6 tracking-wide">Segurança & Qualidade</h4>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <ShieldCheck size={18} />
                <span>Ambiente Seguro (HTTPS)</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Nossos sites contam com certificado SSL ativo, infraestrutura global em nuvem e alta velocidade de resposta.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span>Vercel Cloud Network</span>
                <span className="text-emerald-400 font-mono">100% Uptime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé inferior / Direitos */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} BW | Bernardo Web Design. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span>Privacidade & LGPD</span>
            <span>Termos de Serviço</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
