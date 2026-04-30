import SectionFadeIn from "@/components/SectionFadeIn";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import GoogleMap from "@/components/GoogleMap";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Clock, MapPin, ShieldCheck } from "lucide-react";
import heroContatoImg from "@/assets/hero-contato.jpg";
import estruturaImg from "@/assets/clinica-estrutura.jpg";

const Contato = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <img
          src={heroContatoImg}
          alt="Atendimento da Esperança e Restaurar Vidas"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 text-center px-4">
          <SectionFadeIn>
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary-foreground/70 mb-3">
              Estamos aqui para ouvir você
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Fale com a nossa equipe
            </h1>
            <p className="mt-4 font-body text-lg text-primary-foreground/85 max-w-2xl mx-auto">
              Sem formulários longos, sem espera. Uma conversa pelo WhatsApp já é um começo.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      {/* CARD + IMAGEM */}
      <section className="section-padding">
        <div className="container-narrow mx-auto grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <SectionFadeIn>
            <img
              src={estruturaImg}
              alt="Estrutura interna da comunidade terapêutica"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={1024}
              height={768}
            />
          </SectionFadeIn>

          <SectionFadeIn delay={0.15}>
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-7">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">
                  Atendimento humano
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  A primeira conversa muda tudo
                </h2>
                <p className="mt-4 font-body text-[15px] text-muted-foreground leading-relaxed">
                  Você fala diretamente com quem entende do assunto. Ouvimos sua história, tiramos
                  suas dúvidas e indicamos o caminho mais seguro para o seu familiar.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-border/60">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">Atendimento 24 horas</p>
                    <p className="font-body text-sm text-muted-foreground">
                      Inclusive finais de semana e feriados.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">Localização</p>
                    <p className="font-body text-sm text-muted-foreground">
                      Endereço completo enviado após o primeiro contato, garantindo o sigilo da família.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">Total sigilo</p>
                    <p className="font-body text-sm text-muted-foreground">
                      Tudo o que você compartilhar com a gente fica entre nós.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppUrl("Olá, gostaria de falar com o terapeuta.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-[hsl(142,70%,45%)] px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105 shadow-lg w-full"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Falar com o terapeuta
                </a>

                <a
                  href={getWhatsAppUrl("Olá, gostaria de informações sobre internação.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-xl border-2 border-primary px-8 py-4 text-lg font-semibold text-primary transition-colors hover:bg-primary/5 w-full"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp geral
                </a>

                <p className="font-body text-xs text-muted-foreground text-center">
                  Ao clicar, sua mensagem será enviada automaticamente pelo WhatsApp.
                </p>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <ReviewsCarousel />

      {/* MAPA FULL WIDTH */}
      <GoogleMap />
    </div>
  );
};

export default Contato;
