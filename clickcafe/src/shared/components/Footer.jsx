"use client";

import { motion } from "framer-motion";
import { StarIcon, TagIcon, FireIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-cafe-700 to-cafe-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10 relative z-10 flex flex-col md:flex-row justify-between gap-8">
        {/* Bloque 1: Logo y lema */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <motion.div
            className="text-3xl md:text-4xl font-bold tracking-wide"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Mia Piura - ClickCafé
          </motion.div>
          <motion.p
            className="text-white/70 text-sm md:text-base"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Especialistas en llevar dulzura a tu vida
          </motion.p>

          {/* Iconos sociales */}
          <motion.div
            className="flex gap-4 mt-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href="https://www.tiktok.com/@miapiurasnackcafe"
              target="_blank"
              whileHover={{ scale: 1.2, color: "#FBBF24" }}
              aria-label="tiktok"
            >
              <SiTiktok size={24} />
            </motion.a>
            <motion.a
              href="https://wa.me/+51948107152"
              target="_blank"
              whileHover={{ scale: 1.2, color: "#25D366" }}
              aria-label="whatsapp"
            >
              <FaWhatsapp size={24} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/miapiura/"
              target="_blank"
              whileHover={{ scale: 1.2, color: "#E1306C" }}
              aria-label="instagram"
            >
              <FaInstagram size={24} />
            </motion.a>
          </motion.div>
        </div>

        {/* Bloque 2: Características */}
        <div className="flex flex-col md:flex-row justify-center md:justify-end gap-6 mt-4 md:mt-0 text-center md:text-left">
          <motion.div
            className="flex items-center gap-2 md:gap-3"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <StarIcon className="w-5 h-5 md:w-6 md:h-6 text-cafe-300" />
            <span className="text-sm md:text-base font-medium">Productos Destacados</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 md:gap-3"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TagIcon className="w-5 h-5 md:w-6 md:h-6 text-cafe-300" />
            <span className="text-sm md:text-base font-medium">Más Económicos</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 md:gap-3"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FireIcon className="w-5 h-5 md:w-6 md:h-6 text-cafe-300" />
            <span className="text-sm md:text-base font-medium">Mejores Valorados</span>
          </motion.div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/20 py-3 text-center text-white/60 text-xs md:text-sm">
        © 2025 Mia Piura - ClickCafé. Todos los derechos reservados.
      </div>
    </footer>
  );
}
