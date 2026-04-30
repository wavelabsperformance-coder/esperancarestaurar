import { Shield, Clock, Heart, Users, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import SectionFadeIn from "@/components/SectionFadeIn";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import GoogleMap from "@/components/GoogleMap";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import heroImg from "@/assets/hero-acolhimento.jpg";
import estruturaImg from "@/assets/clinica-estrutura.jpg";
import novoImg from "@/assets/imagem-2.jpeg";
import galeriaEnfermaria from "@/assets/imagem-7.jpeg";
import familiaImg from "@/assets/familia-reunida.jpg";
import equipeImg from "@/assets/equipe-profissional.jpg";

const trustItems = [
  { icon: Clock, label: "Atendimento 24h", desc: "Pronto para ouvir você a qualquer hora" },
  { icon: Shield, label: "Ambiente seguro", desc: "Estrutura protegida e acolhedora" },
  { icon: Heart, label: "120 dias de cuidado", desc: "Programa terapêutico completo" },
  { icon: Users, label: "Olhar individual", desc: "Plano único para cada acolhido" },
];

const especialidades = [
  "Gerente Terapêutico",
  "Terapeutas em Dependência Química",
  "Psicólogo",
  "Médico Psiquiatra",
  "Enfermeiras",
  "Educador Físico",
  "Monitores em Dependência Química",
];

const diferenciais = [
  {
    title: "Tratamento humanizado",
    desc:
      "Cada história é única. Por isso o cuidado começa pela escuta — sem julgamento, sem pressa e com respeito ao tempo de cada acolhido.",
    img: novoImg,
  },
  {
    title: "Acompanhamento integrado",
    desc:
      "Médicos, psicólogos, terapeutas e monitores trabalham lado a lado, formando uma rede de apoio que cuida da pessoa por inteiro.",
    img: galeriaEnfermaria,
  },
  {
    title: "Suporte à família",
    desc:
      "Realizamos reuniões semanais com familiares dos acolhidos, promovendo diálogos abertos, acompanhamento contínuo e orientações sobre o tratamento e temas relevantes.",
    img: familiaImg,
  },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Acolhimento e cuidado na comunidade terapêutica"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </div>
        <div className="relative z-10 container-narrow mx-auto px-4 py-32">
          <SectionFadeIn>
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary-foreground/70 mb-5">
              Comunidade Terapêutica
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.05] max-w-3xl">
              Quando a dependência tira tudo,
              <br />
              <span className="text-primary-foreground/90">a recuperação devolve a vida.</span>
            </h1>
          </SectionFadeIn>
          <SectionFadeIn delay={0.2}>
            <p className="mt-7 font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
              Internação imediata, equipe multidisciplinar e um programa de 120 dias pensado para
              acolher seu familiar com dignidade e devolver à família a paz que ela merece.
            </p>
          </SectionFadeIn>
          <SectionFadeIn delay={0.35}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl("Olá, preciso falar com um especialista sobre internação.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-xl bg-[hsl(142,70%,45%)] px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105 shadow-xl"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Falar com um especialista
              </a>
              <a
                href={getWhatsAppUrl("Olá, preciso de ajuda urgente para internação.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary-foreground/30 px-8 py-4 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Solicitar ajuda agora
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-card border-b border-border">
        <div className="container-narrow mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustItems.map((item) => (
              <SectionFadeIn key={item.label}>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-1">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="font-display text-sm font-bold text-foreground">{item.label}</span>
                  <span className="font-body text-xs text-muted-foreground leading-snug">{item.desc}</span>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE MULTIDISCIPLINAR */}
      <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="container-narrow mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <SectionFadeIn>
            <img
              src={equipeImg}
              alt="Equipe multidisciplinar da comunidade terapêutica"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5] max-w-md mx-auto lg:max-w-none"
              loading="lazy"
              width={900}
              height={1100}
            />
          </SectionFadeIn>
          <SectionFadeIn delay={0.15}>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Quem cuida do seu familiar
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Equipe Multidisciplinar
            </h2>
            <p className="mt-5 font-body text-base md:text-lg leading-relaxed text-muted-foreground">
              Profissionais experientes que se completam para oferecer um cuidado seguro,
              técnico e profundamente humano. Cada acolhido é acompanhado por:
            </p>

            <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {especialidades.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-body text-[15px] text-foreground/90"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={getWhatsAppUrl("Olá, gostaria de falar com um especialista da Esperança e Restaurar Vidas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-[hsl(142,70%,45%)] px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-105 shadow-lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar com um especialista
            </a>
          </SectionFadeIn>
        </div>
      </section>

      {/* SOBRE RESUMIDO */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto grid md:grid-cols-2 gap-12 items-center">
          <SectionFadeIn>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Nossa missão
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Uma instituição que cuida de verdade
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
              A <strong className="text-foreground">Esperança e Restaurar Vidas</strong> nasceu para
              oferecer mais do que internação: um lugar onde a pessoa volta a se reconhecer.
              Trabalhamos com método, ética e respeito para que o tratamento seja real, e a
              recuperação, possível.
            </p>
            <a
              href="/sobre"
              className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:underline"
            >
              Conheça nossa história <ArrowRight className="h-4 w-4" />
            </a>
          </SectionFadeIn>
          <SectionFadeIn delay={0.2}>
            <img
              src={estruturaImg}
              alt="Estrutura da clínica Esperança e Restaurar Vidas"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </SectionFadeIn>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <SectionFadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center">
              Por que famílias escolhem a Esperança
            </h2>
            <p className="mt-3 font-body text-center text-muted-foreground max-w-xl mx-auto">
              Cada detalhe da nossa rotina foi construído para gerar segurança, confiança e
              resultados que se sustentam no tempo.
            </p>
          </SectionFadeIn>
          <div className="mt-14 space-y-12">
            {diferenciais.map((d, i) => (
              <SectionFadeIn key={d.title} delay={i * 0.1}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                    <img
                      src={d.img}
                      alt={d.title}
                      className="rounded-2xl shadow-lg w-full object-cover aspect-[16/10]"
                      loading="lazy"
                      width={1024}
                      height={640}
                    />
                  </div>
                  <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                    <h3 className="font-display text-2xl md:text-[28px] font-bold text-foreground leading-tight">
                      {d.title}
                    </h3>
                    <p className="mt-4 font-body text-base text-muted-foreground leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <ReviewsCarousel />

      {/* LOCALIZAÇÃO */}
      <GoogleMap />

      {/* CTA FINAL */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={familiaImg}
            alt="Família reunida após recuperação"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </div>
        <div className="relative z-10 container-narrow mx-auto px-4 py-28 text-center">
          <SectionFadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
              A recuperação começa com uma conversa.
            </h2>
            <p className="mt-4 font-body text-lg text-primary-foreground/85 max-w-xl mx-auto">
              Estamos do outro lado da mensagem, prontos para acolher você e sua família agora mesmo.
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 rounded-xl bg-[hsl(142,70%,45%)] px-10 py-4 text-lg font-semibold text-white transition-transform hover:scale-105 shadow-xl"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar com um especialista
            </a>
          </SectionFadeIn>
        </div>
      </section>
    </>
  );
};

export default Index;
