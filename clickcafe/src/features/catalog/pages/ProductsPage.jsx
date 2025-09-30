import { useMemo, useState, useEffect } from "react";
import { productService, fallbackProducts } from "../../../services/products";
import ProductCard from "../components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductsPage({ onAdd }) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar productos al montar el componente
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getAllProducts();
        setProducts(data);
        setError(null);
      } catch (error) {
        console.error('Error cargando productos:', error);
        setError(error);
        // Usar productos de respaldo si falla la conexión
        setProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filtered = useMemo(
    () =>
      products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      ),
    [products, query]
  );

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold titulo-seccion text-center md:text-left">
        CATALOGO DE PRODUCTOS
      </h1>

      {error && (
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-yellow-800">
            ⚠️ Usando datos locales - El backend no está disponible
          </p>
        </div>
      )}

      <div className="mt-6 flex justify-center md:justify-start">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          className="w-full sm:w-80 md:w-96 border rounded-full px-5 py-2 shadow-sm focus:ring-2 focus:ring-cafe-300 focus:outline-none transition"
          disabled={loading}
        />
      </div>

      {loading ? (
        <div className="mt-12 flex justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cafe-600"></div>
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="w-full flex justify-center"
              >
                <ProductCard product={p} onAdd={onAdd} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {!loading && filtered.length === 0 && (
        <div className="mt-12 text-center text-gray-500">
          No se encontraron productos que coincidan con tu búsqueda.
        </div>
      )}
    </section>
  );
}
