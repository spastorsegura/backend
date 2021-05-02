"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearCategoria = void 0;

var _relaciones = require("../config/relaciones");

const crearCategoria = async (req, res) => {
  try {
    const {
      categoriaNombre
    } = req.body;
    const coincidencia = await _relaciones.Categoria.findOne({
      where: {
        categoriaNombre
      }
    });

    if (coincidencia) {
      return res.status(400).json({
        success: false,
        content: null,
        message: "categoría ya existe"
      });
    }

    const nuevaCategoria = await _relaciones.Categoria.create(req.body);
    res.status(201).json({
      success: true,
      content: nuevaCategoria,
      message: "Categoria creada exitosamente"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      content: error,
      message: "Error al crear la categoría"
    });
  }
};

exports.crearCategoria = crearCategoria;