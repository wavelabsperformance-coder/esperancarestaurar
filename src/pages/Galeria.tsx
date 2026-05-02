import { useState } from "react";
import SectionFadeIn from "@/components/SectionFadeIn";
import Lightbox from "@/components/Lightbox";
import heroGaleriaImg from "@/assets/hero-galeria.jpg";

import estruturaImg from "@/assets/clinica-estrutura.jpg";
import novoImg from "@/assets/imagem-2.jpeg";
import galeriaRefeitorio from "@/assets/imagem-6.jpeg";
import galeriaExercicio from "@/assets/imagem-5.jpeg";
import galeriaEspiritualidade from "@/assets/galeria-espiritualidade.jpg";
import galeriaRecepcao from "@/assets/imagem-4.jpeg";
import galeriaLavanderia from "@/assets/imagem-3.jpeg";
import galeriaEnfermaria from "@/assets/imagem-7.jpeg";
import equipeImg from "@/assets/equipe-profissional.jpg";

const images = [
  { src: galeriaRecepcao, alt: "Recepção e entrada" },
  { src: galeriaRefeitorio, alt: "Refeitório" },
  { src: galeriaExercicio, alt: "Atividades físicas" },
  { src: galeriaEspiritualidade, alt: "Espaço de espiritualidade" },
  { src: galeriaLavanderia, alt: "Lavanderia" },
  { src: galeriaEnfermaria, alt: "Enfermaria" },
  { src: estruturaImg, alt: "Estrutura geral" },
  { src: novoImg, alt: "Novo começo" },
  { src: equipeImg, alt: "Equipe profissional" },
];

const Galeria = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <img
          src={heroGaleriaImg}
          alt="Galeria da clínica"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={600}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
        <div className="relative z-10 text-center px-4">
          <SectionFadeIn>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">
              Conheça nosso espaço
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
              Galeria
            </h1>
            <p className="mt-4 font-body text-lg text-primary-foreground/85 max-w-2xl mx-auto">
              Veja a estrutura e o ambiente onde a recuperação acontece.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <SectionFadeIn key={img.alt + i} delay={i * 0.04}>
              <div
                className="relative break-inside-avoid overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={768}
                />

                {/* Overlay corrigido */}
                <div className="absolute inset-0 pointer-events-none bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 rounded-2xl" />
              </div>
            </SectionFadeIn>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + images.length) % images.length
            )
          }
          onNext={() =>
            setLightboxIndex((lightboxIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Galeria;