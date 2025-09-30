import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminProductsPage() {
    const [products, setProducts] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [form, setForm] = useState({ id: null, name: "", price: "", quantity: 1, image: "" });
    const [preview, setPreview] = useState("");

    // Maneja la selección de archivo
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(file);
        setForm({ ...form, image: "" });
    };

    // Abrir modal para agregar o editar
    const openModal = (product = null) => {
        if (product) {
            setForm(product);
            setPreview(product.image);
        } else {
            setForm({ id: null, name: "", price: "", quantity: 1, image: "" });
            setPreview("");
        }
        setModalOpen(true);
    };

    const handleSaveProduct = () => {
        if (!form.name || !form.price || (!preview && !form.image)) return;

        const newProduct = { ...form, image: preview || form.image, soldOut: form.soldOut || false };

        if (form.id) {
            // Editar
            setProducts(products.map(p => (p.id === form.id ? newProduct : p)));
        } else {
            // Agregar nuevo
            newProduct.id = Date.now();
            setProducts([...products, newProduct]);
        }

        setModalOpen(false);
        setForm({ id: null, name: "", price: "", quantity: 1, image: "" });
        setPreview("");
    };

    const handleDelete = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    const handleToggleSoldOut = (id) => {
        setProducts(products.map(p => p.id === id ? { ...p, soldOut: !p.soldOut } : p));
    };

    const handleQuantityChange = (d) => {
        setForm(prev => ({ ...prev, quantity: Math.max(1, prev.quantity + d) }));
    };

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Productos (Admin)</h1>

            <button
                onClick={() => openModal()}
                className="mb-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                Agregar Producto
            </button>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((p) => (
                    <div key={p.id} className="border rounded p-4 flex flex-col items-center gap-2 relative">
                        {p.image && <img src={p.image} alt={p.name} className="w-full h-32 object-cover rounded" />}
                        <h2 className={`font-semibold ${p.soldOut ? "line-through text-gray-400" : ""}`}>{p.name}</h2>
                        <p>Precio: ${p.price}</p>
                        <p>Cantidad: {p.quantity}</p>

                        {/* Botones de acciones */}
                        <div className="flex gap-2 mt-2">
                            <button
                                onClick={() => openModal(p)}
                                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(p.id)}
                                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                            >
                                Eliminar
                            </button>
                            <button
                                onClick={() => handleToggleSoldOut(p.id)}
                                className={`px-2 py-1 rounded text-sm ${p.soldOut ? "bg-gray-500 text-white" : "bg-yellow-500 text-black hover:bg-yellow-600"}`}
                            >
                                {p.soldOut ? "Disponible" : "Sold Out"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded p-6 w-96 shadow-lg"
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
                                    className="px-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    className="w-16 text-center border rounded"
                                    value={form.quantity}
                                    onChange={(e) => setForm({ ...form, quantity: Number(e.target.value) })}
                                    min={1}
                                />
                                <button
                                    onClick={() => handleQuantityChange(1)}
                                    className="px-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    +
                                </button>
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

                            {preview && <img src={preview} alt="preview" className="w-full h-32 object-cover rounded mb-2" />}
                            {form.image && !preview && <img src={form.image} alt="preview" className="w-full h-32 object-cover rounded mb-2" />}

                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={() => { setModalOpen(false); setPreview(""); setForm({ id: null, name: "", price: "", quantity: 1, image: "" }); }}
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
