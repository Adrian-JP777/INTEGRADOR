import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Componentes usuarios
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';

// Componentes admin
import AdminLayout from "./layouts/AdminLayout";
import AdminHomePage from "./pages/admin/AdminHomePage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminPedidosPage from "./pages/admin/AdminPedidosPage";
import AdminSalesPage from "./pages/admin/AdminSalesPage";

export default function App() {
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const addToCart = (prod) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === prod.id);
      if (exists) return prev.map((p) => (p.id === prod.id ? { ...p, quantity: p.quantity + 1 } : p));
      return [...prev, { ...prod, quantity: 1 }];
    });
    setOpenCart(true);
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const changeQuantity = (id, d) =>
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: Math.max(1, p.quantity + d) } : p)));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!location.pathname.startsWith('/admin') && (
        <Navbar
          overlay={isHome}
          onOpenCart={() => setOpenCart(true)}
          count={cart.reduce((a, b) => a + b.quantity, 0)}
        />
      )}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onAdd={addToCart} />} />
          <Route path="/products" element={<ProductsPage onAdd={addToCart} />} />
          <Route path="/about" element={<AboutPage />} />

          {isAdmin && (
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="home" replace />} />
              <Route path="home" element={<AdminHomePage />} />
              <Route path="products" element={<AdminProductsPage />} />
              <Route path="pedidos" element={<AdminPedidosPage />} />
              <Route path="sales" element={<AdminSalesPage />} />
            </Route>
          )}

          {!isAdmin && <Route path="/admin/*" element={<Navigate to="/" replace />} />}
        </Routes>
      </main>

      {!location.pathname.startsWith('/admin') && <Footer />}

      <CartDrawer
        open={openCart}
        onClose={() => setOpenCart(false)}
        cart={cart}
        remove={removeFromCart}
        changeQuantity={changeQuantity}
      />
    </div>
  );
}
