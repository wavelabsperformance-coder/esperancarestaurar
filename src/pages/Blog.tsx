import SectionFadeIn from "@/components/SectionFadeIn";
import { ArrowRight, Calendar } from "lucide-react";
import blogHeroImg from "@/assets/blog-hero.jpg";
import blogPost1Img from "@/assets/blog-post-1.jpg";
import blogPost2Img from "@/assets/blog-post-2.jpg";
import blogPost3Img from "@/assets/blog-post-3.jpg";
import blogPost4Img from "@/assets/blog-post-4.jpg";
import blogPost5Img from "@/assets/blog-post-5.jpg";
import blogPost6Img from "@/assets/blog-post-6.jpg";

const posts = [
  {
    title: "Como funciona o tratamento para dependência química?",
    excerpt: "Entenda as etapas do tratamento, desde o acolhimento até a reinserção social, e como a metodologia dos 12 passos pode transformar vidas.",
    image: blogPost1Img,
    date: "10 de Abril, 2026",
    link: "https://example.com/tratamento-dependencia-quimica",
  },
  {
    title: "O papel da família na recuperação do dependente",
    excerpt: "A família é parte fundamental do processo de recuperação. Saiba como apoiar seu ente querido durante o tratamento e fortalecer os laços.",
    image: blogPost2Img,
    date: "05 de Abril, 2026",
    link: "https://example.com/familia-na-recuperacao",
  },
  {
    title: "Meditação e saúde mental na reabilitação",
    excerpt: "Práticas de meditação e mindfulness são aliadas poderosas no combate à dependência. Descubra como elas são aplicadas no tratamento.",
    image: blogPost3Img,
    date: "28 de Março, 2026",
    link: "https://example.com/meditacao-reabilitacao",
  },
  {
    title: "Sinais de que alguém precisa de ajuda profissional",
    excerpt: "Reconhecer os sinais da dependência é o primeiro passo. Entenda quando é hora de buscar tratamento especializado para quem você ama.",
    image: blogPost4Img,
    date: "20 de Março, 2026",
    link: "https://example.com/sinais-dependencia",
  },
  {
    title: "Os 12 passos: um caminho de transformação",
    excerpt: "Conheça a metodologia dos 12 passos, utilizada mundialmente, e entenda como ela ajuda na construção de uma vida livre da dependência.",
    image: blogPost5Img,
    date: "15 de Março, 2026",
    link: "https://example.com/12-passos-transformacao",
  },
  {
    title: "Autocuidado e inteligência emocional na recuperação",
    excerpt: "Aprender a lidar com as próprias emoções é essencial para a recuperação. Veja como desenvolvemos essa habilidade no tratamento.",
    image: blogPost6Img,
    date: "10 de Março, 2026",
    link: "https://example.com/autocuidado-recuperacao",
  },
];

const Blog = () => {
  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <img src={blogHeroImg} alt="Blog sobre recuperação e tratamento" className="absolute inset-0 h-full w-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 text-center px-4">
          <SectionFadeIn>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">Conteúdo</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Blog</h1>
            <p className="mt-4 font-body text-lg text-primary-foreground/85 max-w-2xl mx-auto">
              Informações, orientações e conteúdos sobre recuperação e saúde mental.
            </p>
          </SectionFadeIn>
        </div>
      </section>

      {/* POSTS */}
      <section className="section-padding">
        <div className="container-narrow mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <SectionFadeIn key={post.title} delay={i * 0.08}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-card overflow-hidden transition-shadow hover:shadow-xl h-full"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="font-body text-xs">{post.date}</span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 font-body text-sm font-semibold text-primary">
                    Ler mais <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </SectionFadeIn>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
