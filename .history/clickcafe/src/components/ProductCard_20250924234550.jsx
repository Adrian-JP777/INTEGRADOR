export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden w-64 flex flex-col items-center transition-shadow duration-300">
      {product.image && (
        <div className="w-full h-40 overflow-hidden rounded-t-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-4 flex flex-col items-center gap-2 text-center">
        <h3 className="font-semibold text-lg text-cafe-900">{product.name}</h3>
        <p className="text-gray-700 font-medium">S/{product.price.toFixed(2)}</p>
        <button
          onClick={() => onAdd(product)}
          className="mt-2 px-5 py-2 bg-cafe-500 text-white rounded-full hover:bg-cafe-600 transition-all duration-300"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
