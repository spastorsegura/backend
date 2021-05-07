/* Un usuario puede tener varios teléfonos, sin embargo, un teléfono pertenece a un solo usuairo, hacer el modelado en bd no relacional */
import { Schema } from "mongoose";

const telefonoSchema = new Schema({
    codigo_ciudad: Schema.Types.Number,
    numero:{
        type:Schema.Types.Number,
        unique:true,
        required:true,
    }
},{
    _id:false,
    timestamps:false,
});
const usuarioSchema = new Schema({
    nombre:{
        type:Schema.Types.String(10),
        alias:"nombre",
        required:true,
        maxlenght:50,
        minlenght:10,
    },
    apellido:{
        type:Schema.Types.String,
        alias:"apellidos",
        required:true,
    },
    direccion: Schema.Types.String,
    fotografia: Schema.Types.String,
    sexo:{
        required:true,
        type:Schema.Types.String,
    },
    telefonos:[telefonoSchema]

},{
    timestamps:false,
});
export const Usuario = model("usuario", usuarioSchema);
