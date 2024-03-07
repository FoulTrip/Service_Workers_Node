# Real-time web notifications

### Node.js and Service Workers

Este proyecto fue creado para que puedas entender de manera clara y sencilla cómo gestionar y enviar notificaciones web en tiempo real. En este ejemplo, utilizo Node.js, Express y otras tecnologías para presentarte un formulario interactivo que simula la experiencia de enviar y recibir notificaciones personalizadas a través de la web.
## Screenshots

![App Screenshot](https://res.cloudinary.com/df2gu30lb/image/upload/v1709798115/v7e1a5zjn9vi1nkpf3ny.webp)

Un **Service Worker** es como un asistente silencioso que trabaja detrás de escena en tu navegador. Su principal trabajo es manejar tareas que no requieren la atención inmediata del usuario, como las notificaciones push.

Cuando visitas una página web que utiliza un Service Worker, este se instala en tu navegador y se ejecuta en segundo plano. Actúa como un intermediario entre la página web y la red, permitiendo funciones poderosas.

Un ejemplo común es gestionar las **Notificaciones Push**. Cuando la página web tiene un mensaje nuevo para ti, el Service Worker recibe esa información y puede mostrarte una notificación, incluso si la página no está abierta. Esto es genial porque puedes recibir actualizaciones sin tener la página web activa.

Además, los Service Workers también pueden ayudar a mejorar la velocidad de carga de la página almacenando en caché recursos necesarios, lo que significa que algunas cosas pueden cargarse más rápidamente, ¡incluso cuando estás offline!

En resumen, piensa en un Service Worker como un pequeño ayudante detrás de escena que maneja tareas importantes, como notificaciones y almacenamiento en caché, para hacer que tu experiencia en la web sea más rápida y eficiente. ¡Es como tener un asistente personal para tu navegador!

## Guias
 - [Library web-push](https://www.npmjs.com/package/web-push)
 - [Article - How to display a notification](https://web.dev/articles/push-notifications-display-a-notification?hl=es-419)

## Cómo Utilizar Este Proyecto

#### Clonar el Repositorio:

```bash
    git clone https://github.com/FoulTrip/Service_Workers_Node.git
    cd Service_Workers_Node
```
#### Instalar Dependencias:

```bash
    npm install
```
#### Generar Claves VAPID:

```bash
    npx web-push generate-vapid-keys
```
Copia las claves generadas y agrégales a tu archivo .env.

#### Ejecutar la Aplicación:

```bash
    npm run dev
```

Este proyecto te ofrece una introducción al mundo de las notificaciones web y su implementación técnica utilizando Service Workers. ¡Explora y experimenta con las notificaciones en este entorno de ejemplo!