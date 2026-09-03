import { motion } from 'motion/react';
import { Home, ArrowLeft, MessageCircle, LayoutGrid, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Página Não Encontrada | BW Web Design";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden bg-[#000]">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1565FF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-xl mx-auto text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block"
        >
          <Link to="/" className="inline-block group">
            <img 
              src="https://i.postimg.cc/yJRq94SW/image.png" 
              alt="BW | Bernardo Web Design" 
              className="h-20 md:h-24 mx-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>
        </motion.div>

        {/* 404 Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1565FF]/10 border border-[#1565FF]/30 text-[#1565FF] text-sm font-bold uppercase tracking-wider mb-6"
        >
          Erro 404
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white"
        >
          Página não encontrada
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/60 text-lg mb-10 leading-relaxed"
        >
          O link que você tentou acessar não existe, foi alterado ou está temporariamente indisponível.
        </motion.p>

        {/* Main Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1565FF] hover:bg-[#0f4ecc] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(21,101,255,0.4)]"
          >
            <Home size={18} /> Voltar para o Início
          </Link>

          <a
            href="https://wa.me/5551980507193?text=Ol%C3%A1!%20Estava%20navegando%20no%20site%20da%20BW%20e%20preciso%20de%20ajuda."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle size={18} className="text-[#25D366]" /> Falar no WhatsApp
          </a>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-8 border-t border-white/10 flex items-center justify-center gap-6 text-sm text-white/60"
        >
          <Link to="/portfolio" className="inline-flex items-center gap-2 hover:text-[#1565FF] transition-colors">
            <LayoutGrid size={15} /> Ver Portfólio
          </Link>
          <span className="text-white/20">•</span>
          <Link to="/precos" className="inline-flex items-center gap-2 hover:text-[#1565FF] transition-colors">
            <Tag size={15} /> Ver Preços
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
