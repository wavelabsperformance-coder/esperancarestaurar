import SectionFadeIn from "@/components/SectionFadeIn";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import {
  Check,
  X as XIcon,
  Snowflake,
  Stethoscope,
  Brain,
  HeartPulse,
  Dumbbell,
  Shield,
  UtensilsCrossed,
  Shirt,
  Clock,
} from "lucide-react";
import galeriaLavanderia from "@/assets/imagem-3.jpeg";
import heroTratamentoImg from "@/assets/hero-tratamento.jpg";
import estruturaImg from "@/assets/clinica-estrutura.jpg";

const metodologias = [
  {
    title: "12 Passos",
    desc:
      "Programa reconhecido mundialmente que conduz o acolhido a um trabalho honesto de autoconhecimento, responsabilidade e mudança real de comportamento.",
  },
  {
    title: "Modelo Minnesota",
    desc:
      "Encara a dependência como doença e organiza o cuidado em torno de terapia, educação sobre o uso e construção de uma rede de suporte duradoura.",
  },
  {
    title: "Inteligência Emocional",
    desc:
      "Ajuda a reconhecer gatilhos, nomear sentimentos e responder ao que dói sem precisar do uso para silenciar a dor.",
  },
  {
    title: "Psicodinâmica",
    desc:
      "Vai além do sintoma: investiga as raízes emocionais por trás do comportamento, abrindo espaço para uma transformação profunda.",
  },
  {
    title: "Autocapacidade",
    desc:
      "Desenvolve autonomia, disciplina e habilidades práticas para que o acolhido volte para casa preparado para uma vida nova.",
  },
];

const incluso = [
  { icon: Snowflake, title: "Quartos climatizados", desc: "Conforto e descanso de qualidade durante toda a estadia" },
  { icon: Stethoscope, title: "Equipe de enfermagem", desc: "Cuidados clínicos diários, com atenção aos sinais vitais" },
  { icon: Brain, title: "Psiquiatra", desc: "Acompanhamento medicamentoso quando necessário" },
  { icon: HeartPulse, title: "Psicólogo", desc: "Sessões individuais e em grupo conduzidas com técnica e escuta" },
  { icon: Dumbbell, title: "Educador físico", desc: "Atividades regulares para fortalecer corpo e mente" },
  { icon: Shield, title: "Terapeutas em dependência", desc: "Acompanhamento terapêutico contínuo, dia após dia" },
  { icon: UtensilsCrossed, title: "Três refeições diárias", desc: "Cardápio equilibrado e nutritivo" },
  { icon: Clock, title: "Monitoria 24 horas", desc: "Suporte e segurança em todos os momentos da rotina" },
  { icon: Shirt, title: "Lavanderia inclusa", desc: "O acolhido foca no tratamento, do resto cuidamos nós" },
];

const naoIncluso = [
  "Barbearia",
  "Medicações",
  "Translados e saídas externas",
  "Produtos de higiene pessoal",
  "Lanches individuais",
  "Enxoval para internação",
];

const Tratamento = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <img
          src={heroTratamentoImg}
          alt="Tratamento para dependência química"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 text-center px-4">
          <SectionFadeIn>
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary-foreground/70 mb-3">
              Programa Terapêutico
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Nosso Tratamento
            </h1>
            <p className="mt-4 font-body text-lg text-primary-foreground/85 max-w-2xl mx-auto">
              120 dias para reorganizar a vida — com método, escuta e respeito ao tempo de cada acolhido.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <SectionFadeIn>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Como funciona
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Um tratamento que olha para a pessoa inteira
            </h2>
            <p className="mt-6 font-body text-base md:text-lg leading-relaxed text-muted-foreground">
              Nosso trabalho parte de um princípio simples: tratar a dependência sem tratar a
              pessoa não funciona. Por isso, cuidamos das emoções, da história, das relações e do
              corpo — porque tudo isso adoece junto.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
              Cada acolhido recebe um <strong className="text-foreground">Plano Terapêutico Singular (PTS)</strong>,
              construído pela equipe a partir da sua trajetória, suas crenças e suas necessidades
              específicas. Nada é tratamento de prateleira.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
              Ao longo dos 120 dias, a rotina combina terapia individual e em grupo, atividades
              físicas, vivências espirituais (sem imposição religiosa) e momentos de convivência
              que ensinam a viver de novo.
            </p>
          </SectionFadeIn>
          <SectionFadeIn delay={0.2}>
            <img
              src={galeriaLavanderia}
              alt="Sessão de terapia em grupo"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={1024}
              height={768}
            />
          </SectionFadeIn>
        </div>
      </section>

      {/* METODOLOGIAS */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto">
          <SectionFadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center leading-tight">
              As abordagens que sustentam o nosso método
            </h2>
            <p className="mt-3 font-body text-center text-muted-foreground max-w-xl mx-auto">
              Combinamos referências consagradas no tratamento da dependência química, sempre
              adaptadas à realidade de quem chega até nós.
            </p>
          </SectionFadeIn>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {metodologias.map((m, i) => (
              <SectionFadeIn key={m.title} delay={i * 0.07}>
                <div className="rounded-2xl border border-border bg-card p-7 h-full hover:shadow-lg transition-shadow">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <span className="font-display text-lg font-bold text-primary">{i + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug">
                    {m.title}
                  </h3>
                  <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUSO */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <SectionFadeIn>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold text-center mb-3">
              O que está incluso
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center leading-tight">
              Tudo que o acolhido precisa, sem surpresas no meio do caminho
            </h2>
          </SectionFadeIn>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {incluso.map((item, i) => (
              <SectionFadeIn key={item.title} delay={i * 0.05}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow h-full">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-body text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* NÃO INCLUSO */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto grid md:grid-cols-2 gap-12 items-center">
          <SectionFadeIn>
            <img
              src={estruturaImg}
              alt="Estrutura da clínica"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={1024}
              height={768}
            />
          </SectionFadeIn>
          <SectionFadeIn delay={0.15}>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Total transparência
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              O que não está incluso
            </h2>
            <p className="mt-4 font-body text-base text-muted-foreground leading-relaxed">
              Para que ninguém seja pego de surpresa, listamos abertamente o que não faz parte do
              pacote de internação:
            </p>
            <ul className="mt-6 space-y-3">
              {naoIncluso.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-body text-base text-foreground"
                >
                  <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <XIcon className="h-3 w-3 text-destructive" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary mt-0.5" />
              <p>Detalhes e valores de cada item podem ser consultados diretamente com a equipe.</p>
            </div>
          </SectionFadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center" style={{ background: "var(--cta-gradient)" }}>
        <SectionFadeIn>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
            Tem dúvidas sobre o tratamento?
          </h2>
          <p className="mt-4 font-body text-base md:text-lg text-primary-foreground/85 max-w-xl mx-auto">
            Conversamos com calma, sem pressão. Você decide o ritmo da próxima conversa.
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

export default Tratamento;
