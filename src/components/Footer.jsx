import React from 'react';
import { Heart, ArrowUp, MapPin, Clock, Sparkles } from 'lucide-react';

export default function Footer() {
  const whatsappMessage = encodeURIComponent(
    'Olá Gisela! Vim pelo site e gostaria de mais informações.'
  );
  const whatsappUrl = `https://wa.me/5511950191725?text=${whatsappMessage}`;

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 0.6 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
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
    <footer className="bg-gradient-to-b from-slate-900 via-[#0f172a] to-[#0a0f1d] text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Top glowing ambient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#dc288b]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Logo */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div>
              <img
                src="/modelo/logo.svg"
                alt="Gisela Arranjos Logo"
                className="h-14 w-auto bg-white/95 p-2 rounded-2xl shadow-sm"
              />
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Kokedamas, arranjos de suculentas e presentes afetivos feitos à mão com amor e carinho.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/gisela_arranjos_kokedamas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-[#dc288b] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram da Gisela Arranjos"
                title="Siga no Instagram @gisela_arranjos_kokedamas"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp da Gisela Arranjos"
                title="Falar no WhatsApp"
              >
                <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6 shrink-0" />
              </a>
            </div>
          </div>

          {/* Atendimento & Entrega Details */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-white font-extrabold text-lg tracking-wide uppercase">
              Atendimento & Entrega
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#dc288b] shrink-0 mt-0.5" />
                <span><strong>Entrega:</strong> São Caetano do Sul e região.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-[#dc288b] shrink-0 mt-0.5" />
                <span><strong>Horário:</strong> Todos os dias, das 09h às 21h.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles className="w-5 h-5 text-[#dc288b] shrink-0 mt-0.5" />
                <span><strong>Produção:</strong> Peças artesanais sob encomenda.</span>
              </li>
            </ul>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-white font-extrabold text-lg tracking-wide uppercase">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="hover:text-rose-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#galeria" onClick={(e) => handleNavClick(e, '#galeria')} className="hover:text-rose-400 transition-colors">
                  Vitrine Exclusiva
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')} className="hover:text-rose-400 transition-colors">
                  A Essência
                </a>
              </li>
              <li>
                <a href="#passos" onClick={(e) => handleNavClick(e, '#passos')} className="hover:text-rose-400 transition-colors">
                  Como Encomendar
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} Gisela Arranjos. Todos os direitos reservados.
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              Feito por{' '}
              <a
                href="https://www.instagram.com/alexsander.code/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-200 hover:text-[#dc288b] transition-colors underline decoration-[#dc288b]/50 underline-offset-4"
              >
                Alex.Code
              </a>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer text-xs font-bold uppercase tracking-wider shrink-0"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
