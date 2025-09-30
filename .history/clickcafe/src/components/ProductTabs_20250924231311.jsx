// ProductTabs.jsx
import { motion } from "framer-motion"
import { useMemo, useState } from "react"
import { CATEGORIES, products } from "../data/products"
import ProductCard from "./ProductCard"

export default function ProductTabs({ onAdd }) {
  const [category, setCategory] = useState("Bebidas")
  const filtered = useMemo(
    () => products.filter((p) => p.category === category),
    [category]
  )

  return (
    <section
      id="recomendados"
      className="py-16 bg-gradient-to-b from-white to-cafe-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="titulo-seccion text-center text-3xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Productos más recomendados
        </motion.h2>

        <motion.p
          className="text-center mt-2 parrafo-suave text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Contamos con la disposición de diferentes productos a un accesible precio.
        </motion.p>

        {/* Categorías */}
        <div className="mt-6 flex gap-2 overflow-x-auto scrollbar-hide justify-start sm:justify-center">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-1.5 whitespace-nowrap rounded-full border ${
                category === c
                  ? "bg-cafe-500 text-white border-cafe-500"
                  : "border-cafe-300 text-cafe-700 hover:bg-cafe-100"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="w-full flex justify-center" // centra la card
            >
              <ProductCard product={p} onAdd={onAdd} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
