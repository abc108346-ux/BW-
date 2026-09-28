import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingActionsProps {
  hidden?: boolean;
}

export const FloatingActions = ({ hidden = false }: FloatingActionsProps) => {
  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          key="floating-whatsapp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-4"
        >
          <a
            href="https://wa.me/5551980507193?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20cria%C3%A7%C3%A3o%20de%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center text-white shadow-xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all"
            aria-label="Falar conosco no WhatsApp"
          >
            <WhatsAppIcon size={34} className="text-white" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
