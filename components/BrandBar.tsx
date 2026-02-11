import React from "react";

const BrandBar: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-40 flex flex-col items-center justify-center text-center gap-6 md:gap-8">
        {/* Brand Name with generic 'cut' effect style */}
        <div className="relative inline-block">
          <img src="images/logo.svg" alt="Logo" className="w-80 h-50" />
        </div>

        {/* Subtitle */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-3xl font-bold text-slate-900 tracking-[0.2em] uppercase">
            Equipo – Confianza – Compromiso
          </h3>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandBar;
