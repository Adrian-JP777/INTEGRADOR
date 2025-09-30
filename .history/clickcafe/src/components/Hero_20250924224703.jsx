import { motion } from "framer-motion";
import Boton from "./ui/boton";

export default function Hero() {
  const fondo = "/hero.jpg"; // asegúrate que esté en /public

  return (
    <section className="relative min-h-[100vh] md:h-[78vh] grid items-center text-white overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-right"
        style={{ backgroundImage: `url(${fondo})` }}
        aria-hidden="true"
      />
      {/* De negro a transparente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Texto con animación al hacer scroll */}
      <div className="relative z-10 max-w-6xl px-6 text-left ml-12">
        <motion.h1
          className="font-marca text-6xl md:text-8xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          Mia Piura
        </motion.h1>

        <motion.p
          className="max-w-xl mt-6 text-white/90 parrafo-suave"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Cafetería acogedora en UTP - Piura ubicada en A-02 con café de calidad,
          postres y un ambiente acogedor.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Boton
            onClick={() =>
              document
                .getElementById("recomendados")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver Productos
          </Boton>
        </motion.div>
      </div>
    </section>
  );
}
