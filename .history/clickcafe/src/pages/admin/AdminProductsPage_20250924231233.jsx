import { useState } from "react";
import { motion } from "framer-motion";

export default function AdminProductsPage() {
    // Estado inicial con productos ya existentes
    const [products, setProducts] = useState([
        { id: 101, nombre: "Café Latte", precio: 4, cantidad: 10, imagen: "https://via.placeholder.com/150" },
        { id: 102, nombre: "Café Mocha", precio: 5, cantidad: 8, imagen: "https://via.placeholder.com/150" },
        { id: 103, nombre: "Capuccino", precio: 4, cantidad: 12, imagen: "https://via.placeholder.com/150" },
        { id: 104, nombre: "Espresso", precio: 3, cantidad: 15, imagen: "https://via.placeholder.com/150" },
    ]);

    // Función para actualizar la cantidad o cualquier campo
    const updateProduct = (id, key, value) => {
        setProducts((prev) =>
            prev.map((p) => (p.id === id ? { ...p, [key]: value } : p))
        );
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Gestión de Productos</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((p) => (
                    <motion.div
                        key={p.id}
                        className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <img src={p.imagen} alt={p.nombre} className="w-32 h-32 object-cover rounded-md mb-2" />
                        <p className="font-bold">{p.nombre}</p>
                        <p>Precio: ${p.precio}</p>
                        <p>Cantidad: {p.cantidad}</p>

                        {/* Inputs para actualizar datos */}
                        <input
                            type="number"
                            min={0}
                            value={p.cantidad}
                            onChange={(e) => updateProduct(p.id, "cantidad", parseInt(e.target.value))}
                            className="border mt-2 p-1 rounded w-full text-center"
                        />
                        <button
                            onClick={() => alert("Producto actualizado en la BD (simulado)")}
                            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                        >
                            Guardar / Actualizar
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
