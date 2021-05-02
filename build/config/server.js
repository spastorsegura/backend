"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _sequelize = require("./sequelize");

var _producto = require("../routes/producto");

var _usuario = require("../routes/usuario");

var _categoria = require("../routes/categoria");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Server {
  constructor() {
    this.app = (0, _express.default)();
    this.port = process.env.PORT || 8000;
    this.bodyParser();
    this.rutas();
  }

  bodyParser() {
    this.app.use((0, _bodyParser.json)());
  }

  rutas() {
    //se puede agregar un middleware, "/api"
    this.app.use(_producto.producto_router);
    this.app.use(_usuario.usuario_router);
    this.app.use(_categoria.categoria_router);
    this.app.get("/", (req, res) => res.send("Bienvenido a mi API"));
  }

  start() {
    this.app.listen(this.port, async () => {
      console.log(`Servidor corriendo en: http://127.0.0.1:${this.port}`);

      try {
        //no usar force(borra y vuelve a cargar {force:true}), sino alter(solo carga cambios)
        await _sequelize.conexion.sync();
        console.log("Base de datos sincronizada correctamente");
      } catch (error) {
        console.error(error);
      }
    });
  }

}

exports.default = Server;