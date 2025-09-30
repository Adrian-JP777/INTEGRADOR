import { useState } from "react";
import { motion } from "framer-motion";

export default function AdminPedidosPage() {
  const [pedidos, setPedidos] = useState([
    { id: 201, cliente: "Juan P.", producto: "Café Latte", cantidad: 2, estado: "No recibido" },
    { id: 202, cliente: "Ana M.", producto: "Café Mocha", cantidad: 1, estado: "Preparando" },
    { id: 203, cliente: "Carlos R.", producto: "Capuccino", cantidad: 3, estado: "Por recoger" },
  ]);

  const estados = ["No recibido", "Preparando", "Por recoger", "Entregado"];

  // Guardar cambio de estado
  const actualizarPedido = (id, nuevoEstado) => {
    setPedidos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, estado: nuevoEstado } : p))
    );
    alert(`Pedido ${id} actualizado a "${nuevoEstado}"`);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Gestión de Pedidos</h1>

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
              <th className="px-6 py-3">Estado</th>
              <th className="px-6 py-3">Acción</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-3">{p.id}</td>
                <td className="px-6 py-3">{p.cliente}</td>
                <td className="px-6 py-3">{p.producto}</td>
                <td className="px-6 py-3">{p.cantidad}</td>
                <td className="px-6 py-3">
                  <select
                    value={p.estado}
                    onChange={(e) => setPedidos((prev) =>
                      prev.map((item) =>
                        item.id === p.id ? { ...item, estado: e.target.value } : item
                      )
                    )}
                    className="px-2 py-1 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300"
                  >
                    {estados.map((estado, idx) => (
                      <option key={idx} value={estado}>
                        {estado}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-3">
                  <motion.button
                    onClick={() => actualizarPedido(p.id, p.estado)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                  >
                    Guardar
                  </motion.button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
