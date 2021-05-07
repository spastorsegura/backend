import { Router } from "express";
import * as usuario_controller from "../controllers/usuario"
import Multer from "multer"

export const usuario_router=Router()
const multer=Multer({
    storage:Multer.memoryStorage(),
    limits:{
        fileSize:5*1024*1024, //5mb
    }
})
usuario_router
.route("/usuarios")
.post(multer.single("imagen"),usuario_controller.crearUsuario)