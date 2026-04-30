import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/75">
      <div className="container-narrow mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Marca */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold text-background mb-3">
              Esperança e Restaurar Vidas
            </h3>
            <p className="font-body text-sm leading-relaxed text-background/60 max-w-md">
              Comunidade terapêutica dedicada ao tratamento da dependência química,
              com escuta acolhedora, equipe multidisciplinar e cuidado humano em
              cada etapa da recuperação.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-white transition-transform hover:scale-110"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="font-display text-base font-semibold text-background mb-4">
              Institucional
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/sobre" className="font-body text-sm hover:text-background transition-colors">Sobre nós</Link>
              <Link to="/tratamento" className="font-body text-sm hover:text-background transition-colors">Tratamento</Link>
              <Link to="/equipe" className="font-body text-sm hover:text-background transition-colors">Equipe</Link>
              <Link to="/internacao" className="font-body text-sm hover:text-background transition-colors">Internação</Link>
              <Link to="/galeria" className="font-body text-sm hover:text-background transition-colors">Galeria</Link>
              <Link to="/blog" className="font-body text-sm hover:text-background transition-colors">Blog</Link>
              <Link to="/contato" className="font-body text-sm hover:text-background transition-colors">Contato</Link>
            </div>
          </div>

          {/* Políticas + LGPD */}
          <div>
            <h4 className="font-display text-base font-semibold text-background mb-4">
              Políticas e LGPD
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/politica-de-privacidade" className="font-body text-sm hover:text-background transition-colors">Política de Privacidade</Link>
              <Link to="/politica-de-cookies" className="font-body text-sm hover:text-background transition-colors">Política de Cookies</Link>
              <Link to="/termos-de-uso" className="font-body text-sm hover:text-background transition-colors">Termos de Uso</Link>
              <Link to="/aviso-legal" className="font-body text-sm hover:text-background transition-colors">Aviso Legal</Link>
            </div>

            <div className="mt-6 space-y-2.5">
              <div className="flex items-center gap-2 text-background/70">
                <Clock className="h-4 w-4 text-background/50" />
                <span className="font-body text-sm">Atendimento 24 horas</span>
              </div>
              <a
                href="https://maps.app.goo.gl/7bdnuUSQU7hdzidXA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-background transition-colors"
              >
                <MapPin className="h-4 w-4 text-background/50 mt-0.5" />
                <span className="font-body text-sm">Ver no Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-background/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-body text-xs text-background/50">
              © {year} Esperança e Restaurar Vidas — Comunidade Terapêutica. Todos os direitos reservados.
            </p>
            <p className="font-body text-xs text-background/50">
              Site desenvolvido por{" "}
              <span className="text-background/80 font-semibold">WaveLabs Performance</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
