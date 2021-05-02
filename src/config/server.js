import express from "express";
import { json } from "body-parser";
import { conexion } from "./sequelize";
import { producto_router } from "../routes/producto";
import { usuario_router } from "../routes/usuario";
import { categoria_router } from "../routes/categoria";

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8000;
    this.bodyParser();
    this.rutas();
  }

  bodyParser() {
    this.app.use(json());
  }

  rutas() {
    //se puede agregar un middleware, "/api"
    this.app.use(producto_router);
    this.app.use(usuario_router);
    this.app.use(categoria_router);
    this.app.get("/", (req, res) => res.send("Bienvenido a mi API"));
  }

  start() {
    this.app.listen(this.port, async () => {
      console.log(`Servidor corriendo en: http://127.0.0.1:${this.port}`);
      try {
        //no usar force(borra y vuelve a cargar {force:true}), sino alter(solo carga cambios)
        await conexion.sync();
        console.log("Base de datos sincronizada correctamente");
      } catch (error) {
        console.error(error);
      }
    });
  }
}
