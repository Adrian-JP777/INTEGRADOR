import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const [openCart, setOpenCart] = useState(false)
  const [cart, setCart] = useState([])
  const location = useLocation()
  const isHome = location.pathname === '/'

  const addToCart = (prod) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === prod.id)
      if (exists) return prev.map((p) => (p.id === prod.id ? { ...p, quantity: p.quantity + 1 } : p))
      return [...prev, { ...prod, quantity: 1 }]
    })
    setOpenCart(true)
  }

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id))
  const changeQuantity = (id, d) =>
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: Math.max(1, p.quantity + d) } : p)))

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* overlay solo en Home "Cabro el que lo lea" */}
      <Navbar overlay={isHome} onOpenCart={() => setOpenCart(true)} count={cart.reduce((a, b) => a + b.quantity, 0)} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onAdd={addToCart} />} />
          <Route path="/products" element={<ProductsPage onAdd={addToCart} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} cart={cart} remove={removeFromCart} changeQuantity={changeQuantity} />
    </div>
  )
}
