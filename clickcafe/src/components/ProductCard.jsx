import Tarjeta from './ui/tarjeta'
import Boton from './ui/boton'

export default function ProductCard({ product, onAdd }){
  return (
    <Tarjeta className="p-4 flex flex-col items-center text-center">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-xl" />
      <h3 className="mt-4 font-semibold text-lg text-cafe-900">{product.name}</h3>
      <p className="text-sm text-cafe-900/60">Coffee 50% | Milk 50%</p>
      <span className="mt-2 font-semibold text-cafe-700">S/{product.price.toFixed(2)}</span>
      <Boton className="mt-3" onClick={()=>onAdd(product)}>Pedir Ahora</Boton>
    </Tarjeta>
  )
}
