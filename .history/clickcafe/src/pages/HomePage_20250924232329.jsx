// src/pages/HomePage.jsx
import Hero from "../components/Hero";
import ProductTabs from "../components/ProductTabs";
import Testimonials from "../components/Testimonials";

export default function HomePage({ onAdd }) {
  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <Hero />

      {/* Productos más recomendados */}
      <ProductTabs onAdd={onAdd} />

      {/* Testimonios */}
      <Testimonials />
    </div>
  );
}
