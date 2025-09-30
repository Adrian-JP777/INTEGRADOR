import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar({ onOpenCart, count = 0, overlay = false }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  // Si overlay=true ⇒ fixed + transparente al inicio; si no ⇒ sticky normal
  const positionClass = overlay
    ? "fixed top-0 left-0 right-0"
    : "sticky top-0";
  const bgClass = overlay
    ? scrolled
      ? "bg-black/70 backdrop-blur"
      : "bg-transparent"
    : "bg-black/60 backdrop-blur";

  return (
    <motion.header
      className={`${positionClass} z-50 text-white ${bgClass} transition-colors`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="flex items-center gap-2">
            <img src="/cafeclick.svg" alt="ClickCafe" className="h-7" />
            <span className="font-semibold tracking-wide">ClickCafe</span>
          </Link>
        </motion.div>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { to: "/", label: "Inicio" },
            { to: "/products", label: "Productos" },
            { to: "/about", label: "Nosotros" },
            { to: "/contact", label: "Contacto" },
          ].map((i, idx) => (
            <motion.div
              key={i.to}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <NavLink
                to={i.to}
                className={({ isActive }) =>
                  `text-sm ${
                    isActive
                      ? "text-cafe-300"
                      : "text-white/90 hover:text-white"
                  }`
                }
              >
                {i.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Botones de búsqueda y carrito */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button aria-label="Buscar" className="hover:opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3a7.5 7.5 0 015.917 12.144l3.72 3.72a.75.75 0 11-1.06 1.06l-3.72-3.72A7.5 7.5 0 1110.5 3zm0 1.5a6 6 0 100 12 6 6 0 000-12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={onOpenCart}
            className="relative hover:opacity-80"
            aria-label="Carrito"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M2.25 3a.75.75 0 000 1.5h1.386l.91 9.107A3.75 3.75 0 008.282 17h7.436a3.75 3.75 0 003.736-3.393l.726-7.107H21.75a.75.75 0 000-1.5h-3.09a.75.75 0 00-.744.666l-.2 1.959H6.284l-.2-1.959A.75.75 0 005.34 3H2.25zM6.5 8.625l.53 5.305A2.25 2.25 0 008.282 16.5h7.436a2.25 2.25 0 002.252-2.07l.53-5.805H6.5z" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-cafe-500 text-white text-xs rounded-full px-1">
                {count}
              </span>
            )}
          </button>
        </motion.div>
      </div>
    </motion.header>
  );
}
