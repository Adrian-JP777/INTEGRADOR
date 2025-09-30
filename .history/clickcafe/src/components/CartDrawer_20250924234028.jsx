export default function CartDrawer({ open, onClose, cart, remove, changeQuantity }) {
  const total = cart.reduce((a, b) => a + b.price * b.quantity, 0);

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="p-5 border-b flex items-center justify-between bg-cafe-50">
          <h3 className="text-xl font-semibold text-cafe-900">Tu carrito</h3>
          <button onClick={onClose} className="text-cafe-700 hover:text-cafe-900 font-medium transition">Cerrar</button>
        </div>

        {/* Items */}
        <div className="p-5 space-y-4 overflow-y-auto h-[calc(100%-180px)] scrollbar-thin scrollbar-thumb-cafe-300 scrollbar-track-gray-100">
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
        </div>

        {/* Footer */}
        <div className="p-5 border-t bg-cafe-50">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium text-cafe-900">Total</span>
            <span className="font-bold text-lg text-cafe-900">S/{total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-cafe-500 text-white py-3 rounded-lg font-semibold hover:bg-cafe-600 transition">
            Pagar
          </button>
        </div>
      </aside>
    </div>
  );
}
