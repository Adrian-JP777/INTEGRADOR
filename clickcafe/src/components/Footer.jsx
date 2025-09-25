export default function Footer(){
  return (
    <footer className="bg-gradient-to-b from-cafe-700 to-cafe-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="text-2xl font-semibold">Bean Scene</div>
          <p className="mt-3 text-white/80">
            Lorem ipsum es simplemente texto de la industria. Desde los 60s se usa para maquetación y pruebas tipográficas.
          </p>
          <div className="mt-4 flex gap-3 text-white/90">
            <a href="#" aria-label="facebook">FB</a>
            <a href="#" aria-label="twitter">TW</a>
            <a href="#" aria-label="instagram">IG</a>
          </div>
        </div>

        <div>
          <div className="font-semibold text-lg">About</div>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>Menu</li>
            <li>Features</li>
            <li>News & Blogs</li>
            <li>Help & Supports</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-lg">Company</div>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>How we work</li>
            <li>Terms of service</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-lg">Contáctanos</div>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>Av. Ejemplo 123, Piura</li>
            <li>+51 999-999-999</li>
            <li>beanscene@mail.com</li>
            <li>www.beanscene.com</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
