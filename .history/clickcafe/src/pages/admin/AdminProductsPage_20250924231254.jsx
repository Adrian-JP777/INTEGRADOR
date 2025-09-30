import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products as initialProducts } from "../../data/products"; // tus productos iniciales

export default function AdminProductsPage() {
    const [products, setProducts] = useState(initialProducts);
    const [modalOpen, setModalOpen] = useState(false);
    const [form, setForm] = useState({ id: null, name: "", price: "", quantity: 1, image: "", soldOut: false });
    const [preview, setPreview] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(file);
        setForm({ ...form, image: "" });
    };

    const openModal = (product = null) => {
        if (product) {
            setForm(product);
            setPreview(product.image);
        } else {
            setForm({ id: null, name: "", price: "", quantity: 1, image: "", soldOut: false });
            setPreview("");
        }
        setModalOpen(true);
    };

    const handleSaveProduct = () => {
        if (!form.name || !form.price || (!preview && !form.image)) return;

        const newProduct = { ...form, image: preview || form.image };
        if (form.id) {
            setProducts(products.map(p => (p.id === form.id ? newProduct : p)));
        } else {
            newProduct.id = Date.now();
            setProducts([...products, newProduct]);
        }

        setModalOpen(false);
        setForm({ id: null, name: "", price: "", quantity: 1, image: "", soldOut: false });
        setPreview("");
    };

    const handleUpdateBD = () => {
        // Aquí puedes llamar a tu backend para actualizar la base de datos
        console.log("Productos actualizados en la BD:", products);
        alert("Simulación: Productos actualizados en la BD (ver consola)");
    };

    const handleDelete = (id) => setProducts(products.filter(p => p.id !== id));
    const handleToggleSoldOut = (id) =>
        setProducts(products.map(p => p.id === id ? { ...p, soldOut: !p.soldOut } : p));
    const handleQuantityChange = (d) =>
        setForm(prev => ({ ...prev, quantity: Math.max(1, prev.quantity + d) }));

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Panel de Productos</h1>
                <button
                    onClick={() => openModal()}
                    className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 transition"
                >
                    + Agregar Producto
                </button>
                <button
                    onClick={handleUpdateBD}
                    className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
                >
                    Actualizar en BD
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((p) => (
                    <motion.div
                        key={p.id}
                        className={`bg-white rounded-xl shadow-lg overflow-hidden relative hover:scale-105 transform transition`}
                        whileHover={{ scale: 1.05 }}
                    >
                        {p.image && (
                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-40 object-cover"
                            />
                        )}
                        <div className="p-4 flex flex-col gap-1">
                            <h2 className={`font-semibold text-lg ${p.soldOut ? "line-through text-gray-400" : ""}`}>
                                {p.name}
                            </h2>
                            <p className="text-gray-600">Precio: ${p.price}</p>
                            <p className="text-gray-600">Cantidad: {p.quantity}</p>
                        </div>

                        <div className="flex justify-around p-2 border-t border-gray-200 bg-gray-50">
                            <button
                                onClick={() => openModal(p)}
                                className="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 text-sm"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(p.id)}
                                className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-sm"
                            >
                                Eliminar
                            </button>
                            <button
                                onClick={() => handleToggleSoldOut(p.id)}
                                className={`px-3 py-1 rounded text-sm ${p.soldOut ? "bg-gray-500 text-white" : "bg-yellow-400 hover:bg-yellow-500"}`}
                            >
                                {p.soldOut ? "Disponible" : "Sold Out"}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-xl p-6 w-96 shadow-lg"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                        >
                            <h2 className="text-xl font-bold mb-4">{form.id ? "Editar Producto" : "Agregar Producto"}</h2>

                            <input
                                type="text"
                                placeholder="Nombre"
                                className="w-full mb-2 border rounded px-2 py-1"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />

                            <input
                                type="number"
                                placeholder="Precio"
                                className="w-full mb-2 border rounded px-2 py-1"
                                value={form.price}
                                onChange={(e) => setForm({ ...form, price: e.target.value })}
                            />

                            <div className="flex items-center gap-2 mb-2">
                                <button
                                    onClick={() => handleQuantityChange(-1)}
                                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                >-</button>
                                <input
                                    type="number"
                                    className="w-16 text-center border rounded"
                                    value={form.quantity}
                                    onChange={(e) => setForm({ ...form, quantity: Number(e.target.value) })}
                                    min={1}
                                />
                                <button
                                    onClick={() => handleQuantityChange(1)}
                                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                >+</button>
                            </div>

                            <p className="text-sm mb-1">Imagen (URL o subir archivo)</p>
                            <input
                                type="text"
                                placeholder="URL de la imagen"
                                className="w-full mb-2 border rounded px-2 py-1"
                                value={form.image}
                                onChange={(e) => { setForm({ ...form, image: e.target.value }); setPreview(""); }}
                            />
                            <input
                                type="file"
                                accept="image/*"
                                className="w-full mb-2"
                                onChange={handleFileChange}
                            />

                            {(preview || form.image) && (
                                <img
                                    src={preview || form.image}
                                    alt="preview"
                                    className="w-full h-32 object-cover rounded mb-2"
                                />
                            )}

                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSaveProduct}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    {form.id ? "Guardar" : "Agregar"}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
