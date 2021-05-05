import { model,Schema } from "mongoose";
import { tareaSchema } from "./tarea";

const usuarioSchema = new Schema(
  {
    usuarioNombre: {
      type: Schema.Types.String,
      alias: "nombre",
    },
    usuarioApellido: {
      type: Schema.Types.String,
      alias: "apellido",
      require: true,
      trim: true,
      minLength: 5,
      maxLength: 30,
      // lowercase,uppercase:true,
    },
    usuarioCorreo: {
      unique: true,
      type: Schema.Types.String,
      required: true,
      alias: "correo",
    },
    usuarioPassword: {
      type: Schema.Types.String,
      alias: "password",
    },
    usuarioCelular: {
      type: Schema.Types.Number,
      unique: true,
      alias: "celular",
    },
    usuarioFechaNacimiento: {
      type: Schema.Types.Date,
      alias: "fec_nacimiento",
    },
    usuarioTareas:{
        type:[tareaSchema],
        alias:"tareas",
      } ,
  },
  {
    timestamps: {
      createdAt: "fecha_creacion",
      updatedAt: false,
    },
  }
);

export const Usuario = model("usuario", usuarioSchema);
