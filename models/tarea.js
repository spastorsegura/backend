import { Schema } from "mongoose";

export const tareaSchema=new Schema({
    tareaFecha:{
        type:Schema.Types.Date,
        alias:'fecha',
        required:true,
    },
    tareaNombre:{
        type:Schema.Types.String,
        minLenght:3,
        maxLenght:40,
        alias:'nombre',
        required:true,
    },
    tareaLugar:{
        type:Schema.Types.String,
        alias:'lugar',
    },
    tareaEstado:{
        type:Schema.Types.String,
        alias:'Estado',
    },

},{
    timestamps:true,
})