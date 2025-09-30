// Promotions.jsx
import { motion } from "framer-motion";

// src/components/Promotions.jsx
export default function Promotions() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="titulo-seccion text-center text-3xl font-bold">
          Promociones y Ofertas
        </h2>
        <p className="text-center mt-2 text-gray-700">
          Aprovecha nuestras promociones exclusivas para estudiantes
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="font-semibold text-xl">Combo Café + Postre</h3>
            <p className="mt-2 text-gray-600">Llévate un café y un postre a precio especial</p>
            <span className="mt-4 block text-cafe-500 font-bold">S/ 10.00</span>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="font-semibold text-xl">Descuento en Snacks</h3>
            <p className="mt-2 text-gray-600">20% de descuento en todos los snacks hasta las 5pm</p>
            <span className="mt-4 block text-cafe-500 font-bold">¡Aprovecha!</span>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="font-semibold text-xl">Promoción Matutina</h3>
            <p className="mt-2 text-gray-600">Café grande a precio pequeño antes de las 10am</p>
            <span className="mt-4 block text-cafe-500 font-bold">S/ 5.00</span>
          </div>
        </div>
      </div>
    </section>
  );
}

