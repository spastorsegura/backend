import express from "express";
import { json } from "body-parser";
import { connect } from "mongoose";
import { usuario_router } from "../routes/usuario";
require("dotenv").config();

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
    this.app.use(usuario_router);
    this.app.get("/", (req, res) => res.send("Bienvenido a mi API"));
  }
  start() {
    this.app.listen(this.port, async () => {
      console.log(`Servidor corriendo en: http://127.0.0.1:${this.port}`);
      try {
        await connect(process.env.MONGO_COMPASS, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Base de datos conectada exitosamente");
      } catch (error) {
        console.error(error);
      }
    });
  }
}
