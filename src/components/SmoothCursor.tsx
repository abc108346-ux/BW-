import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const SmoothCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseEnter);
    };
  }, [isVisible]);

  // Spring configuration for smooth tracking
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Offset by half the width/height to center the circle on the cursor
    cursorX.set(mousePosition.x - 16);
    cursorY.set(mousePosition.y - 16);
  }, [mousePosition, cursorX, cursorY]);

  // If it's a touch device, we don't really want the cursor
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer smooth tracking circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#1565FF]/80 pointer-events-none z-[10000] hidden lg:block mix-blend-screen shadow-[0_0_15px_rgba(21,101,255,0.3)]"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Inner instant dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-[#1565FF] rounded-full pointer-events-none z-[10000] hidden lg:block transition-opacity duration-300 shadow-[0_0_8px_rgba(21,101,255,0.8)]"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};
