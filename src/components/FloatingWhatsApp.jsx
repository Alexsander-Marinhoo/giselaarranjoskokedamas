import React from 'react';

export default function FloatingWhatsApp() {
  const whatsappMessage = encodeURIComponent(
    'Olá Gisela! Vim pelo site e gostaria de fazer um pedido personalizado.'
  );
  const whatsappUrl = `https://wa.me/5511950191725?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Friendly Tooltip / Notification Badge */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-sm font-bold px-4 py-2.5 rounded-2xl shadow-xl border border-rose-100 hover:bg-rose-50 transition-colors animate-bounce"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
        <span>Dúvidas? Fale com a Gisela</span>
      </a>

      {/* Floating Button with public/whatsapp-icon.svg */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#1ebd59] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group focus:outline-hidden focus:ring-4 focus:ring-emerald-400"
        aria-label="Abrir conversa no WhatsApp"
        title="Falar no WhatsApp"
      >
        <img
          src="/whatsapp-icon.svg"
          alt="WhatsApp"
          className="w-10 h-10 shrink-0 group-hover:rotate-12 transition-transform"
        />
      </a>
    </div>
  );
}
