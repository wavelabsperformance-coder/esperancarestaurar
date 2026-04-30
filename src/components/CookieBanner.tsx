import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 shadow-lg md:flex md:items-center md:justify-between md:px-8">
      <p className="font-body text-sm text-foreground/80 mb-3 md:mb-0 md:mr-6">
        Utilizamos cookies para melhorar sua experiência.{" "}
        <Link to="/politica-de-cookies" className="underline text-primary">
          Saiba mais
        </Link>
      </p>
      <div className="flex gap-3">
        <button
          onClick={accept}
          className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Aceitar
        </button>
        <button
          onClick={reject}
          className="rounded-lg border border-border px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Recusar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
