
# Mini Aplicación de Compra de Dispositivos Móviles

## Descripción

Esta aplicación es una SPA (Single Page Application) desarrollada en React/Preact que permite a los usuarios:

1. Ver un listado de dispositivos móviles.
2. Consultar detalles de un producto específico.
3. Añadir productos al carrito con opciones específicas (color y almacenamiento).

El proyecto se ha desarrollado siguiendo los requisitos descritos en el documento de prueba.

## Instalación

Sigue los pasos a continuación para ejecutar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/JuanDa14/aws-solutions-front-test.git
   cd aws-solutions-front-test
   ```

2. **Instalar dependencias:**
   Asegúrate de tener Node.js instalado y ejecuta:

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**

   ```bash
   npm start
   ```

   Esto iniciará la aplicación en `http://localhost:5174/`.

4. **Construir para producción:**

   ```bash
   npm run build
   ```

   Generará una versión optimizada en la carpeta `build`.

5. **Ejecutar tests:**

   ```bash
   npm test
   ```

6. **Comprobar el código:**
   ```bash
   npm run lint
   ```

## Notas Adicionales

-  **Diseño:** El diseño sigue las estructuras descritas en el documento, con adaptaciones según necesidades. Se valoró el detalle en la presentación.
-  **Almacenamiento en cliente:** Los datos de la API se cachean localmente con una expiración de 1 hora para reducir las peticiones al servidor.

## Recursos Utilizados

### API Endpoints

1. **Listado de productos:**  
   `GET /api/product`  
   Devuelve una lista de productos.

2. **Detalle del producto:**  
   `GET /api/product/:id`  
   Devuelve detalles específicos de un producto.

3. **Añadir producto al carrito:**  
   `POST /api/cart`  
   Body:

   ```json
   {
   	"id": "0001",
   	"colorCode": 1,
   	"storageCode": 2
   }
   ```

   Respuesta:

   ```json
   {
   	"count": 1
   }
   ```

### URL del API:

-  Base URL: [https://itx-frontend-test.onrender.com/](https://itx-frontend-test.onrender.com/)

## Contacto

Si tienes dudas o sugerencias, por favor, contacta con [ju4ncode@gmail.com].

---

¡Gracias por revisar este proyecto! Cualquier feedback es bienvenido.
