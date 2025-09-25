
# ClickCafe ☕️

> Aplicación web para cafetería desarrollada con React, Vite y Tailwind CSS.

## Descripción
ClickCafe es una plataforma web moderna para cafeterías, diseñada para mostrar productos, gestionar pedidos y mejorar la experiencia del cliente. Incluye navegación, catálogo, carrito, páginas informativas y un diseño responsivo y atractivo.

## Tecnologías principales
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [ESLint](https://eslint.org/)

## Estructura del proyecto
```
clickcafe/
├── public/
│   └── logo.svg, hero.jpg, ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductTabs.jsx
│   │   ├── Newsletter.jsx
│   │   ├── Footer.jsx
│   │   ├── ui/
│   │   │   ├── boton.jsx
│   │   │   └── tarjeta.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── ProductsPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

## Instalación y uso

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/naashlc/ClickCafe.git
   cd ClickCafe/clickcafe
   ```
2. **Instala dependencias:**
   ```bash
   npm install
   ```
3. **Ejecuta en modo desarrollo:**
   ```bash
   npm run dev
   ```
4. **Compila para producción:**
   ```bash
   npm run build
   ```
5. **Previsualiza el build:**
   ```bash
   npm run preview
   ```

## Scripts disponibles
- `npm run dev` — Inicia el servidor de desarrollo con recarga en caliente.
- `npm run build` — Genera la versión optimizada para producción.
- `npm run preview` — Previsualiza el build de producción localmente.
- `npm run lint` — Ejecuta ESLint para mantener la calidad del código.

## Buenas prácticas implementadas
- Componentes reutilizables y desacoplados.
- Uso de hooks y React Router para navegación SPA.
- Estilos con Tailwind CSS y clases personalizadas.
- Estructura de carpetas clara y escalable.
- Separación de datos y lógica de presentación.
- Accesibilidad y diseño responsivo.
- Linting y formateo automático.

## Personalización
- Puedes modificar los colores y fuentes en `tailwind.config.js`.
- Agrega productos en `src/data/products.js`.
- Cambia imágenes en la carpeta `public/`.

## Créditos y licencias
- Desarrollado por [tu nombre o equipo].
- Basado en tecnologías open source.
- [MIT License](LICENSE) (ajusta según corresponda).

---

¡Contribuciones y sugerencias son bienvenidas! Si encuentras un bug o tienes una idea, abre un issue o pull request.
