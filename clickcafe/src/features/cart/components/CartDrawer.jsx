import { useState } from 'react';

export default function CartDrawer({ 
  open, 
  onClose, 
  cart, 
  remove, 
  changeQuantity, 
  onSubmitOrder, 
  isSubmitting 
}) {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [orderSuccess, setOrderSuccess] = useState(false);

  const total = cart.reduce((a, b) => a + b.price * b.quantity, 0);

  const handleInputChange = (field, value) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitOrder = async () => {
    try {
      await onSubmitOrder(customerInfo);
      setOrderSuccess(true);
      setShowOrderForm(false);
      setCustomerInfo({ name: '', phone: '', email: '' });
      
      // Mostrar mensaje de éxito y cerrar después de 3 segundos
      setTimeout(() => {
        setOrderSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error al enviar pedido:', error);
      alert('Error al enviar el pedido. Por favor intenta de nuevo.');
    }
  };

  const handleClose = () => {
    setShowOrderForm(false);
    setOrderSuccess(false);
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Backdrop difuminado */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel del carrito */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-5 border-b flex items-center justify-between bg-white/70 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-cafe-900">
            {showOrderForm ? 'Información del pedido' : 'Tu carrito'}
          </h3>
          <button onClick={handleClose} className="text-cafe-700 hover:text-cafe-900 font-medium transition">
            Cerrar
          </button>
        </div>

        {/* Contenido */}
        <div className="p-5 space-y-4 overflow-y-auto h-[calc(100%-200px)] scrollbar-thin scrollbar-thumb-cafe-300 scrollbar-track-gray-100">
          {orderSuccess ? (
            <div className="text-center py-8">
              <div className="text-green-600 text-6xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-cafe-900 mb-2">¡Pedido enviado!</h3>
              <p className="text-cafe-700">Tu pedido ha sido recibido correctamente. Te contactaremos pronto.</p>
            </div>
          ) : showOrderForm ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-cafe-900 mb-1">Nombre completo *</label>
                <input
                  type="text"
                  value={customerInfo.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-cafe-300 rounded-md focus:ring-2 focus:ring-cafe-300 focus:outline-none"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cafe-900 mb-1">Teléfono *</label>
                <input
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-cafe-300 rounded-md focus:ring-2 focus:ring-cafe-300 focus:outline-none"
                  placeholder="999 999 999"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cafe-900 mb-1">Email (opcional)</label>
                <input
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-cafe-300 rounded-md focus:ring-2 focus:ring-cafe-300 focus:outline-none"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium text-cafe-900 mb-2">Resumen del pedido:</h4>
                {cart.map((p) => (
                  <div key={p.id} className="flex justify-between text-sm py-1">
                    <span>{p.name} x{p.quantity}</span>
                    <span>S/{(p.price * p.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {cart.length === 0 && <p className="text-center text-cafe-900/60">Aún no agregas productos.</p>}
              {cart.map((p) => (
                <div
                  key={p.id}
                  className="flex gap-4 items-center p-3 rounded-lg hover:bg-cafe-50 transition cursor-pointer shadow-sm"
                >
                  <img src={p.image} alt={p.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="font-medium text-cafe-900">{p.name}</div>
                    <div className="text-sm text-cafe-700">S/{p.price.toFixed(2)}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => changeQuantity(p.id, -1)}
                        className="px-2 py-1 border border-cafe-300 rounded hover:bg-cafe-100 transition"
                      >
                        -
                      </button>
                      <span className="px-2 py-1 border border-cafe-200 rounded bg-cafe-50">{p.quantity}</span>
                      <button
                        onClick={() => changeQuantity(p.id, +1)}
                        className="px-2 py-1 border border-cafe-300 rounded hover:bg-cafe-100 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => remove(p.id)}
                    className="text-red-600 text-sm font-semibold hover:text-red-800 transition"
                  >
                    Quitar
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer */}
        {!orderSuccess && (
          <div className="p-5 border-t bg-white/70 backdrop-blur-sm flex flex-col gap-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-cafe-900">Total</span>
              <span className="font-bold text-lg text-cafe-900">S/{total.toFixed(2)}</span>
            </div>
            
            {showOrderForm ? (
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowOrderForm(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
                >
                  Volver
                </button>
                <button 
                  onClick={handleSubmitOrder}
                  disabled={isSubmitting || !customerInfo.name || !customerInfo.phone}
                  className="flex-1 bg-cafe-500 text-white py-3 rounded-lg font-semibold hover:bg-cafe-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Confirmar pedido'}
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowOrderForm(true)}
                disabled={cart.length === 0}
                className="w-full bg-cafe-500 text-white py-3 rounded-lg font-semibold hover:bg-cafe-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Realizar pedido
              </button>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}
