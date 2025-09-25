import { useMemo, useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductsPage({ onAdd }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <section className="py-14 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold titulo-seccion">
        CATALOGO DE PRODUCTOS
      </h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar..."
        className="mt-6 w-full md:w-96 border rounded-full px-5 py-2"
      />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={p} onAdd={onAdd} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
