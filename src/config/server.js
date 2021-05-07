import express from "express";
import { json } from "body-parser";
import { usuario_router } from "../routes/usuario";

require("dotenv").config();

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;
    this.bodyParser();
    this.CORS();
    this.rutas();
  }
  CORS() {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Header",
        "Content-type",
        "Authorization"
      );
      res.header("Access-Control-Allow-Methods", "GET", "POST", "PUT");
      next();
    });
  }
  bodyParser() {
    this.app.use(json());
  }
  rutas() {
    this.app.use(usuario_router);
    this.app.get("/", (req, res) => {
      res.send("Bienvenido a mi API");
    });
  }
  start() {
    // sirve para levantar el servidor en el cual le tenemos que pasar el puerto y si todo es exitoso ingresaremos al callback (segundo parametro)
    this.app.listen(this.port, async () => {
      console.log(`Servidor corriendo en: http://127.0.0.1:${this.port}`);
    });
  }
}
