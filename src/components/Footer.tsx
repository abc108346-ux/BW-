import { Instagram, Phone, Mail } from 'lucide-react';
import { Logo } from './Header';

export const Footer = () => {
  const links = ['Início', 'Sobre', 'Serviços', 'Portfólio', 'Contato'];

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-[#1565FF]/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-6 inline-block">
              <Logo />
            </div>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed mb-8">
              Transformando ideias em experiências digitais de alto impacto. Somos especialistas em desenvolvimento web, focados em performance e resultados.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/bwweb.design"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#1565FF] hover:text-white hover:border-[#1565FF] transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Menu Rápido</h4>
            <ul className="flex flex-col gap-3">
              {links.map(link => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-white/60 hover:text-[#1565FF] text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a 
                  href="https://wa.me/5551980507193"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-[#1565FF] text-sm transition-colors"
                >
                  <Phone size={16} className="text-[#1565FF]" />
                  (51) 98050-7193
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/bwweb.design"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-[#1565FF] text-sm transition-colors"
                >
                  <Instagram size={16} className="text-[#1565FF]" />
                  @bwweb.design
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} BW | Bernardo Web Design. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
