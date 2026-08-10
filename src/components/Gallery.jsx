import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeUp from './FadeUp';
import UnderlineSwoosh from './UnderlineSwoosh';

const products = [
  {
    id: 1,
    name: 'Mini Kokedama de Suculenta',
    category: 'kokedamas',
    categoryName: 'Kokedama',
    tag: 'Mais Desejada',
    image: '/assets/2144c9f9-15f9-4d80-9d00-0606298c18e3.png',
    description: 'Mini esfera de musgo em macramê magenta com suculenta vibrante e suporte de madeira.',
    whatsappText: 'Olá Gisela! Quero encomendar a Mini Kokedama de Suculenta no Suporte.',
  },
  {
    id: 2,
    name: 'Arranjo Floral Cerejeira & Terracota',
    category: 'artesanatos',
    categoryName: 'Artesanatos',
    tag: 'Peça Autoral',
    image: '/assets/1367b70a-2e2b-4450-9363-7f5747dd4c5b.png',
    description: 'Vaso delicado com flores de cerejeira rosa acompanhado de garrafinhas decorativas artesanais.',
    whatsappText: 'Olá Gisela! Me interessei pelo Arranjo Floral Cerejeira & Terracota.',
  },
  {
    id: 3,
    name: 'Coração Botânico com Mini Flores',
    category: 'presentes',
    categoryName: 'Presentes',
    tag: 'Presente Inesquecível',
    image: '/assets/7a32c0b8-1043-4fc2-b303-ffbbb903da48.png',
    description: 'Coração artesanal envolvido em fios com arranjo de mini flores secas coloridas.',
    whatsappText: 'Olá Gisela! Gostaria de encomendar o Coração Botânico com Mini Flores.',
  },
  {
    id: 4,
    name: 'Escultura KokeCoelha Gigi',
    category: 'kokedamas',
    categoryName: 'Kokedama',
    tag: 'Criação Exclusiva',
    image: '/assets/ca4c3fd8-adf7-4f15-ae19-098b5692dc62.png',
    description: 'Escultura botânica em formato de coelhinha com laços, orelhas de musgo e base temática.',
    whatsappText: 'Olá Gisela! Quero saber valores da Escultura KokeCoelha Gigi.',
  },
  {
    id: 5,
    name: 'Kokedama Suculenta em Macramê Rosa',
    category: 'kokedamas',
    categoryName: 'Kokedama',
    tag: 'Decoração Charmosa',
    image: '/assets/f409184a-11d9-41ac-b5c1-d562ddd6a74e.png',
    description: 'Esfera de fibra rosa com amarração macramê magenta e suculenta. Prática e linda.',
    whatsappText: 'Olá Gisela! Gostaria de encomendar a Kokedama Suculenta em Macramê Rosa.',
  },
  {
    id: 6,
    name: 'Arranjo Antúrio Vermelho de Festa',
    category: 'presentes',
    categoryName: 'Presentes',
    tag: 'Edição Especial',
    image: '/assets/{58790E37-25D8-4BA8-A8DF-50D90D446D69}.png',
    description: 'Antúrio vermelho vibrante em caixa presenteável decorada com laço artesanal de cetim.',
    whatsappText: 'Olá Gisela! Gostaria de encomendar o Arranjo Antúrio Vermelho de Festa.',
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProducts =
    activeFilter === 'todos'
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section id="galeria" className="py-12 sm:py-24 bg-gradient-to-b from-[#faf8f5] via-[#f7edf3] to-[#faf8f5] relative overflow-hidden">
      {/* Ambient background glows & texture */}
      <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-rose-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <FadeUp delay={0} yOffset={16} className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4 px-2 sm:px-0">
          <span className="text-xs sm:text-sm font-bold text-[#dc288b] tracking-wider uppercase bg-rose-100/80 px-3.5 sm:px-4 py-1.5 rounded-full inline-block">
            Nossas Criações
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight">
            Escolha o <span className="font-extrabold text-slate-950">arranjo perfeito</span> para deixar seu canto ainda mais{' '}
            <span className="font-extrabold text-[#dc288b] relative inline-block">
              lindo e especial.
              <UnderlineSwoosh />
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-xl mx-auto">
            Criações exclusivas feitas à mão. Escolha seu modelo preferido ou peça um arranjo sob medida.
          </p>
        </FadeUp>

        {/* Filter Tabs - Horizontal Scrollable Pill Bar on Mobile */}
        <FadeUp delay={0.05} yOffset={12} className="flex items-center gap-2 mb-6 sm:mb-12 overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center pb-2 pt-1 -mx-2 sm:mx-0 px-2 sm:px-0">
          {[
            { id: 'todos', label: 'Ver Todas' },
            { id: 'kokedamas', label: 'Kokedamas' },
            { id: 'suculentas', label: 'Suculentas' },
            { id: 'artesanatos', label: 'Artesanatos' },
            { id: 'presentes', label: 'Kits Presente' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`whitespace-nowrap shrink-0 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full font-bold text-xs sm:text-base transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#dc288b] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-rose-50 border border-rose-200/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </FadeUp>

        {/* Product Grid - Smooth Dynamic Filter Animations without Page Scroll Jump */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-8 min-h-[380px]">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((item) => {
              const encodedText = encodeURIComponent(item.whatsappText);
              const waUrl = `https://wa.me/5511950191725?text=${encodedText}`;

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.28, ease: [0.26, 1, 0.3, 1] }}
                  className="bg-white rounded-xl sm:rounded-3xl overflow-hidden border border-rose-100 shadow-sm sm:shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col group"
                >
                  {/* Image Box */}
                  <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category Tag */}
                    <div className="absolute top-1.5 left-1.5 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-xs text-slate-900 text-[9px] sm:text-xs font-extrabold px-1.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full shadow-xs truncate max-w-[80%]">
                      {item.tag}
                    </div>

                    {/* Zoom Preview Button */}
                    <button
                      onClick={() => setSelectedImage(item)}
                      className="absolute top-1.5 right-1.5 sm:top-4 sm:right-4 bg-white/90 hover:bg-white text-slate-800 p-1.5 sm:p-2.5 rounded-full shadow-md transition-transform hover:scale-110 cursor-pointer"
                      aria-label={`Ampliar imagem de ${item.name}`}
                      title="Ver em tamanho grande"
                    >
                      <ZoomIn className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#dc288b]" />
                    </button>
                  </div>

                  {/* Content Box */}
                  <div className="p-2.5 sm:p-5 lg:p-6 flex-grow flex flex-col justify-between space-y-2 sm:space-y-4 text-left">
                    <div>
                      <span className="text-[9px] sm:text-xs font-bold text-[#dc288b] uppercase tracking-wider block">
                        {item.categoryName}
                      </span>
                      <h3 className="text-xs sm:text-lg lg:text-xl font-bold text-slate-900 mt-0.5 mb-0.5 sm:mb-2 line-clamp-2 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-slate-600 text-[10px] sm:text-xs lg:text-sm leading-tight sm:leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* WhatsApp CTA Button */}
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 sm:gap-2.5 bg-[#25D366] hover:bg-[#1ebd59] text-white font-extrabold text-[11px] sm:text-base py-2 sm:py-3.5 px-2 sm:px-5 rounded-lg sm:rounded-2xl transition-all shadow-xs sm:shadow-md hover:shadow-lg w-full text-center"
                    >
                      <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-3.5 h-3.5 sm:w-5.5 sm:h-5.5 shrink-0" />
                      <span className="hidden sm:inline">Encomendar no WhatsApp</span>
                      <span className="sm:hidden">Encomendar</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-2.5 rounded-full z-10 transition-colors cursor-pointer"
              aria-label="Fechar visualização"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="h-80 sm:h-96 overflow-hidden bg-slate-100">
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-4 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#dc288b] uppercase tracking-wider">
                  {selectedImage.categoryName}
                </span>
                <span className="text-xs font-semibold bg-rose-100 text-[#dc288b] px-3 py-1 rounded-full">
                  {selectedImage.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {selectedImage.name}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {selectedImage.description}
              </p>
              <a
                href={`https://wa.me/5511950191725?text=${encodeURIComponent(selectedImage.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd59] text-white font-extrabold text-lg py-4 px-6 rounded-2xl w-full text-center shadow-lg"
              >
                <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6 shrink-0" />
                <span>Pedir este modelo no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
