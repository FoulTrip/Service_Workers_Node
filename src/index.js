const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

// middleware: Configurar funciones de rutas
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // convierte datos que llegan atraves de http a json

// Routes: Rutas del servidor
app.use(require("./routes/index"));

// static Content
app.use(express.static(path.join(__dirname, "public")));
app.listen(3000);
console.log("Server in port: 3000");
