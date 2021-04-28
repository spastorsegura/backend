import { DataTypes } from "sequelize";
import { conexion } from "../config/sequelize";

export default ()=>
conexion.define("estante",{
    estanteId:{
        primaryKey:true,
        field:"id",
        autoIncrement:true,
        unique:true,
        allowNull:true,
        type:DataTypes.INTEGER,
    },
    estanteNombre:{
        field:"nombre",
        type:DataTypes.STRING(45),

    }
},{
    tableName:"estantes",
    timestamp:false,
})