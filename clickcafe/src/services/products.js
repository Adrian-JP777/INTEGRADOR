import http from './http.js';

// Categorías disponibles (mantenemos esto como constante por ahora)
export const CATEGORIES = ["Bebidas", "Embutidos", "Dulces", "Almuerzos"];

// Funciones para interactuar con el backend de productos
export const productService = {
  // Obtener todos los productos
  async getAllProducts() {
    try {
      const response = await http.get('/products');
      // La API devuelve una respuesta paginada, extraemos el contenido
      return response.data.content || response.data;
    } catch (error) {
      console.error('Error al obtener productos:', error);
      throw error;
    }
  },

  // Obtener producto por ID
  async getProductById(id) {
    try {
      const response = await http.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener producto ${id}:`, error);
      throw error;
    }
  },

  // Crear nuevo producto (para admin)
  async createProduct(productData) {
    try {
      const response = await http.post('/products', productData);
      return response.data;
    } catch (error) {
      console.error('Error al crear producto:', error);
      throw error;
    }
  },

  // Actualizar producto (para admin)
  async updateProduct(id, productData) {
    try {
      const response = await http.put(`/products/${id}`, productData);
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar producto ${id}:`, error);
      throw error;
    }
  },

  // Eliminar producto (para admin)
  async deleteProduct(id) {
    try {
      const response = await http.delete(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al eliminar producto ${id}:`, error);
      throw error;
    }
  },

  // Obtener productos por categoría
  async getProductsByCategory(category) {
    try {
      const allProducts = await this.getAllProducts();
      return allProducts.filter(product => 
        product.category?.toLowerCase() === category.toLowerCase()
      );
    } catch (error) {
      console.error(`Error al obtener productos de categoría ${category}:`, error);
      throw error;
    }
  }
};

// Datos de productos de respaldo (fallback) por si el backend no está disponible
export const fallbackProducts = [
  { id: 'cap', name: 'Cappuccino', price: 8.5, category: 'Bebidas', image: 'https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&w=800&auto=format&fit=crop' },
  { id: 'chai', name: 'Chai Latte', price: 8.5, category: 'Bebidas', image: 'https://images.squarespace-cdn.com/content/v1/5ea3b22556f3d073f3d9cae4/eecf9914-fb0a-4f61-9c26-76e120e63aee/IMG_3442.jpg' },
  { id: 'mac', name: 'Macchiato', price: 8.5, category: 'Bebidas', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Macchiato_FourBarrel.jpg' },
  { id: 'exp', name: 'Expresso', price: 8.5, category: 'Bebidas', image: 'https://masana.pe/wp-content/uploads/2024/07/expresso.jpg' },
  { id: 'sand', name: 'Sándwich de jamón', price: 7.9, category: 'Embutidos', image: 'https://comedera.com/wp-content/uploads/sites/9/2021/03/sandwich-de-jamon-y-queso.jpg' },
  { id: 'fresa', name: 'Cheesecake de fresa', price: 6.9, category: 'Dulces', image: 'https://www.recetasnestlecam.com/sites/default/files/srh_recipes/07892f02f7c57b83d5703b4ee924221e.jpg' },
  { id: 'ens', name: 'Ensalada tibia', price: 10.5, category: 'Almuerzos', image: 'https://resizer.glanacion.com/resizer/v2/ensalada-tibia-M6445Q6RHRAMHNWUJZLA3EO4DQ.jpg?auth=7b4afd0f8640595614c2772818951c513fbebe742808ef7ef84e5f67ca004377&width=420&height=280&quality=70&smart=true'},
  { id: 'pan', name: 'Pan con pollo', price: 4.0, category: 'Embutidos', image: 'https://i.pinimg.com/1200x/db/e1/15/dbe1156ef780f362f10b2bc155941d24.jpg' },
];

// Exportar también como "products" para compatibilidad con archivos existentes
export const products = fallbackProducts;
