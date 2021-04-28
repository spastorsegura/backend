import { Producto } from "../config/relaciones";

//CRUD
export const crearProducto=async (req,res)=>{
    const nuevoProducto = await Producto.create(req.body);
    res.status(201).json({
        success:true,
        content:nuevoProducto,
        message:"producto creado exitosamente",
    })
}