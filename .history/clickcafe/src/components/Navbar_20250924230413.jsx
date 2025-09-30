import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HomeIcon,
  CubeIcon,
  UserIcon,
  EnvelopeIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Navbar({ onOpenCart, count = 0 }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Inicio", icon: <HomeIcon className="w-5 h-5" /> },
    { to: "/products", label: "Productos", icon: <CubeIcon className="w-5 h-5" /> },
    { to: "/about", label: "Nosotros", icon: <UserIcon className="w-5 h-5" /> },
    { to: "/contact", label: "Contacto", icon: <EnvelopeIcon className="w-5 h-5" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-white bg-black/70 backdrop-blur h-16">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/cafeclick.svg" alt="ClickCafe" className="h-7" />
          <span className="font-semibold tracking-wide">ClickCafe</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((i) => (
            <NavLink
              key={i.to}
              to={i.to}
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm ${
                  isActive ? "text-cafe-300" : "text-white/90 hover:text-white"
                }`
              }
            >
              {i.icon}
              {i.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="md:hidden focus:outline-none p-1 rounded-lg hover:bg-white/10 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
          </button>

          <button onClick={onOpenCart} className="relative hover:opacity-80" aria-label="Carrito">
            <ShoppingCartIcon className="w-6 h-6" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-cafe-500 text-white text-xs rounded-full px-1">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm text-white px-6 py-4 space-y-4">
          {links.map((i) => (
            <NavLink
              key={i.to}
              to={i.to}
              className={({ isActive }) =>
                `flex items-center gap-2 text-base ${
                  isActive ? "text-cafe-300" : "text-white/90 hover:text-white"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {i.icon}
              {i.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
