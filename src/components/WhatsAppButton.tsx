import WhatsAppIcon from "./WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-white shadow-lg whatsapp-pulse transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;
