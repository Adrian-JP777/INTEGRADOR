import { motion } from "framer-motion";

export default function AdminHomePage() {
    // Simulamos algunas estadísticas rápidas
    const stats = [
        { label: "Productos", value: 24, color: "bg-blue-500" },
        { label: "Ventas Hoy", value: 12, color: "bg-green-500" },
        { label: "Usuarios Registrados", value: 45, color: "bg-yellow-500" },
        { label: "Pedidos Pendientes", value: 3, color: "bg-red-500" },
    ];

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Bienvenido, Admin</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((s, idx) => (
                    <motion.div
                        key={idx}
                        className={`p-6 rounded-xl shadow-lg text-white ${s.color}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <p className="text-sm">{s.label}</p>
                        <p className="text-2xl font-bold">{s.value}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-xl font-bold mb-2">Últimas acciones</h2>
                <ul className="text-gray-700 list-disc list-inside">
                    <li>Se añadió un nuevo producto: Café Mocha</li>
                    <li>Se actualizó la descripción del producto: Latte</li>
                    <li>Pedido #102 pendiente de confirmación</li>
                </ul>
            </motion.div>
        </div>
    );
}
