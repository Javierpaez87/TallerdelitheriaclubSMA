// src/components/WhatsAppButton.tsx
import { useLocation } from "react-router-dom";

const WhatsAppButton = () => {
  const location = useLocation();
  const phoneNumber = "549XXXXXXXXXX"; // Reemplazalo con tu número
  const baseUrl = `https://wa.me/${phoneNumber}?text=`;

  let message = "Hola, quisiera hacer una consulta sobre el Taller de Luthería Club";
  if (location.pathname === "/lutheria-camp") {
    message = "Hola quisiera consultar por mas informacion de Lutheria Camp";
  } else if (location.pathname === "/clases") {
    message = "Hola quisiera consultar por mas informacion de Clases de lutheria";
  }

  return (
    <a
      href={baseUrl + encodeURIComponent(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      Contacto por WhatsApp
    </a>
  );
};

export default WhatsAppButton;
