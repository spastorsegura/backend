import { Usuario } from "../config/relaciones";

export const registro = async (req, res) => {
  try {
    const { password } = req.body;
    const nuevoUsuario = Usuario.build(req.body);
    nuevoUsuario.setearPassword(password);
    await nuevoUsuario.save();
    return res.status(201).json({
      success: true,
      content: nuevoUsuario,
      message: "usuario creado exitosamente",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      content: error,
      message: "Error al crear el usuario",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuarioEncontrado = await Usuario.findOne({
      where: {
        usuarioCorreo: email,
      },
    });
    if (!usuarioEncontrado) {
      return res.status(404).json({
        succes: false,
        content: null,
        message: "Usuario no encontrado",
      });
    }
    const resultado = usuarioEncontrado.validarPassword(password);
    if (resultado) {
      return res.json({
        success: true,
        content: usuarioEncontrado.generarJWT(),
        message: "Bienvenido",
      });
    } else {
      return res.status(400).json({
        success: false,
        content: null,
        message: "contraseña incorrecta",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      content: error,
      message: "Error al hacer el login",
    });
  }
};
