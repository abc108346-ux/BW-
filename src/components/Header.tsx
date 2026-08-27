import { useState, useEffect } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Logo = () => (
  <Link to="/" className="flex items-center group">
    <img 
      src="https://i.postimg.cc/yJRq94SW/image.png" 
      alt="BW | Bernardo Web Design" 
      className="h-16 md:h-24 object-contain group-hover:scale-105 transition-transform duration-300"
    />
  </Link>
);

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Início', path: '/' },
    { label: 'Sobre', path: '/#sobre' },
    { label: 'Serviços', path: '/#servicos' },
    { label: 'Portfólio', path: '/#portfolio' },
    { label: 'Preços', path: '/precos' },
    { label: 'FAQ', path: '/#faq' },
    { label: 'Contato', path: '/#contato' }
  ];

  const renderLink = (link: { label: string, path: string }, className: string, onClick?: () => void) => {
    const isHash = link.path.includes('#');
    
    // If it's a hash link and we're on the home page, just use href with the hash so smooth scroll works
    if (isHash && location.pathname === '/') {
      return (
        <a 
          key={link.label}
          href={link.path.replace('/', '')}
          className={className}
          onClick={onClick}
        >
          {link.label}
        </a>
      );
    }

    // Otherwise use React Router Link
    return (
      <Link 
        key={link.label}
        to={link.path}
        className={className}
        onClick={onClick}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(link => renderLink(
            link, 
            "text-sm font-medium text-white/80 hover:text-white transition-colors"
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://instagram.com/bwweb.design" target="_blank" rel="noreferrer" className="text-white/80 hover:text-[#1565FF] transition-colors hidden sm:block">
            <Instagram size={24} />
          </a>
          <a 
            href="https://wa.me/5551980507193" 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#1565FF] hover:bg-[#0f4ecc] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(21,101,255,0.3)] hidden sm:block"
          >
            Solicitar Orçamento
          </a>
          <button 
            className="lg:hidden text-white/80 hover:text-white p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl">
          {links.map(link => renderLink(
            link,
            "text-lg font-medium text-white/80 hover:text-white py-2 border-b border-white/5",
            () => setIsMenuOpen(false)
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <a 
              href="https://instagram.com/bwweb.design" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 text-white/80 hover:text-white py-2"
            >
              <Instagram size={24} /> Instagram
            </a>
            <a 
              href="https://wa.me/5551980507193" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#1565FF] hover:bg-[#0f4ecc] text-white px-6 py-4 rounded-xl text-center font-bold text-lg"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
