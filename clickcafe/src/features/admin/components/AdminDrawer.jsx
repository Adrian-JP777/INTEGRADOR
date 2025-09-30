import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AdminDrawer({ open, onClose, products, updateProduct }) {
    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-50 flex">
                    <motion.div
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative ml-auto h-full w-full max-w-md bg-white/60 backdrop-blur-lg shadow-2xl flex flex-col"
                    >
                        <div className="p-4 border-b border-white/30 flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Gestión de Productos</h3>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/30 transition"
                                aria-label="Cerrar"
                            >
                                <XMarkIcon className="w-6 h-6 text-cafe-700" />
                            </button>
                        </div>

                        <div className="p-4 flex-1 overflow-y-auto space-y-4">
                            {products.length === 0 && (
                                <p className="text-center text-cafe-900/70">
                                    No hay productos registrados.
                                </p>
                            )}

                            {products.map((p) => (
                                <div
                                    key={p.id}
                                    className="flex gap-4 items-center border-b border-white/20 pb-4 last:border-none"
                                >
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="w-20 h-20 rounded-lg object-cover shadow"
                                    />
                                    <div className="flex-1">
                                        <div className="font-medium">{p.name}</div>
                                        <div className="text-sm text-cafe-900/70">
                                            Precio: S/{p.price.toFixed(2)} | Stock: {p.stock}
                                        </div>

                                        {/* Controles admin */}
                                        <div className="flex items-center gap-3 mt-2">
                                            <button
                                                onClick={() => updateProduct(p.id, "stock", p.stock - 1)}
                                                className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-white/30 transition"
                                            >
                                                -
                                            </button>
                                            <span className="w-6 text-center">{p.stock}</span>
                                            <button
                                                onClick={() => updateProduct(p.id, "stock", p.stock + 1)}
                                                className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-white/30 transition"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() =>
                                                    updateProduct(p.id, "soldOut", !p.soldOut)
                                                }
                                                className={`px-3 py-1 rounded ${p.soldOut
                                                        ? "bg-green-500 text-white"
                                                        : "bg-red-500 text-white"
                                                    }`}
                                            >
                                                {p.soldOut ? "Activar" : "Sold Out"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.aside>
                </div>
            )}
        </AnimatePresence>
    );
}
