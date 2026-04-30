import SectionFadeIn from "@/components/SectionFadeIn";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Phone, Heart, Target, Eye, Sparkles } from "lucide-react";
import estruturaImg from "@/assets/clinica-estrutura.jpg";
import quartoImg from "@/assets/quarto-clinica.jpg";
import heroSobreImg from "@/assets/hero-sobre.jpg";
import familiaImg from "@/assets/familia-reunida.jpg";

const valores = [
  { icon: Heart, title: "Amor ao próximo", desc: "Cada pessoa que chega aqui é recebida com respeito, empatia e cuidado genuíno." },
  { icon: Target, title: "Compromisso com resultados", desc: "Trabalhamos com seriedade e dedicação para que a recuperação seja real e duradoura." },
  { icon: Eye, title: "Transparência", desc: "Comunicação clara e honesta com o paciente e sua família, em cada etapa." },
  { icon: Sparkles, title: "Esperança", desc: "Acreditamos na capacidade de transformação de cada ser humano, sem exceção." },
];

const Sobre = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <img src={heroSobreImg} alt="Sobre a clínica Esperança e Restaurar Vidas" className="absolute inset-0 h-full w-full object-cover" width={1920} height={600} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 text-center px-4">
          <SectionFadeIn>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">Quem somos</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
              Nossa História
            </h1>
            <p className="mt-4 font-body text-lg text-primary-foreground/85 max-w-2xl mx-auto">
              Uma instituição nascida do propósito de restaurar vidas com seriedade e humanidade.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto grid md:grid-cols-2 gap-12 items-center">
          <SectionFadeIn>
            <p className="font-body text-sm uppercase tracking-[0.15em] text-primary font-semibold mb-2">A origem</p>
            <h2 className="font-display text-3xl font-bold text-foreground">De onde viemos</h2>
            <p className="mt-5 font-body text-base leading-relaxed text-muted-foreground">
              A Comunidade Terapêutica <strong className="text-foreground">Esperança e Restaurar Vidas</strong> nasceu da vivência e da dor de quem conhece de perto os efeitos da dependência química. Fundada com base em valores humanos e cristãos, nossa instituição existe para oferecer um caminho real de recuperação.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
              Nosso processo terapêutico utiliza o <strong className="text-foreground">Plano Terapêutico Singular (PTS)</strong>, que permite um cuidado verdadeiramente individualizado — respeitando a história, as crenças e a subjetividade de cada acolhido.
            </p>
          </SectionFadeIn>
          <SectionFadeIn delay={0.2}>
            <img src={estruturaImg} alt="Estrutura interna da clínica" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" loading="lazy" width={1024} height={1024} />
          </SectionFadeIn>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto grid md:grid-cols-2 gap-12 items-center">
          <SectionFadeIn>
            <img src={quartoImg} alt="Acomodações da clínica" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" loading="lazy" width={1280} height={720} />
          </SectionFadeIn>
          <SectionFadeIn delay={0.2}>
            <p className="font-body text-sm uppercase tracking-[0.15em] text-primary font-semibold mb-2">Nosso propósito</p>
            <h2 className="font-display text-3xl font-bold text-foreground">Missão</h2>
            <p className="mt-5 font-body text-base leading-relaxed text-muted-foreground">
              Promover a recuperação integral de pessoas em situação de dependência química, por meio de um tratamento humanizado, estruturado e baseado em evidências — em um ambiente seguro onde o paciente pode se reconectar consigo mesmo, com sua família e com a sociedade.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
              Mais do que tratar a dependência, buscamos restaurar a dignidade, a autoestima e a capacidade de cada pessoa viver uma vida plena, saudável e livre.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      {/* VALORES */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <SectionFadeIn>
            <h2 className="font-display text-3xl font-bold text-foreground text-center">Nossos Valores</h2>
            <p className="mt-3 font-body text-center text-muted-foreground max-w-lg mx-auto">
              Os princípios que guiam cada decisão e cada ação dentro da comunidade.
            </p>
          </SectionFadeIn>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {valores.map((v, i) => (
              <SectionFadeIn key={v.title} delay={i * 0.1}>
                <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-7 hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{v.title}</h3>
                    <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VISÃO + CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={familiaImg} alt="Família reunida" className="h-full w-full object-cover" loading="lazy" width={1024} height={1024} />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </div>
        <div className="relative z-10 container-narrow mx-auto px-4 py-24 text-center">
          <SectionFadeIn>
            <p className="font-body text-sm uppercase tracking-[0.15em] text-primary-foreground/70 mb-3">Visão</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground max-w-2xl mx-auto">
              Ser referência em acolhimento e transformação de vidas no tratamento de dependência química.
            </h2>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-4 text-lg font-bold text-primary transition-transform hover:scale-105 shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </SectionFadeIn>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
