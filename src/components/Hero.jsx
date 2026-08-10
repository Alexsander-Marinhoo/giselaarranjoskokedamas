import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Sparkles } from 'lucide-react';
import FadeUp from './FadeUp';
import UnderlineSwoosh from './UnderlineSwoosh';

const carouselImages = [
  {
    src: '/assets/2144c9f9-15f9-4d80-9d00-0606298c18e3.webp',
    alt: 'Mini Kokedama de Suculenta no Suporte Gisela Arranjos',
  },
  {
    src: '/assets/1367b70a-2e2b-4450-9363-7f5747dd4c5b.webp',
    alt: 'Arranjo Floral Cerejeira e Garrafas Terracota Gisela Arranjos',
  },
  {
    src: '/assets/7a32c0b8-1043-4fc2-b303-ffbbb903da48.webp',
    alt: 'Coração Botânico com Mini Flores Gisela Arranjos',
  },
  {
    src: '/assets/ca4c3fd8-adf7-4f15-ae19-098b5692dc62.webp',
    alt: 'Escultura Botânica KokeCoelha Gigi Gisela Arranjos',
  },
  {
    src: '/assets/f409184a-11d9-41ac-b5c1-d562ddd6a74e.webp',
    alt: 'Kokedama Suculenta em Macramê Rosa Gisela Arranjos',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const whatsappMessage = encodeURIComponent(
    'Olá Gisela! Gostaria de conhecer seu catálogo e solicitar um orçamento de presente/artesanato.'
  );
  const whatsappUrl = `https://wa.me/5511950191725?text=${whatsappMessage}`;

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-[#faf8f5] via-[#fdf5f8] to-[#faf0f4] text-slate-900 overflow-hidden">
      {/* Ambient background glows & texture */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-purple-200/35 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-dot-pattern-light opacity-60 pointer-events-none"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] relative z-10">
        
        {/* Column 1 on mobile (Image Carousel) / Column 2 on desktop */}
        <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-6 relative w-full h-[340px] sm:h-[440px] lg:h-auto min-h-full overflow-hidden pointer-events-none [clip-path:polygon(0_0,_100%_0,_100%_90%,_0_100%)] lg:[clip-path:polygon(14%_0,_100%_0,_100%_100%,_0%_100%)]">
          {carouselImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Subtle overlay gradient to blend bottom edge on small screens */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5]/60 via-transparent to-transparent lg:hidden z-20"></div>
        </div>

        {/* Column 2 on mobile (Text Content) / Column 1 on desktop */}
        <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-6 px-6 sm:px-12 lg:pl-16 xl:pl-24 py-10 lg:py-20 flex flex-col justify-center space-y-6 sm:space-y-8 z-10 text-left">
          
          <FadeUp delay={0} yOffset={16} className="space-y-6">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-slate-900 leading-tight tracking-tight">
              Traga a <span className="font-extrabold text-slate-950">beleza da natureza</span> e o{' '}
              <span className="font-extrabold text-[#dc288b] relative inline-block">
                aconchego das plantas
                <UnderlineSwoosh />
              </span>{' '}
              para a sua casa.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-xl font-medium">
              <strong>Kokedamas japonesas</strong>, <strong>arranjos de suculentas</strong> e <strong>mimos afetivos</strong> feitos à mão. O toque de carinho que falta no seu lar ou no presente de quem é especial.
            </p>

            {/* High Conversion CTA Buttons */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd59] text-white font-extrabold text-base py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-center"
                >
                  <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5.5 h-5.5 shrink-0" />
                  <span>Escolher no WhatsApp</span>
                </a>

                <a
                  href="https://www.instagram.com/gisela_arranjos_kokedamas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#dc288b] via-[#f75bb6] to-[#8e2038] hover:opacity-95 text-white font-extrabold text-base py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-center"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Ver Bastidores no Instagram</span>
                </a>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Atendimento das 09h às 21h • Entrega em São Caetano do Sul e região.
              </p>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 sm:gap-4 border-t border-rose-200/70 text-slate-700">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <MapPin className="w-4 h-4 text-[#dc288b] shrink-0" />
                <span className="text-[11px] sm:text-sm font-semibold">São Caetano & Região</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Clock className="w-4 h-4 text-[#dc288b] shrink-0" />
                <span className="text-[11px] sm:text-sm font-semibold">Atendimento 09h às 21h</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Sparkles className="w-4 h-4 text-[#dc288b] shrink-0" />
                <span className="text-[11px] sm:text-sm font-semibold">Peças Sob Encomenda</span>
              </div>
            </div>
          </FadeUp>

        </div>

      </div>
    </section>
  );
}

