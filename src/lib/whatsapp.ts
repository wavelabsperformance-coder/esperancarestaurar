// Número oficial da clínica (DDI 55 + DDD 81)
export const WHATSAPP_NUMBER = "558188815248";
export const WHATSAPP_MESSAGE =
  "Olá, gostaria de falar com um especialista da Esperança e Restaurar Vidas.";

export function getWhatsAppUrl(message?: string) {
  const msg = encodeURIComponent(message || WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
