import React from 'react';

const marqueeItems = [
  'Kokedamas Japonesas Exclusivas',
  'Arranjos de Suculentas & Terrários',
  'Presentes Afetivos sob Encomenda',
  'Peças Autorais 100% Feitas à Mão',
  'Arte Botânica para Interiores',
  'Entrega Cuidadosa & Embalagem Especial',
];

export default function MarqueeBanner() {
  // Duplicating the list to guarantee smooth -50% infinite translation loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#dc288b] via-[#be0e69] to-[#5c0457] text-white py-4 shadow-md border-y border-rose-300/30 select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap gap-8">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-8 shrink-0">
            <span className="text-sm sm:text-base font-black uppercase tracking-wider text-white">
              {item}
            </span>
            <span className="text-rose-200 text-xs font-bold">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
