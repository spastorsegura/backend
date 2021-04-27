import {Router} from "express";
import {crearTarea, listarTareaPorId, listarTareas} from "../controllers/tareas"

export const tareas_router=Router();

tareas_router.route("/tareas").post(crearTarea).get(listarTareas);
tareas_router.route("/tareas/:id").get(listarTareaPorId);