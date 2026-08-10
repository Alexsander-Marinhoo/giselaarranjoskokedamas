import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import FadeUp from './FadeUp';
import UnderlineSwoosh from './UnderlineSwoosh';

export default function AboutCraft() {
  const whatsappMessage = encodeURIComponent(
    'Olá Gisela! Gostaria de conversar com você sobre uma peça sob medida.'
  );
  const whatsappUrl = `https://wa.me/5511950191725?text=${whatsappMessage}`;

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-gradient-to-br from-white via-[#fcf5f8] to-[#faf0f4] relative overflow-hidden">
      {/* Ambient background glows & texture */}
      <div className="absolute top-1/2 -left-20 w-[450px] h-[450px] bg-rose-200/35 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-dot-pattern-light opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image showcase */}
          <FadeUp delay={0} yOffset={16} className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-200 to-purple-200 rounded-3xl blur-xl opacity-60"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/assets/1367b70a-2e2b-4450-9363-7f5747dd4c5b.webp"
                  alt="Processo artesanal de confecção das Kokedamas e Arranjos da Gisela"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
              </div>
            </div>
          </FadeUp>

          {/* Right Column: Narrative & Values */}
          <FadeUp delay={0.08} yOffset={16} className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-tight">
              Mais que plantas, criamos <span className="font-extrabold text-slate-950">detalhes que acolhem</span> e transformam{' '}
              <span className="font-extrabold text-[#dc288b] relative inline-block">
                qualquer ambiente.
                <UnderlineSwoosh />
              </span>
            </h2>

            <p className="text-[#334155] text-base sm:text-lg leading-relaxed font-medium">
              Cada Kokedama e arranjo é feito à mão com musgo natural, substrato de qualidade e espécies fáceis de cuidar. O toque de afeto e natureza que transforma seu espaço.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-1.5 rounded-full bg-rose-100 text-[#dc288b] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Plantas Selecionadas & Saudáveis</h4>
                  <p className="text-slate-600 text-sm">
                    Cultivadas com carinho e preparadas para durar muito tempo no seu lar com cuidados simples.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-1.5 rounded-full bg-rose-100 text-[#dc288b] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Design Delicado & Exclusivo</h4>
                  <p className="text-slate-600 text-sm">
                    Cada peça é produzida individualmente à mão com atenção aos detalhes para ser única.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-1.5 rounded-full bg-rose-100 text-[#dc288b] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Pronto para Presentear</h4>
                  <p className="text-slate-600 text-sm">
                    Todas as encomendas acompanham embalagens charmosas, cartões carinhosos e guia prático de rega.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd59] text-white font-extrabold text-lg py-4 px-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6 shrink-0" />
                <span>Conversar com a Artesã Gisela</span>
              </a>
            </div>

          </FadeUp>

        </div>
      </div>
    </section>
  );
}
