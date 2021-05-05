import { Usuario } from "../models/usuario";
import { compareSync, hashSync } from "bcrypt";

export const registro = async (req, res) => {
  const objUsuario = new Usuario(req.body);
  const pwdHash = hashSync(req.body.password, 10);
  objUsuario.password = pwdHash;
  try {
    const nuevoUsuario = await objUsuario.save();
    return res.status(201).json({
      success: true,
      content: nuevoUsuario,
      message: "Usuario creado exitosamente",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      content: error,
      message: "error al guardar el usuario",
    });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({
    usuarioCorreo: email,
  });
  if (!usuario) {
    return res.status(404).json({
      success: false,
      content: null,
      message: "Usuario no existe",
    });
  }
  const resultado = compareSync(password, usuario.usuarioPassword);
  if (resultado) {
    return res.json({
      success: true,
      content: null,
      message: "bienvenido",
    });
  }
  return res.status(401).json({
    success: false,
    content: null,
    message: "credenciales incorrectas",
  });
};
export const mostrarusuario = (req, res) => {};
