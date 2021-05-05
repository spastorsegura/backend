import { Usuario } from "../models/usuario";
import { hashSync } from "bcrypt";



export const registro = async (req, res) => {
    const objUsuario=new Usuario(req.body)
    const pwdHash=hashSync(req.body.password,10)
    objUsuario.password=pwdHash
    try {
        const nuevoUsuario=await objUsuario.save()
        return res.status(201).json({
            success:true,
            content:nuevoUsuario,
            message:"Usuario creado exitosamente",
        })
        
    } catch (error) {
        return res.status(400).json({
            success:false,
            content:error,
            message:"error al guardar el usuario",
        })
    }
};
export const login = (req, res) => {};
export const mostrarusuario = (req, res) => {};
