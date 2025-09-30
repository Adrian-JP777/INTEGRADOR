import { motion } from "framer-motion";
import Boton from "./ui/boton";

export default function Hero() {
  const fondo = "/hero.jpg";

  return (
    <section className="relative min-h-screen grid items-center text-white overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-right"
        style={{ backgroundImage: `url(${fondo})` }}
        aria-hidden="true"
      />
      {/* Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl px-6 md:px-12 text-center md:text-left">
        <motion.h1
          className="font-marca text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mia Piura
        </motion.h1>

        <motion.p
          className="mt-6 max-w-md sm:max-w-lg md:max-w-xl text-white/90 mx-auto md:mx-0 text-base sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Cafetería acogedora en UTP - Piura ubicada en A-02 con café de calidad, postres y un ambiente acogedor.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Boton
            onClick={() =>
              document.getElementById("recomendados")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver Productos
          </Boton>
        </motion.div>
      </div>
    </section>
  );
}
