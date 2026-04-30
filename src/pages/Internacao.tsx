import SectionFadeIn from "@/components/SectionFadeIn";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { CheckCircle2, HelpCircle, ShieldCheck, HeartHandshake } from "lucide-react";
import heroInternacaoImg from "@/assets/hero-internacao.jpg";
import estruturaImg from "@/assets/clinica-estrutura.jpg";

const tipos = [
  {
    title: "Internação Voluntária",
    destaque: "Quando o próprio paciente decide buscar ajuda",
    desc:
      "Acontece quando a pessoa reconhece que perdeu o controle e aceita iniciar o tratamento. É o cenário com maior chance de adesão, porque parte de uma decisão consciente.",
    pontos: [
      "Assinatura do termo de consentimento pelo próprio paciente",
      "Engajamento mais profundo nas etapas terapêuticas",
      "Possibilidade de solicitar alta a qualquer momento, conforme avaliação clínica",
    ],
  },
  {
    title: "Internação Involuntária",
    destaque: "Quando a família precisa agir para proteger",
    desc:
      "Indicada quando o dependente já não tem condição de pedir ajuda sozinho. A solicitação parte de um familiar ou responsável legal, é autorizada por médico e comunicada ao Ministério Público em até 72 horas, conforme a Lei 10.216/2001.",
    pontos: [
      "Solicitação feita por familiar ou responsável legal",
      "Avaliação e laudo médico obrigatórios para a internação",
      "Comunicação formal ao Ministério Público em até 72 horas",
    ],
  },
  {
    title: "Internação Compulsória",
    destaque: "Determinada por decisão judicial",
    desc:
      "Aplicada em situações graves, com risco real à vida do paciente ou de terceiros. Acontece somente por ordem judicial, com base em laudo médico, e independe da vontade do paciente ou da família.",
    pontos: [
      "Determinada exclusivamente pela Justiça",
      "Fundamentada em laudo médico circunstanciado",
      "Indicada quando outras alternativas se mostraram insuficientes",
    ],
  },
];

const faq = [
  {
    q: "Posso visitar meu familiar durante a internação?",
    a: "Sim. Temos dias e horários específicos para visitas, organizados de forma a não interferir no processo terapêutico. A equipe orienta cada família sobre o melhor momento para o reencontro.",
  },
  {
    q: "Quanto tempo dura o tratamento?",
    a: "O nosso programa tem duração padrão de 120 dias. Esse tempo é necessário para que o acolhido passe pelas fases de desintoxicação, autoconhecimento, consolidação de hábitos e preparação para o retorno à vida fora da comunidade.",
  },
  {
    q: "A internação involuntária é legalizada?",
    a: "Sim. Toda internação involuntária realizada aqui segue rigorosamente a Lei 10.216/2001, com laudo médico, autorização da família e comunicação ao Ministério Público dentro do prazo legal.",
  },
  {
    q: "E se ele quiser sair antes do tempo?",
    a: "Cada caso é avaliado individualmente pela equipe técnica. Conversamos com a família, analisamos o quadro clínico e tomamos a decisão que melhor protege o acolhido. Você nunca estará sozinho nessa decisão.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Trabalhamos com diferentes possibilidades para tornar o tratamento acessível. Fale com a nossa equipe pelo WhatsApp para receber os valores e condições atualizadas.",
  },
];

const Internacao = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <img
          src={heroInternacaoImg}
          alt="Internação para dependência química"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 text-center px-4">
          <SectionFadeIn>
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary-foreground/70 mb-3">
              Orientação para famílias
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Internação
            </h1>
            <p className="mt-4 font-body text-lg text-primary-foreground/85 max-w-2xl mx-auto">
              Você não precisa atravessar esse momento sozinho. Estamos aqui para orientar cada passo.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-padding">
        <div className="container-narrow mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <SectionFadeIn>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Antes de tudo, respire
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Internar não é abandonar. É proteger.
            </h2>
            <p className="mt-6 font-body text-base md:text-lg leading-relaxed text-muted-foreground">
              Sabemos o peso da decisão que você está prestes a tomar. Internar um filho, um irmão
              ou um companheiro nunca é uma escolha simples — mas, em muitos casos, é o gesto mais
              corajoso e amoroso que uma família pode oferecer.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
              Aqui, ninguém é tratado como um número. Cada acolhido encontra um ambiente seguro,
              acompanhamento profissional e o tempo necessário para se reencontrar.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-xl bg-secondary p-4">
                <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-foreground/85 leading-snug">
                  Estrutura preparada para garantir segurança 24 horas
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-secondary p-4">
                <HeartHandshake className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-foreground/85 leading-snug">
                  Suporte contínuo à família durante todo o processo
                </p>
              </div>
            </div>
          </SectionFadeIn>
          <SectionFadeIn delay={0.2}>
            <img
              src={estruturaImg}
              alt="Ambiente seguro e acolhedor da clínica"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={1024}
              height={768}
            />
          </SectionFadeIn>
        </div>
      </section>

      {/* TIPOS */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto">
          <SectionFadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center leading-tight">
              Os três caminhos possíveis para a internação
            </h2>
            <p className="mt-3 font-body text-center text-muted-foreground max-w-2xl mx-auto">
              Entenda, com clareza, como cada modalidade funciona — e qual delas pode ser a mais
              adequada para a sua realidade.
            </p>
          </SectionFadeIn>

          <div className="mt-14 space-y-6">
            {tipos.map((t, i) => (
              <SectionFadeIn key={t.title} delay={i * 0.08}>
                <article className="rounded-2xl border border-border bg-card p-8 md:p-10 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h3 className="font-display text-2xl font-bold text-foreground leading-tight">
                      {t.title}
                    </h3>
                    <span className="self-start text-xs font-body font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {t.destaque}
                    </span>
                  </div>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {t.desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {t.pontos.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 font-body text-[15px] text-foreground/90"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </SectionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <SectionFadeIn>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-primary font-semibold text-center mb-3">
              Tire suas dúvidas
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center leading-tight">
              Perguntas frequentes
            </h2>
          </SectionFadeIn>

          <div className="mt-12 space-y-4">
            {faq.map((item, i) => (
              <SectionFadeIn key={item.q} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-card p-6 md:p-7">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground leading-snug">
                        {item.q}
                      </h3>
                      <p className="mt-2 font-body text-[15px] text-muted-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
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
            Conversar com a gente é o primeiro passo
          </h2>
          <p className="mt-4 font-body text-base md:text-lg text-primary-foreground/85 max-w-xl mx-auto">
            Estamos disponíveis 24 horas por dia para orientar você e sua família, sem cobrar nada
            por isso.
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

export default Internacao;
