"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Usuario = exports.Rol = exports.ProductoEstante = exports.Producto = exports.Estante = exports.Categoria = void 0;

var _categoria = _interopRequireDefault(require("../models/categoria"));

var _estante = _interopRequireDefault(require("../models/estante"));

var _producto = _interopRequireDefault(require("../models/producto"));

var _productoEstante = _interopRequireDefault(require("../models/productoEstante"));

var _rol = _interopRequireDefault(require("../models/rol"));

var _usuario = _interopRequireDefault(require("../models/usuario"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Categoria = (0, _categoria.default)();
exports.Categoria = Categoria;
const Estante = (0, _estante.default)();
exports.Estante = Estante;
const Producto = (0, _producto.default)();
exports.Producto = Producto;
const ProductoEstante = (0, _productoEstante.default)();
exports.ProductoEstante = ProductoEstante;
const Rol = (0, _rol.default)();
exports.Rol = Rol;
const Usuario = (0, _usuario.default)(); //Solo para resetear solo usuarios
// Usuario.sync({force:true});

exports.Usuario = Usuario;
Categoria.hasMany(Estante, {
  foreignKey: {
    name: "categorias_id",
    allowNull: false
  }
});
Estante.belongsTo(Categoria, {
  foreignKey: "categorias_id"
});
Estante.hasMany(ProductoEstante, {
  foreignKey: {
    name: "estantes_id",
    allowNull: false
  }
});
ProductoEstante.belongsTo(Estante, {
  foreignKey: "estantes_id"
});
Producto.hasMany(ProductoEstante, {
  foreignKey: {
    name: "productos_id",
    allowNull: false
  }
});
ProductoEstante.belongsTo(Producto, {
  foreignKey: "productos_id"
});
Rol.hasMany(Usuario, {
  foreignKey: {
    name: "roles_id",
    allowNull: false
  }
});
Usuario.belongsTo(Rol, {
  foreignKey: "roles_id"
}); // Usuario.sync({force:true});
// Estante.sync({force:true})
// Categoria.sync({force:true})
// Categoria.sync({alter:true})