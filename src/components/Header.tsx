import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Tratamento", path: "/tratamento" },
  { label: "Equipe", path: "/equipe" },
  { label: "Internação", path: "/internacao" },
  { label: "Galeria", path: "/galeria" },
  { label: "Blog", path: "/blog" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-primary">Esperança e Restaurar</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 rounded-lg bg-[hsl(142,70%,45%)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Falar agora
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="lg:hidden border-t border-border bg-card px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 font-body text-base font-medium transition-colors ${
                location.pathname === item.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[hsl(142,70%,45%)] px-4 py-3 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
