# Real-time web notifications

### Node.js and Service Workers

Este proyecto de ejemplo te sumerge en el funcionamiento de las notificaciones web mediante el uso de Service Workers. Exploraremos la implementación básica de notificaciones push y su interacción con un service worker.

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
