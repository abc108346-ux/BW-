import { useRef, useState, PointerEvent, ReactNode } from "react";

export const GlareHover = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={handlePointerLeave}
      style={{ 
        transform, 
        transformStyle: "preserve-3d", 
        transition: isHovered ? "none" : "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)" 
      }}
      className={`relative rounded-2xl will-change-transform ${className}`}
    >
      {/* Container do Conteúdo */}
      <div className="relative w-full h-full rounded-[inherit] overflow-hidden z-10 bg-white/[0.02]">
        {children}
      </div>
      
      {/* Efeito de Glare (Brilho Azul interativo) */}
      <div
        className="pointer-events-none absolute inset-0 z-50 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(21, 101, 255, 0.35) 0%, transparent 60%)`,
        }}
      />
    </div>
  );
};
