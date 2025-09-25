export default function CartDrawer({ open, onClose, cart, remove, changeQuantity }) {
  const total = cart.reduce((a,b)=> a + b.price * b.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${open? 'pointer-events-auto':'pointer-events-none'}`}>
      {/* Backdrop */}
      <div onClick={onClose} className={`absolute inset-0 bg-black/50 transition ${open? 'opacity-100':'opacity-0'}`} />
      {/* Panel */}
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform ${open? 'translate-x-0':'translate-x-full'}`}>
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="text-lg font-semibold">Tu carrito</h3>
          <button onClick={onClose} className="text-cafe-700">Cerrar</button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {cart.length===0 && <p className="text-cafe-900/60">Aún no agregas productos.</p>}
          {cart.map(p => (
            <div key={p.id} className="flex gap-3 items-center">
              <img src={p.image} alt={p.name} className="w-16 h-16 rounded object-cover"/>
              <div className="flex-1">
                <div className="font-medium">{p.name}</div>
                <div className="text-sm text-cafe-900/70">S/{p.price.toFixed(2)}</div>
                <div className="flex items-center gap-2 mt-1">
                  <button onClick={()=>changeQuantity(p.id, -1)} className="px-2 border rounded">-</button>
                  <span>{p.quantity}</span>
                  <button onClick={()=>changeQuantity(p.id, +1)} className="px-2 border rounded">+</button>
                </div>
              </div>
              <button onClick={()=>remove(p.id)} className="text-red-600 text-sm">Quitar</button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium">Total</span>
            <span className="font-semibold">S/{total.toFixed(2)}</span>
          </div>
          <button className="w-full boton-dorado">Pagar</button>
        </div>
      </aside>
    </div>
  )
}
