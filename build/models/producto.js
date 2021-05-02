"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("../config/sequelize");

var _default = () => _sequelize2.conexion.define("producto", {
  productoId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    field: 'id'
  },
  productoNombre: {
    type: _sequelize.DataTypes.STRING(45),
    field: 'nombre',
    allowNull: false
  },
  productoPrecio: {
    type: _sequelize.DataTypes.DECIMAL(5, 2),
    field: "precio",
    allowNull: false
  }
}, {
  tableName: "productos",
  timestamps: true,
  createdAt: "fecha_creacion",
  updatedAt: "ultima_modificacion"
});

exports.default = _default;