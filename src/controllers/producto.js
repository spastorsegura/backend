import { Producto } from "../config/relaciones";

//CRUD
export const crearProducto = async (req, res) => {
  /*  await Modelo.create(data) > crea registro en BD
        Modelo.build() > no se crea registro BD  */
  try {
    const validacion = new RegExp(/^[a-zA-Z ]+$/);

    if (validacion.test(req.body.productoNombre)) {
      const nuevoProducto = await Producto.create(req.body);
      res.status(201).json({
        success: true,
        content: nuevoProducto,
        message: "producto creado exitosamente",
      });
    } else {
      return res.status(400).json({
        success: false,
        content: null,
        message: "Nombre de producto incorrecto",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      content: error,
      message: "Hubo en error al registrar un producto",
    });
  }
};

export const listarProductos=async(req,res)=>{
    try {
        const productos=await Producto.findAll();
        return res.json({
            success:true,
            content:productos,
            message:null,
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            content:error,
            message:"Error al devolver los productos",
        })
    }
}
