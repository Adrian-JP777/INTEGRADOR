import { Outlet, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function AdminLayout() {
    // Menú actualizado
    const links = [
        { to: "home", label: "Inicio" },
        { to: "products", label: "Productos" },
        { to: "pedidos", label: "Pedidos" },
        { to: "sales", label: "Ventas" },
    ];

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col shadow-lg">
                <div className="p-6 text-2xl font-bold tracking-wide flex items-center gap-2">
                    <img
                        src="/cafeclick.svg"
                        alt="Click-Café Logo"
                        className="w-8 h-8 rounded-full shadow-md"
                    />
                    Click-Café
                </div>

                <nav className="flex-1 flex flex-col gap-3 p-4">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors ${isActive ? "bg-gray-700 shadow-inner font-semibold" : ""
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            {/* Contenido principal */}
            <main className="flex-1 p-6 bg-gray-100">
                <motion.div
                    key={window.location.pathname} // anima cada ruta al cambiar
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <Outlet />
                </motion.div>
            </main>
        </div>
    );
}
