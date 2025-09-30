export default function Testimonials(){
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="titulo-seccion">Our coffee perfection feedback</h2>
        <p className="text-center mt-2 parrafo-suave">Our customers have amazing things to say about us</p>

        <div className="mt-10 relative bg-cafe-50 rounded-2xl p-10 shadow-suave">
          <div className="text-5xl text-cafe-500">“</div>
          <p className="parrafo-suave mt-4">
            Lorem ipsum es texto de relleno para simular un testimonio sobre lo rico del café y el ambiente.
            Ha sobrevivido por décadas y sigue siendo muy usado en el diseño y la tipografía.
          </p>
          <div className="mt-8">
            <div className="font-semibold text-cafe-900">Jonny Thomas</div>
            <div className="text-sm text-cafe-900/60">Project Manager</div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
            alt="cliente"
            className="w-14 h-14 rounded-full ring-4 ring-white absolute -bottom-7 left-1/2 -translate-x-1/2"
          />

          <button className="absolute top-1/2 -left-5 -translate-y-1/2 boton-dorado" aria-label="Anterior">←</button>
          <button className="absolute top-1/2 -right-5 -translate-y-1/2 boton-dorado" aria-label="Siguiente">→</button>
        </div>
      </div>
    </section>
  )
}
