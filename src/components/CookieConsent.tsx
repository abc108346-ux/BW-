import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, ShieldCheck } from 'lucide-react';

interface CookieConsentProps {
  onVisibilityChange?: (visible: boolean) => void;
}

export const CookieConsent = ({ onVisibilityChange }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(() => {
    // Check initial state synchronously
    try {
      return !localStorage.getItem('bw_cookie_consent');
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (isVisible) {
      onVisibilityChange?.(true);
    }
  }, [isVisible, onVisibilityChange]);

  const handleAccept = () => {
    try {
      localStorage.setItem('bw_cookie_consent', 'accepted');
    } catch {
      // ignore
    }
    setIsVisible(false);
    onVisibilityChange?.(false);
  };

  const handleDismiss = () => {
    try {
      localStorage.setItem('bw_cookie_consent', 'dismissed');
    } catch {
      // ignore
    }
    setIsVisible(false);
    onVisibilityChange?.(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-50"
        >
          <div className="bg-black/90 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-2xl shadow-black/80 flex flex-col gap-3 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1565FF]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start justify-between gap-3 relative z-10">
              <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#1565FF]/20 text-[#1565FF] flex items-center justify-center shrink-0">
                  <Cookie size={18} />
                </div>
                <span>Privacidade & Cookies</span>
              </div>
              <button
                onClick={handleDismiss}
                className="text-white/40 hover:text-white transition-colors p-1"
                aria-label="Fechar aviso"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-white/70 text-xs leading-relaxed relative z-10">
              Utilizamos cookies essenciais e tecnologias semelhantes para garantir o melhor desempenho e segurança do site, de acordo com a nossa política e a LGPD.
            </p>

            <div className="flex items-center gap-3 pt-1 relative z-10">
              <button
                onClick={handleAccept}
                className="flex-1 bg-[#1565FF] hover:bg-[#0f4ecc] text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all shadow-lg shadow-[#1565FF]/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Aceitar e continuar
              </button>
              <button
                onClick={handleDismiss}
                className="bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-medium py-2.5 px-3 rounded-xl transition-colors border border-white/5"
              >
                Apenas essenciais
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
