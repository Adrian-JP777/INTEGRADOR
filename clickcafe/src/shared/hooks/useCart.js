import { useState, useEffect } from 'react';
import { orderService, formatCartToOrder } from '../../services/orders';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Cargar carrito desde localStorage al inicializar
  useEffect(() => {
    const savedCart = localStorage.getItem('clickcafe-cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error cargando carrito:', error);
      }
    }
  }, []);

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('clickcafe-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Agregar producto al carrito
  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      
      if (existingItem) {
        // Si ya existe, incrementar cantidad
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si no existe, agregarlo con cantidad 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Remover producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Limpiar carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular total del carrito
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Obtener cantidad total de items
  const getCartItemsCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // Enviar pedido al backend
  const submitOrder = async (customerInfo) => {
    if (cartItems.length === 0) {
      throw new Error('El carrito está vacío');
    }

    setIsSubmitting(true);
    try {
      const orderData = formatCartToOrder(cartItems, customerInfo);
      const result = await orderService.createOrder(orderData);
      
      // Limpiar carrito después de enviar el pedido
      clearCart();
      
      return result;
    } catch (error) {
      console.error('Error al enviar pedido:', error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    submitOrder,
    isSubmitting
  };
};
