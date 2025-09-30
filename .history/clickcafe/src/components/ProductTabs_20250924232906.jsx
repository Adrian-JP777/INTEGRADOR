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
    <section id="recomendados" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Título */}
        <motion.h2
          className="text-center text-4xl font-bold text-cafe-900 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Productos más recomendados
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          className="text-center mt-3 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explora nuestra selección de productos cuidadosamente elegidos para ti. 
        </motion.p>

        {/* Botones de categorías */}
        <div className="mt-6 flex gap-3 overflow-x-auto scrollbar-hide justify-center py-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-5 py-2 rounded-full font-medium transition-colors duration-300
                ${category === c 
                  ? "bg-cafe-500 text-white shadow-lg" 
                  : "bg-white text-cafe-700 border border-gray-300 hover:bg-cafe-50"}`
              }
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex justify-center"
            >
              <ProductCard product={p} onAdd={onAdd} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
