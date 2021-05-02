"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conexion = void 0;

var _sequelize = require("sequelize");

const conexion = new _sequelize.Sequelize("almacen", "root", "Anotherpl@ce1", {
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3306,
  timezone: "-05:00",
  //no funciona en SQLITE
  dialectOptions: {
    dateString: true
  },
  logging: false
});
exports.conexion = conexion;