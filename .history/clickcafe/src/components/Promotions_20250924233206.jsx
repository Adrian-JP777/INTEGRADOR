// Promotions.jsx
import { motion } from "framer-motion";

export default function Promotions() {
  const offers = [
    { name: "Combo Café + Sándwich", price: 7.5, image: "https://images.unsplash.com/photo-1603046891536-3c196e4f4ff5?q=80&w=400&auto=format&fit=crop" },
    { name: "Cappuccino + Brownie", price: 6.5, image: "https://images.unsplash.com/photo-1565958011706-44c1e5ba1925?q=80&w=400&auto=format&fit=crop" },
    { name: "Chai Latte + Galleta", price: 5.5, image: "https://images.unsplash.com/photo-1601924573047-1c0f50d54b32?q=80&w=400&auto=format&fit=crop" },
    { name: "Jugo Natural + Muffin", price: 6.0, image: "https://images.unsplash.com/photo-1621166650146-fc7b0ff1a580?q=80&w=400&auto=format&fit=crop" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="titulo-seccion text-3xl font-bold">Promociones y Ofertas del Día</h2>
        <p className="mt-2 text-gray-600">Aprovecha nuestras ofertas exclusivas para estudiantes</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              className="bg-cafe-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img
                src={offer.image}
                alt={offer.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col items-center gap-2">
                <h3 className="font-semibold text-lg text-cafe-900">{offer.name}</h3>
                <p className="font-bold text-cafe-700">S/{offer.price.toFixed(2)}</p>
                <button className="mt-2 px-4 py-1.5 bg-cafe-500 text-white rounded hover:bg-cafe-600 transition">
                  Pedir Ahora
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
