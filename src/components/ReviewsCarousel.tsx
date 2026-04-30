import { Star } from "lucide-react";
import SectionFadeIn from "./SectionFadeIn";

const reviews = [
  {
    name: "Maria S.",
    text:
      "Meu filho chegou destruído pela dependência e hoje voltou a sorrir. A equipe tratou ele com respeito do primeiro ao último dia. Serei grata para sempre.",
    stars: 5,
  },
  {
    name: "Carlos A.",
    text:
      "Fui acolhido sem julgamento. Aqui aprendi a olhar para mim de outro jeito. Estou há mais de um ano em recuperação e devo isso à equipe.",
    stars: 5,
  },
  {
    name: "Ana Paula R.",
    text:
      "Tentamos vários lugares antes. Foi aqui que meu marido finalmente conseguiu. O acompanhamento com a família fez toda a diferença pra gente.",
    stars: 5,
  },
  {
    name: "José M.",
    text:
      "Lugar sério, limpo, organizado e com profissionais que realmente se importam. Recomendo para qualquer família que esteja sofrendo.",
    stars: 5,
  },
  {
    name: "Fernanda L.",
    text:
      "A monitoria 24h me passou segurança desde o primeiro dia. Meu irmão hoje trabalha, voltou a estudar e reconstruiu a vida. Obrigada por tudo.",
    stars: 5,
  },
];

const ReviewsCarousel = () => {
  // Duplica para criar loop infinito sem corte
  const loop = [...reviews, ...reviews];

  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container-narrow mx-auto">
        <SectionFadeIn>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold text-center mb-3">
            Depoimentos reais
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center">
            Histórias de quem confiou na gente
          </h2>
          <p className="mt-3 font-body text-center text-muted-foreground max-w-xl mx-auto">
            Avaliações verificadas de familiares e pessoas que passaram pela nossa comunidade.
          </p>
        </SectionFadeIn>
      </div>

      <div className="relative mt-12 w-full overflow-hidden">
        {/* Fades laterais */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-secondary to-transparent z-10" />

        <div className="flex w-max gap-6 px-4 animate-marquee">
          {loop.map((review, i) => (
            <article
              key={i}
              className="w-[320px] md:w-[420px] flex-shrink-0 bg-card rounded-2xl border border-border p-7 shadow-sm"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="font-body text-[15px] leading-relaxed text-foreground/90">
                “{review.text}”
              </p>
              <p className="mt-5 font-body text-sm font-semibold text-primary">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
