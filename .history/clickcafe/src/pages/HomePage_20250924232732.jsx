// src/pages/HomePage.jsx
import Hero from '../components/Hero';
import ProductTabs from '../components/ProductTabs';
import Testimonials from '../components/Testimonials';

export default function HomePage({ onAdd }) {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <Hero />

      {/* Productos recomendados */}
      <section id="recomendados" className="bg-white py-16">
        <ProductTabs onAdd={onAdd} />
      </section>

      {/* Testimonios */}
      <section className="bg-cafe-50 py-16">
        <Testimonials />
      </section>
    </main>
  );
}
