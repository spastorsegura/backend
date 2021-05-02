import { Categoria } from "../config/relaciones";

export const crearCategoria = async (req, res) => {
  try {
    const { categoriaNombre } = req.body;
    const coincidencia = await Categoria.findOne({
      where: {
        categoriaNombre,
      },
    });
    if (coincidencia) {
      return res.status(400).json({
        success: false,
        content: null,
        message: "categoría ya existe",
      });
    }
    const nuevaCategoria = await Categoria.create(req.body);
    res.status(201).json({
      success: true,
      content: nuevaCategoria,
      message: "Categoria creada exitosamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      content: error,
      message: "Error al crear la categoría",
    });
  }
};
