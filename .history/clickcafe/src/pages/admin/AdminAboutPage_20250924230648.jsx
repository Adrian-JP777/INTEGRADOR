// src/pages/admin/AdminAboutPage.jsx
import { useState } from "react";

export default function AdminAboutPage() {
  // Estado para título y descripción
  const [title, setTitle] = useState("Sobre Nosotros");
  const [description, setDescription] = useState(
    "Cafetería acogedora en UTP - Piura con café de calidad, postres y un ambiente agradable."
  );

  const handleSave = () => {
    // Aquí podrías enviar la información a tu backend
    alert("Información guardada: \n" + title + "\n" + description);
  };

  return (
    <section className="py-16 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">Administrar Sección “Nosotros”</h1>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-cafe-500 text-white px-4 py-2 rounded hover:bg-cafe-600 transition"
      >
        Guardar Cambios
      </button>
    </section>
  );
}
