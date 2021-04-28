import {DataTypes} from "sequelize";
import {conexion} from "../config/sequelize"

export default ()=>
conexion.define("producto",{
    productoId:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        unique:true,
        autoIncrement:true,
        field:'id'
    },
    productoNombre:{
        type:DataTypes.STRING(45),
        field:'nombre',
        allowNull:false
    },
    productoPrecio:{
        type:DataTypes.DECIMAL(5,2),
        field:"precio",
        allowNull:false
    },
},{
    tableName:"productos",
    timestamps:true,
    createdAt:"fecha_creacion",
    updatedAt:"ultima_modificacion",
});