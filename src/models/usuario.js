import { DataTypes } from "sequelize";
import { conexion } from "../config/sequelize";
import { hashSync, compareSync } from "bcrypt";
import usuario from "../controllers/usuario";
import { sign } from "jsonwebtoken";

export default () => {
  let usuario = conexion.define(
    "usuario",
    {
      usuarioId: {
        field: "id",
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      usuarioNombre: {
        field: "nombre",
        type: DataTypes.STRING(25),
      },
      usuarioApellido: {
        field: "apellido",
        type: DataTypes.STRING(25),
      },
      usuarioCorreo: {
        field: "correo",
        type: DataTypes.STRING(25),
        validate: {
          isEmail: true,
        },
      },
      usuarioPassword: {
        field: "password",
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: "usuarios",
      timestamps: false,
    }
  );
  /* encriptación y otros */
  usuario.prototype.setearPassword = function (password) {
    const hash = hashSync(password, 10);
    this.usuarioPassword = hash;
  };

  usuario.prototype.validarPassword = function (password) {
    return compareSync(password, this.usuarioPassword);
  };

  usuario.prototype.generarJWT = function () {
    const payload = {
      usuarioId: this.usuarioId,
      usuarioCorreo: this.usuarioCorreo,
    };
    const password = "password";
    return sign(payload, password, { expiresIn: "1h" });
  };

  return usuario;
};
