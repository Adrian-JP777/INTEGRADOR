import { useState } from "react";
import { motion } from "framer-motion";

export default function AdminSalesPage() {
    const [sales] = useState([
        { id: 101, cliente: "Juan P.", producto: "Café Latte", cantidad: 2, total: 8, fecha: "2025-09-23" },
        { id: 102, cliente: "Ana M.", producto: "Café Mocha", cantidad: 1, total: 5, fecha: "2025-09-23" },
        { id: 103, cliente: "Carlos R.", producto: "Capuccino", cantidad: 3, total: 12, fecha: "2025-09-22" },
        { id: 104, cliente: "Lucia F.", producto: "Espresso", cantidad: 1, total: 3, fecha: "2025-09-22" },
    ]);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Historial de Ventas</h1>

            {/* Cards resumidas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <motion.div className="p-6 bg-green-500 text-white rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <p className="text-sm">Ventas Totales</p>
                    <p className="text-2xl font-bold">{sales.length}</p>
                </motion.div>
                <motion.div className="p-6 bg-blue-500 text-white rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <p className="text-sm">Ingresos Totales</p>
                    <p className="text-2xl font-bold">
                        ${sales.reduce((acc, s) => acc + s.total, 0)}
                    </p>
                </motion.div>
                <motion.div className="p-6 bg-yellow-500 text-white rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="text-sm">Clientes Únicos</p>
                    <p className="text-2xl font-bold">{[...new Set(sales.map(s => s.cliente))].length}</p>
                </motion.div>
                <motion.div className="p-6 bg-red-500 text-white rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-sm">Ventas de Hoy</p>
                    <p className="text-2xl font-bold">{sales.filter(s => s.fecha === "2025-09-23").length}</p>
                </motion.div>
            </div>

            {/* Tabla de ventas */}
            <motion.div
                className="overflow-x-auto bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <table className="min-w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Cliente</th>
                            <th className="px-6 py-3">Producto</th>
                            <th className="px-6 py-3">Cantidad</th>
                            <th className="px-6 py-3">Total ($)</th>
                            <th className="px-6 py-3">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(s => (
                            <tr key={s.id} className="border-b hover:bg-gray-50 transition">
                                <td className="px-6 py-3">{s.id}</td>
                                <td className="px-6 py-3">{s.cliente}</td>
                                <td className="px-6 py-3">{s.producto}</td>
                                <td className="px-6 py-3">{s.cantidad}</td>
                                <td className="px-6 py-3">{s.total}</td>
                                <td className="px-6 py-3">{s.fecha}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>
        </div>
    );
}
