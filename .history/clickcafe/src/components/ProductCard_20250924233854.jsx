// ProductCard.jsx
export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-64 flex flex-col items-center">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4 flex flex-col items-center gap-2 text-center">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button
          onClick={() => onAdd(product)}
          className="mt-2 px-4 py-1.5 bg-cafe-500 text-white rounded hover:bg-cafe-600 transition"
        >
          Agregar
        </button>
      </div>
    </div>
  )
}
