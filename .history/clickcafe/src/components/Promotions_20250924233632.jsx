import { motion } from "framer-motion";

export default function Promotions() {
  const offers = [
    { title: "2x1 Café Americano", desc: "En la mañana, compra 1 y llévate 2", color: "bg-cafe-100" },
    { title: "Descuento 10% Postres", desc: "Aplica en brownies y cheesecakes", color: "bg-cafe-50" },
    { title: "Combo Almuerzo", desc: "Pan + bebida por S/ 12.00", color: "bg-cafe-200" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="titulo-seccion text-center text-3xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Promociones y Ofertas
        </motion.h2>

        <motion.p
          className="text-center mt-2 parrafo-suave text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Aprovecha nuestras ofertas exclusivas para estudiantes y visitantes.
        </motion.p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {offers.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`${o.color} p-6 rounded-2xl shadow-lg flex flex-col items-center text-center`}
            >
              <h3 className="font-semibold text-xl mb-2">{o.title}</h3>
              <p className="text-gray-700">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
