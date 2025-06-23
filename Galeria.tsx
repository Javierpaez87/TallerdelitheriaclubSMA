// src/pages/Galeria.tsx
export default function Galeria() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Galería</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src="/camp1.jpeg" alt="Alumno y maestro" className="rounded shadow" />
        <img src="/detalle.jpeg" alt="Detalle roseta" className="rounded shadow" />
      </div>
    </div>
  );
}
