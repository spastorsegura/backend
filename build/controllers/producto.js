"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listarProductos = exports.crearProducto = void 0;

var _relaciones = require("../config/relaciones");

//CRUD
const crearProducto = async (req, res) => {
  /*  await Modelo.create(data) > crea registro en BD
        Modelo.build() > no se crea registro BD  */
  try {
    const validacion = new RegExp(/^[a-zA-Z ]+$/);

    if (validacion.test(req.body.productoNombre)) {
      const nuevoProducto = await _relaciones.Producto.create(req.body);
      res.status(201).json({
        success: true,
        content: nuevoProducto,
        message: "producto creado exitosamente"
      });
    } else {
      return res.status(400).json({
        success: false,
        content: null,
        message: "Nombre de producto incorrecto"
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      content: error,
      message: "Hubo en error al registrar un producto"
    });
  }
};

exports.crearProducto = crearProducto;

const listarProductos = async (req, res) => {
  try {
    const productos = await _relaciones.Producto.findAll();
    return res.json({
      success: true,
      content: productos,
      message: null
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      content: error,
      message: "Error al devolver los productos"
    });
  }
};

exports.listarProductos = listarProductos;