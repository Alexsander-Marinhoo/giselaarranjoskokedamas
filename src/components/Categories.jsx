import React from 'react';
import { Palette, Flower2, Sun, Gift, ArrowRight } from 'lucide-react';
import FadeUp from './FadeUp';

const categories = [
  {
    id: 'artesanatos',
    title: 'Artesanatos & Decoração',
    icon: Palette,
    badge: 'Design Exclusivo',
    image: '/assets/arranjo_floral_artesanato.webp',
    description:
      'Peças manuais delicadas, composições florais e objetos decorativos que trazem textura, aconchego e elegância autêntica para interiores.',
    whatsappMessage: 'Olá Gisela! Gostaria de consultar as peças de artesanato e decoração disponíveis sob encomenda.',
    ctaText: 'Consultar Peças de Decoração',
  },
  {
    id: 'kokedamas',
    title: 'Kokedamas Japonesas',
    icon: Flower2,
    badge: 'Técnica Ancestral',
    image: '/assets/kokedama_hanging.webp',
    description:
      'A beleza das esferas de musgo natural com plantas vivas que flutuam no ambiente. A harmonia perfeita entre a tradição oriental e o design contemporâneo.',
    whatsappMessage: 'Olá Gisela! Tenho interesse nas Kokedamas e gostaria de escolher um modelo exclusivo.',
    ctaText: 'Encomendar Kokedama Exclusiva',
  },
  {
    id: 'suculentas',
    title: 'Arranjos de Suculentas',
    icon: Sun,
    badge: 'Vida & Praticidade',
    image: '/assets/suculentas_arranjo.webp',
    description:
      'Composições esculpidas em vasos cerâmicos artesanais. Plantas duráveis, resistentes e preparadas com substrato especial de longa duração.',
    whatsappMessage: 'Olá Gisela! Gostaria de encomendar um arranjo de suculentas personalizado para meu espaço.',
    ctaText: 'Solicitar Arranjo Sob Medida',
  },
  {
    id: 'presentes',
    title: 'Presentes & Mimos Afetivos',
    icon: Gift,
    badge: 'Experiência Afetiva',
    image: '/assets/presente_personalizado.webp',
    description:
      'Kits artesanais personalizados com mensagens de carinho e detalhes botânicos criados sob medida para transformar datas especiais em memórias inesquecíveis.',
    whatsappMessage: 'Olá Gisela! Gostaria de montar um kit de presente personalizado para surpreender alguém especial.',
    ctaText: 'Montar Kit de Presente',
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <FadeUp delay={0} yOffset={16} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-[#dc288b] tracking-wider uppercase bg-rose-100/70 px-4 py-1.5 rounded-full inline-block">
            Coleções & Especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight">
            Conheça <span className="font-extrabold text-slate-950">coleções botânicas</span> criadas para{' '}
            <span className="font-extrabold text-[#dc288b] underline decoration-[#dc288b] underline-offset-6 decoration-3">
              encantar e durar.
            </span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Cada criação une afeto, rigor estético e acabamento minucioso. Selecione uma especialidade e solicite seu orçamento personalizado no WhatsApp.
          </p>
        </FadeUp>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => {
            const IconComponent = cat.icon;
            const encodedMsg = encodeURIComponent(cat.whatsappMessage);
            const waUrl = `https://wa.me/5511999999999?text=${encodedMsg}`;

            return (
              <FadeUp
                key={cat.id}
                delay={index * 0.05}
                yOffset={16}
                className="bg-[#faf8f5] rounded-3xl overflow-hidden border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Category Image Preview */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#dc288b] text-xs font-extrabold px-3 py-1 rounded-full shadow-2xs">
                    {cat.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-[#dc288b]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#dc288b] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Direct WhatsApp CTA */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-sm py-3 px-4 rounded-xl transition-all w-full shadow-2xs group/btn"
                  >
                    <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5 shrink-0" />
                    <span>{cat.ctaText || 'Consultar no WhatsApp'}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
