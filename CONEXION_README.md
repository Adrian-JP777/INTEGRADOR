# ClickCafe - Conexión Frontend + Backend

Este proyecto conecta el frontend React con el backend Spring Boot para el sistema de cafetería ClickCafe.

## 🚀 Instrucciones para ejecutar

### 1. Iniciar el Backend (Puerto 8080)

```bash
cd backend
./mvnw spring-boot:run
```

O si tienes Maven instalado globalmente:

```bash
cd backend
mvn spring-boot:run
```

**El backend estará disponible en:** http://localhost:8080

### 2. Iniciar el Frontend (Puerto 5173)

En otra terminal:

```bash
cd cafeteria/clickcafe
npm install  # Solo la primera vez
npm run dev
```

**El frontend estará disponible en:** http://localhost:5173

## 🔗 Endpoints del Backend

### Productos
- `GET /api/products` - Obtener todos los productos
- `GET /api/products/{id}` - Obtener producto por ID
- `POST /api/products` - Crear producto (Admin)
- `PUT /api/products/{id}` - Actualizar producto (Admin)
- `DELETE /api/products/{id}` - Eliminar producto (Admin)

### Pedidos
- `GET /api/orders` - Obtener todos los pedidos
- `GET /api/orders/{id}` - Obtener pedido por ID
- `POST /api/orders` - Crear nuevo pedido
- `PUT /api/orders/{id}/status` - Actualizar estado del pedido
- `DELETE /api/orders/{id}` - Eliminar pedido

## 📊 Swagger UI

Una vez que el backend esté ejecutándose, puedes acceder a la documentación de la API en:
http://localhost:8080/swagger-ui.html

## 🔧 Configuración

### Base de Datos
El proyecto está configurado para usar PostgreSQL:
- Host: localhost:5432
- Database: clickcafedb
- Usuario: postgres
- Contraseña: 200414

### CORS
El backend está configurado para permitir peticiones desde:
- http://localhost:5173 (Vite dev server)
- http://127.0.0.1:5173

## 🛠️ Funcionalidades Implementadas

### Frontend
- ✅ Configuración de Axios para peticiones HTTP
- ✅ Servicios para productos y pedidos
- ✅ Hook personalizado para manejo del carrito
- ✅ Formulario de pedidos con información del cliente
- ✅ Estados de carga y error
- ✅ Datos de respaldo si el backend no está disponible

### Backend
- ✅ API REST para productos
- ✅ API REST para pedidos
- ✅ Configuración CORS
- ✅ Documentación con Swagger
- ✅ Base de datos PostgreSQL

## 🎯 Próximos Pasos

1. **Asegurar que PostgreSQL esté ejecutándose**
2. **Iniciar el backend primero**
3. **Luego iniciar el frontend**
4. **Probar la funcionalidad completa**

## 🐛 Troubleshooting

### Error de conexión al backend
- Verificar que el backend esté ejecutándose en el puerto 8080
- Verificar que PostgreSQL esté ejecutándose
- Revisar la configuración de CORS

### Error de base de datos
- Asegurar que PostgreSQL esté instalado y ejecutándose
- Verificar que la base de datos `clickcafedb` exista
- Revisar las credenciales en `application.properties`

### Frontend no se conecta
- Verificar que ambos servicios estén en los puertos correctos
- Revisar la consola del navegador para errores de CORS
- Verificar que axios esté instalado correctamente
