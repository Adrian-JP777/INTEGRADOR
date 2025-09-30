 ☕ ClickCafe - Sistema de Cafetería Digital

Una aplicación web moderna para la gestión de una cafetería desarrollada con **React + Vite**, que incluye funcionalidades tanto para clientes como para administradores.

## 🚀 Características Principales

### Para Clientes:
- ✅ **Catálogo de productos** con navegación intuitiva
- 🛒 **Carrito de compras** en tiempo real
- 📱 **Interfaz responsive** optimizada para móviles y desktop
- 🎨 **Diseño moderno** con Tailwind CSS
- 🔄 **Animaciones fluidas** con Framer Motion
- 📍 **Navegación SPA** con React Router

### Para Administradores:
- 👥 **Panel de administración** completo
- 📊 **Gestión de productos** (CRUD)
- 📋 **Gestión de pedidos**
- 💰 **Panel de ventas y estadísticas**
- 🔐 **Sistema de autenticación**

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Routing**: React Router DOM 7.8.2
- **Styling**: Tailwind CSS 3.4.3
- **Animations**: Framer Motion 12.23.12
- **Icons**: Heroicons & React Icons
- **Linting**: ESLint 9.33.0
- **CSS Processing**: PostCSS + Autoprefixer

## 📁 Estructura del Proyecto

```
clickcafe/
├── 📁 public/                    # Archivos públicos estáticos
│   ├── cafeclick.svg            # Logo de la aplicación
│   └── hero.jpg                 # Imagen principal del hero
│
├── 📁 src/                      # Código fuente principal
│   ├── 📄 App.jsx               # Componente raíz de la aplicación
│   ├── 📄 main.jsx              # Punto de entrada de React
│   ├── 📄 index.css             # Estilos globales con Tailwind
│   │
│   ├── 📁 app/                  # Configuración de la aplicación
│   │
│   ├── 📁 components/           # Componentes reutilizables
│   │   ├── AdminDrawer.jsx      # Drawer de navegación admin
│   │   ├── CartDrawer.jsx       # Carrito de compras lateral
│   │   ├── Footer.jsx           # Pie de página
│   │   ├── Hero.jsx             # Sección hero de la página principal
│   │   ├── Navbar.jsx           # Barra de navegación
│   │   ├── ProductCard.jsx      # Tarjeta individual de producto
│   │   ├── ProductTabs.jsx      # Tabs para categorías de productos
│   │   ├── Promotions.jsx       # Sección de promociones
│   │   │
│   │   └── 📁 ui/               # Componentes UI base
│   │       ├── boton.jsx        # Componente botón personalizado
│   │       └── tarjeta.jsx      # Componente tarjeta base
│   │
│   ├── 📁 data/                 # Datos y configuraciones
│   │
│   ├── 📁 features/             # Funcionalidades específicas
│   │
│   ├── 📁 layouts/              # Layouts de páginas
│   │   └── AdminLayout.jsx      # Layout para páginas de admin
│   │
│   ├── 📁 pages/                # Páginas principales
│   │   ├── AboutPage.jsx        # Página "Acerca de"
│   │   ├── ContactPage.jsx      # Página de contacto
│   │   ├── HomePage.jsx         # Página de inicio
│   │   ├── ProductsPage.jsx     # Catálogo de productos
│   │   │
│   │   └── 📁 admin/            # Páginas del panel administrativo
│   │       ├── AdminAboutPage.jsx     # Admin: Gestión página "Acerca de"
│   │       ├── AdminHomePage.jsx      # Admin: Dashboard principal
│   │       ├── AdminPedidosPage.jsx   # Admin: Gestión de pedidos
│   │       ├── AdminProductsPage.jsx  # Admin: Gestión de productos
│   │       └── AdminSalesPage.jsx     # Admin: Reportes de ventas
│   │
│   ├── 📁 services/             # Servicios y API calls
│   │   ├── auth.js              # Servicio de autenticación
│   │   ├── http.js              # Cliente HTTP base
│   │   └── products.js          # Servicio de productos
│   │
│   ├── 📁 shared/               # Utilidades compartidas
│   │   └── 📁 utils/            # Funciones utilitarias
│   │       ├── currency.js      # Formateo de moneda
│   │       └── validators.js    # Validadores de formularios
│   │
│   └── 📁 styles/               # Estilos adicionales
│
├── 📄 index.html                # Template HTML principal
├── 📄 package.json              # Dependencias y scripts
├── 📄 vite.config.js            # Configuración de Vite
├── 📄 tailwind.config.js        # Configuración de Tailwind CSS
├── 📄 postcss.config.js         # Configuración de PostCSS
├── 📄 eslint.config.js          # Configuración de ESLint
└── 📄 README.md                 # Este archivo
```

## ⚡ Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/clickcafe.git
cd clickcafe
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta el linter para verificar el código |

## 🎯 Funcionalidades Detalladas

### Sistema de Navegación
- **Rutas públicas**: `/`, `/products`, `/about`
- **Rutas admin**: `/admin/home`, `/admin/products`, `/admin/pedidos`, `/admin/sales`
- **Navegación condicional** basada en rol de usuario

### Gestión del Carrito
- ➕ Agregar productos con cantidad
- ➖ Modificar cantidades directamente
- 🗑️ Eliminar productos individualmente
- 💾 Persistencia en memoria durante la sesión

### Panel Administrativo
- 🔒 **Acceso protegido** por autenticación
- 📊 **Dashboard** con métricas importantes
- 🛍️ **CRUD completo** de productos
- 📦 **Gestión de pedidos** en tiempo real
- 💹 **Reportes de ventas** y analytics

## 🎨 Diseño y UI/UX

- **Mobile First**: Diseño responsivo desde móviles hacia desktop
- **Componentes reutilizables**: Arquitectura modular para fácil mantenimiento
- **Animaciones suaves**: Transiciones y efectos con Framer Motion
- **Paleta de colores**: Tonos cálidos que evocan el ambiente cafetero
- **Tipografía**: Fuentes legibles y modernas

## 🚀 Próximas Características

- [ ] 🔐 Sistema de autenticación completo
- [ ] 💳 Integración de pagos
- [ ] 📧 Sistema de notificaciones
- [ ] 📱 PWA (Progressive Web App)
- [ ] 🌐 API REST backend
- [ ] 📊 Dashboard de analytics avanzado
- [ ] 🛒 Historial de pedidos
- [ ] ⭐ Sistema de reseñas y calificaciones

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Proyecto**: ClickCafe
- **Repository**: [GitHub](https://github.com/Adrian-JP777/INTEGRADOR)
- **Desarrollado con**: ❤️ y ☕

---

**¡Gracias por usar ClickCafe!** ☕✨
