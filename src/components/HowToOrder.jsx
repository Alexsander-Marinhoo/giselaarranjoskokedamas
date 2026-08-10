import React from 'react';
import FadeUp from './FadeUp';
import UnderlineSwoosh from './UnderlineSwoosh';

export default function HowToOrder() {
  const whatsappMessage = encodeURIComponent(
    'Olá Gisela! Quero iniciar meu pedido de presente/artesanato agora.'
  );
  const whatsappUrl = `https://wa.me/5511950191725?text=${whatsappMessage}`;

  return (
    <section id="passos" className="py-16 sm:py-24 bg-gradient-to-b from-[#faf8f5] via-[#f8eff4] to-[#f4e8ef] relative overflow-hidden border-t border-rose-100/80">
      {/* Ambient background glows & texture */}
      <div className="absolute -top-20 right-1/3 w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-purple-200/35 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-45 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <FadeUp delay={0} yOffset={16} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-[#dc288b] tracking-wider uppercase bg-rose-100/70 px-4 py-1.5 rounded-full inline-block">
            Simples & Rápido
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight">
            Como fazer seu <span className="font-extrabold text-slate-950">pedido exclusivo</span> em apenas{' '}
            <span className="font-extrabold text-[#dc288b] relative inline-block">
              3 passos simples
              <UnderlineSwoosh />
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Peça seu arranjo em 3 passos simples:
          </p>
        </FadeUp>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1 */}
          <FadeUp delay={0.04} yOffset={16} className="bg-white p-8 rounded-3xl border border-rose-100 shadow-md relative flex flex-col justify-between text-left space-y-6">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-rose-100 text-[#dc288b] font-black text-2xl flex items-center justify-center mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Escolha seu Modelo
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Navegue pelas fotos da nossa vitrine ou envie uma referência do modelo que você mais gostou.
              </p>
            </div>
            <div className="pt-2 text-xs font-bold text-[#dc288b] uppercase tracking-wider flex items-center gap-1">
              <span>Passo 1</span>
            </div>
          </FadeUp>

          {/* Step 2 */}
          <FadeUp delay={0.08} yOffset={16} className="bg-white p-8 rounded-3xl border-2 border-[#25D366]/40 shadow-lg relative flex flex-col justify-between text-left space-y-6">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 text-[#1ebd59] font-black text-2xl flex items-center justify-center mb-6">
                <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Fale no WhatsApp
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Combine detalhes como opções de plantas, vasos, cartões de presente e a data de entrega.
              </p>
            </div>
            <div className="pt-2 text-xs font-bold text-[#1ebd59] uppercase tracking-wider flex items-center gap-1">
              <span>Atendimento Direto</span>
            </div>
          </FadeUp>

          {/* Step 3 */}
          <FadeUp delay={0.12} yOffset={16} className="bg-white p-8 rounded-3xl border border-rose-100 shadow-md relative flex flex-col justify-between text-left space-y-6">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-[#5c0457] font-black text-2xl flex items-center justify-center mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Receba com Carinho
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Sua peça é preparada artesanalmente, embalada com todo cuidado e entregue no seu endereço.
              </p>
            </div>
            <div className="pt-2 text-xs font-bold text-[#5c0457] uppercase tracking-wider flex items-center gap-1">
              <span>Entrega Segura</span>
            </div>
          </FadeUp>

        </div>

        {/* Central Call to Action Banner */}
        <FadeUp delay={0.16} yOffset={16} className="mt-16 bg-gradient-to-r from-[#dc288b] via-[#be0e69] to-[#5c0457] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center space-y-6 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-medium tracking-tight">
            Quer deixar sua casa mais <span className="font-extrabold text-white">linda</span> ou surpreender alguém com um{' '}
            <span className="font-extrabold text-rose-200 relative inline-block">
              presente especial?
              <UnderlineSwoosh className="text-rose-200" />
            </span>
          </h3>
          <p className="text-rose-100 text-base sm:text-lg max-w-xl mx-auto font-medium">
            Chame no WhatsApp! Veja as opções disponíveis ou peça seu arranjo sob medida.
          </p>
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd59] text-white font-extrabold text-lg sm:text-xl py-4 sm:py-5 px-8 sm:px-10 rounded-2xl shadow-xl transition-transform hover:scale-105"
            >
              <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-7 h-7 shrink-0" />
              <span>Falar com a Gisela no WhatsApp</span>
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
