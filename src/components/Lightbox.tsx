import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const img = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center" onClick={onClose}>
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-background/70 hover:text-background transition-colors z-10"
        aria-label="Fechar"
      >
        <X className="h-8 w-8" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-background/60 hover:text-background transition-colors z-10"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-background/60 hover:text-background transition-colors z-10"
        aria-label="Próxima"
      >
        <ChevronRight className="h-10 w-10" />
      </button>

      <div className="max-w-5xl max-h-[85vh] px-4" onClick={(e) => e.stopPropagation()}>
        <img
          src={img.src}
          alt={img.alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-all duration-300"
        />
        <p className="text-center text-background/70 font-body text-sm mt-4">
          {img.alt} — {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

export default Lightbox;
