import Boton from './ui/boton'

export default function Newsletter(){
  return (
    <section className="py-16 bg-gradient-to-b from-cafe-900 to-cafe-700 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Suscríbete para recibir novedades</h2>
        <p className="mt-2 text-white/80">No te pierdas nuestras noticias, tips y ofertas especiales</p>

        <form className="mt-8 flex items-center gap-3 max-w-2xl mx-auto" onSubmit={(e)=>e.preventDefault()}>
          <input type="email" className="flex-1 rounded-full px-5 py-3 text-black" placeholder="Ingresa tu correo" />
          <Boton type="submit">Suscribirse</Boton>
        </form>
      </div>

      <img src="/beans.png" alt="granos" className="absolute bottom-0 left-0 w-72 opacity-40 pointer-events-none"/>
      <img src="/beans.png" alt="granos" className="absolute bottom-0 right-0 w-72 opacity-40 rotate-180 pointer-events-none"/>
    </section>
  )
}
