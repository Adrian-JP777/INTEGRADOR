import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Componentes usuarios
import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';
import CartDrawer from '../features/cart/components/CartDrawer';
import HomePage from '../features/home/pages/HomePage';
import ProductsPage from '../features/catalog/pages/ProductsPage';
import AboutPage from '../features/about/pages/AboutPage';

// Componentes admin
import AdminLayout from "../features/admin/layouts/AdminLayout";
import AdminHomePage from "../features/admin/pages/AdminHomePage";
import AdminProductsPage from "../features/admin/pages/AdminProductsPage";
import AdminPedidosPage from "../features/admin/pages/AdminPedidosPage";
import AdminSalesPage from "../features/admin/pages/AdminSalesPage";

// Hooks
import { useCart } from '../shared/hooks/useCart';

export default function App() {
  const [openCart, setOpenCart] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  // Usar el hook personalizado del carrito
  const {
    cartItems,
    addToCart: addToCartHook,
    removeFromCart,
    updateQuantity,
    getCartItemsCount,
    submitOrder,
    isSubmitting
  } = useCart();

  const addToCart = (product) => {
    addToCartHook(product);
    setOpenCart(true);
  };

  const changeQuantity = (id, delta) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + delta);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!location.pathname.startsWith('/admin') && (
        <Navbar
          overlay={isHome}
          onOpenCart={() => setOpenCart(true)}
          count={getCartItemsCount()}
        />
      )}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onAdd={addToCart} />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
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
        cart={cartItems}
        remove={removeFromCart}
        changeQuantity={changeQuantity}
        onSubmitOrder={submitOrder}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
