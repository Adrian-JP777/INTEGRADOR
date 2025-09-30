// src/components/Promotions.jsx
import { motion } from "framer-motion";

export default function Promotions() {
  const promociones = [
    {
      titulo: "Combo Café + Postre",
      descripcion: "Llévate un café y un postre a precio especial",
      precio: "S/ 10.00",
    },
    {
      titulo: "Descuento en Snacks",
      descripcion: "20% de descuento en todos los snacks hasta las 5pm",
      precio: "¡Aprovecha!",
    },
    {
      titulo: "Promoción Matutina",
      descripcion: "Café grande a precio pequeño antes de las 10am",
      precio: "S/ 5.00",
    },
  ];

  return (
    <section className="py-16 bg-cafe-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="titulo-seccion text-center text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Promociones y Ofertas
        </motion.h2>

        <motion.p
          className="text-center mt-2 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Aprovecha nuestras promociones exclusivas para estudiantes
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {promociones.map((p, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="font-semibold text-xl">{p.titulo}</h3>
              <p className="mt-2 text-gray-600">{p.descripcion}</p>
              <span className="mt-4 block text-cafe-500 font-bold">{p.precio}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
