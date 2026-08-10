import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    'Olá Gisela! Vim pelo site e gostaria de tirar uma dúvida sobre seus produtos.'
  );
  const whatsappUrl = `https://wa.me/5511950191725?text=${whatsappMessage}`;

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (targetId === '#') {
      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 0.6 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      if (window.lenis) {
        window.lenis.scrollTo(targetElement, { offset: -130, duration: 0.6 });
      } else {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#dc288b] via-[#f75bb6] to-[#8e2038] text-white text-xs sm:text-sm font-semibold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <Heart className="w-4 h-4 fill-white animate-pulse" />
        <span>📍 Entrega em São Caetano e região • 🕒 Atendimento 09h às 21h • 🌸 Peças sob encomenda</span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center gap-3 group focus:outline-hidden"
        >
          <img
            src="/modelo/logo.svg"
            alt="Gisela Arranjos Logo"
            className="h-12 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links with Lenis Smooth Scroll & Animated Underline Hover */}
        <nav className="hidden md:flex items-center gap-8 text-base font-semibold text-slate-800">
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="relative py-1.5 hover:text-[#dc288b] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-0 hover:after:w-full after:bg-[#dc288b] after:transition-all after:duration-300 after:rounded-full"
          >
            Início
          </a>
          <a
            href="#galeria"
            onClick={(e) => handleNavClick(e, '#galeria')}
            className="relative py-1.5 hover:text-[#dc288b] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-0 hover:after:w-full after:bg-[#dc288b] after:transition-all after:duration-300 after:rounded-full"
          >
            Vitrine Exclusiva
          </a>
          <a
            href="#sobre"
            onClick={(e) => handleNavClick(e, '#sobre')}
            className="relative py-1.5 hover:text-[#dc288b] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-0 hover:after:w-full after:bg-[#dc288b] after:transition-all after:duration-300 after:rounded-full"
          >
            A Essência
          </a>
          <a
            href="#passos"
            onClick={(e) => handleNavClick(e, '#passos')}
            className="relative py-1.5 hover:text-[#dc288b] transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-0 hover:after:w-full after:bg-[#dc288b] after:transition-all after:duration-300 after:rounded-full"
          >
            Como Encomendar
          </a>
        </nav>

        {/* WhatsApp Header CTA Button */}
        <div className="hidden sm:flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-base px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Fale conosco pelo WhatsApp"
          >
            <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5 shrink-0" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2.5 rounded-xl text-slate-700 hover:text-[#dc288b] hover:bg-rose-50 transition-colors cursor-pointer"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-rose-100 px-4 pt-4 pb-6 space-y-3 shadow-xl">
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="block text-lg font-semibold text-slate-800 hover:text-[#dc288b] p-3 rounded-xl hover:bg-rose-50"
          >
            Início
          </a>
          <a
            href="#galeria"
            onClick={(e) => handleNavClick(e, '#galeria')}
            className="block text-lg font-semibold text-slate-800 hover:text-[#dc288b] p-3 rounded-xl hover:bg-rose-50"
          >
            Vitrine Exclusiva
          </a>
          <a
            href="#sobre"
            onClick={(e) => handleNavClick(e, '#sobre')}
            className="block text-lg font-semibold text-slate-800 hover:text-[#dc288b] p-3 rounded-xl hover:bg-rose-50"
          >
            A Essência
          </a>
          <a
            href="#passos"
            onClick={(e) => handleNavClick(e, '#passos')}
            className="block text-lg font-semibold text-slate-800 hover:text-[#dc288b] p-3 rounded-xl hover:bg-rose-50"
          >
            Como Encomendar
          </a>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-lg py-3.5 px-6 rounded-2xl w-full shadow-md text-center"
            >
              <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6 shrink-0" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
