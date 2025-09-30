// src/pages/HomePage.jsx
import Hero from "../components/Hero";
import ProductTabs from "../components/ProductTabs";
import Promotions from "../components/Promotions"; // Nuevo componente

export default function HomePage({ onAdd }) {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Hero />
      <ProductTabs onAdd={onAdd} />
      <Promotions /> {/* Aquí mostramos promociones u ofertas */}
    </main>
  );
}
