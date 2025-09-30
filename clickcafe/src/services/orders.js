import http from './http.js';

// Servicio para manejar pedidos
export const orderService = {
  // Crear un nuevo pedido
  async createOrder(orderData) {
    try {
      const response = await http.post('/orders', orderData);
      return response.data;
    } catch (error) {
      console.error('Error al crear pedido:', error);
      throw error;
    }
  },

  // Obtener todos los pedidos
  async getAllOrders() {
    try {
      const response = await http.get('/orders');
      return response.data;
    } catch (error) {
      console.error('Error al obtener pedidos:', error);
      throw error;
    }
  },

  // Obtener pedido por ID
  async getOrderById(id) {
    try {
      const response = await http.get(`/orders/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener pedido ${id}:`, error);
      throw error;
    }
  },

  // Actualizar estado del pedido
  async updateOrderStatus(id, status) {
    try {
      const response = await http.put(`/orders/${id}/status`, { status });
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar estado del pedido ${id}:`, error);
      throw error;
    }
  },

  // Obtener pedidos por estado
  async getOrdersByStatus(status) {
    try {
      const response = await http.get(`/orders?status=${status}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener pedidos con estado ${status}:`, error);
      throw error;
    }
  },

  // Eliminar pedido
  async deleteOrder(id) {
    try {
      const response = await http.delete(`/orders/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al eliminar pedido ${id}:`, error);
      throw error;
    }
  }
};

// Estados de pedido disponibles
export const ORDER_STATES = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED', 
  PREPARING: 'PREPARING',
  READY: 'READY',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

// Función helper para formatear pedidos del carrito para el backend
export const formatCartToOrder = (cartItems, customerInfo = {}) => {
  const items = cartItems.map(item => ({
    productId: item.id,
    quantity: item.quantity,
    price: item.price
  }));

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return {
    customerName: customerInfo.name || 'Cliente Anónimo',
    customerPhone: customerInfo.phone || '',
    customerEmail: customerInfo.email || '',
    items: items,
    total: total,
    status: ORDER_STATES.PENDING,
    orderDate: new Date().toISOString()
  };
};
