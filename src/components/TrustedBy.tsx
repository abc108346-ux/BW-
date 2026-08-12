import { motion } from 'motion/react';

const logos = [
  "https://i.postimg.cc/YjjwNDGQ/1000225062-white-on-black.png",
  "https://i.postimg.cc/t77HdvZk/1000225202-white-on-black.png",
  "https://i.postimg.cc/SjjpL12W/1000226153-white-on-black.png",
  "https://i.postimg.cc/dDDKRNkd/1000226335-white-on-black-hq.png",
  "https://i.postimg.cc/JttW3YD3/1000226706-white-on-black.png",
  "https://i.postimg.cc/w33d54yX/1000227192-white-on-black.png"
];

const Logos = () => (
  <>
    {logos.map((logo, index) => (
      <div 
        key={index} 
        className="w-72 md:w-[420px] mx-4 md:mx-8 flex-shrink-0 flex items-center justify-center p-8 bg-white/[0.02] rounded-xl border border-white/5 backdrop-blur-sm"
      >
        <img 
          src={logo} 
          alt={`Logo Parceiro ${index + 1}`} 
          className="w-full h-28 md:h-40 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" 
        />
      </div>
    ))}
  </>
);

export const TrustedBy = () => {
  return (
    <section className="py-20 bg-[#050505] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white/90">
          Empresas que confiam em nosso trabalho
        </h2>
        <div className="w-20 h-1 bg-[#1565FF] rounded-full mx-auto mt-6"></div>
      </div>

      <div className="relative flex overflow-hidden group py-4">
        {/* Gradient overlays for smooth entry/exit */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Marquee containers */}
        <div className="flex w-max flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
          <Logos />
        </div>
        <div className="flex w-max flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
          <Logos />
        </div>
        <div className="flex w-max flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
          <Logos />
        </div>
        <div className="flex w-max flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
          <Logos />
        </div>
      </div>
    </section>
  );
};
