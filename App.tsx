// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clases from "./pages/Clases";
import LutheriaCamp from "./pages/LutheriaCamp";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="/lutheria-camp" element={<LutheriaCamp />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}
