export default function ContactPage(){
  return (
    <section className="py-16 max-w-5xl mx-auto px-6">
      <h1 className="titulo-seccion">Contacto</h1>
      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e)=>e.preventDefault()}>
        <input placeholder="Nombre" className="border rounded-lg px-4 py-2" />
        <input placeholder="Correo" type="email" className="border rounded-lg px-4 py-2" />
        <input placeholder="Asunto" className="md:col-span-2 border rounded-lg px-4 py-2" />
        <textarea placeholder="Mensaje" rows={5} className="md:col-span-2 border rounded-lg px-4 py-2" />
        <button className="boton-dorado md:col-span-2">Enviar</button>
      </form>
    </section>
  )
}
