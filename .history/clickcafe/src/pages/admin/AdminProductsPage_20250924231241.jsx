import { useState } from "react";
import { products as initialProducts, CATEGORIES } from "../../data/products";

export default function AdminProductsPage() {
    const [products, setProducts] = useState(initialProducts);

    const updateProduct = (id, field, value) => {
        setProducts(prev =>
            prev.map(p => (p.id === id ? { ...p, [field]: value } : p))
        );
    };

    const removeProduct = (id) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    const toggleSoldOut = (id) => {
        setProducts(prev =>
            prev.map(p => (p.id === id ? { ...p, soldOut: !p.soldOut } : p))
        );
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Panel de Productos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(p => (
                    <div key={p.id} className="bg-white rounded-xl shadow-lg p-4 flex flex-col">
                        <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-lg mb-2" />
                        <h2 className="text-xl font-semibold">{p.name}</h2>
                        <p className="text-sm text-gray-500">{p.category}</p>
                        <p className="text-lg font-bold">${p.price}</p>
                        <div className="flex items-center mt-2 gap-2">
                            <button
                                onClick={() => updateProduct(p.id, "quantity", (p.quantity || 0) - 1)}
                                className="px-2 py-1 bg-gray-200 rounded"
                            >-</button>
                            <span>{p.quantity || 0}</span>
                            <button
                                onClick={() => updateProduct(p.id, "quantity", (p.quantity || 0) + 1)}
                                className="px-2 py-1 bg-gray-200 rounded"
                            >+</button>
                        </div>
                        <div className="mt-3 flex gap-2">
                            <button
                                onClick={() => console.log("Editar", p.id)}
                                className="flex-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => removeProduct(p.id)}
                                className="flex-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Eliminar
                            </button>
                            <button
                                onClick={() => toggleSoldOut(p.id)}
                                className={`flex-1 px-3 py-1 rounded ${p.soldOut ? "bg-yellow-400" : "bg-green-500"} text-white hover:opacity-80`}
                            >
                                {p.soldOut ? "Disponible" : "Sold Out"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
