import SectionFadeIn from "@/components/SectionFadeIn";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import {
  Briefcase,
  Brain,
  HeartPulse,
  Stethoscope,
  Activity,
  Dumbbell,
  ShieldCheck,
} from "lucide-react";
import heroEquipeImg from "@/assets/hero-equipe.jpg";
import equipeImg from "@/assets/equipe-profissional.jpg";

const especialidades = [
  {
    icon: Briefcase,
    title: "Gerente Terapêutico",
    desc: "Coordena toda a rotina clínica e garante a qualidade do cuidado oferecido a cada acolhido.",
  },
  {
    icon: ShieldCheck,
    title: "Terapeutas em Dependência Química",
    desc: "Conduzem o processo terapêutico individual e em grupo com formação específica na área.",
  },
  {
    icon: Brain,
    title: "Psicólogo",
    desc: "Acompanhamento clínico, escuta qualificada e suporte emocional ao longo do tratamento.",
  },
  {
    icon: HeartPulse,
    title: "Médico Psiquiatra",
    desc: "Avaliação diagnóstica e acompanhamento medicamentoso, quando necessário, com responsabilidade técnica.",
  },
  {
    icon: Stethoscope,
    title: "Enfermeiras",
    desc: "Cuidado contínuo, controle clínico e atenção aos sinais vitais de cada acolhido.",
  },
  {
    icon: Dumbbell,
    title: "Educador Físico",
    desc: "Atividades regulares para fortalecer corpo e mente, restabelecendo disciplina e bem-estar.",
  },
  {
    icon: Activity,
    title: "Monitores em Dependência Química",
    desc: "Presença ativa 24 horas por dia, oferecendo suporte direto, segurança e acolhimento na rotina.",
  },
];

const Equipe = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <img
          src={heroEquipeImg}
          alt="Equipe profissional da clínica"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 text-center px-4">
          <SectionFadeIn>
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary-foreground/70 mb-3">
              Quem cuida de você
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Equipe Multidisciplinar
            </h1>
            <p className="mt-4 font-body text-lg text-primary-foreground/85 max-w-2xl mx-auto">
              Profissionais experientes, comprometidos e preparados para acompanhar cada etapa da recuperação.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      {/* INTRO INSTITUCIONAL */}
      <section className="section-padding">
        <div className="container-narrow mx-auto grid md:grid-cols-2 gap-12 items-center">
          <SectionFadeIn>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Nossa equipe
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Cuidado integrado, conduzido por quem entende do assunto
            </h2>
            <p className="mt-6 font-body text-base md:text-lg leading-relaxed text-muted-foreground">
              Nossa equipe multidisciplinar atua de forma integrada para tratar a dependência
              química em todas as suas dimensões — clínica, emocional, comportamental e familiar.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
              Trabalhamos lado a lado, compartilhando informações e decisões, para que cada
              acolhido receba um plano terapêutico verdadeiramente individualizado e seguro.
            </p>
          </SectionFadeIn>
          <SectionFadeIn delay={0.2}>
            <img
              src={equipeImg}
              alt="Equipe multidisciplinar em reunião clínica"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={1024}
              height={768}
            />
          </SectionFadeIn>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto">
          <SectionFadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center">
              Quem está ao seu lado durante o tratamento
            </h2>
            <p className="mt-3 font-body text-center text-muted-foreground max-w-2xl mx-auto">
              A nossa equipe é formada por profissionais qualificados nas áreas que mais importam
              para uma recuperação consistente.
            </p>
          </SectionFadeIn>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {especialidades.map((p, i) => (
              <SectionFadeIn key={p.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-card p-7 h-full hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <p.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center" style={{ background: "var(--cta-gradient)" }}>
        <SectionFadeIn>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
            Quer entender como podemos ajudar?
          </h2>
          <p className="mt-3 font-body text-base md:text-lg text-primary-foreground/85 max-w-xl mx-auto">
            Converse diretamente com nossa equipe e tire todas as suas dúvidas.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-[hsl(142,70%,45%)] px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105 shadow-xl"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar com um especialista
          </a>
        </SectionFadeIn>
      </section>
    </div>
  );
};

export default Equipe;
