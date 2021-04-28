import {Sequelize} from "sequelize";

export const conexion=new Sequelize(
    "almacen",
    "root",
    "Anotherpl@ce1",
    {
        dialect:"mysql",
        host:"127.0.0.1",
        port:3306,
        timezone:"-05:00",//no funciona en SQLITE
        dialectOptions:{
            dateString:true,
        },
        logging:false,
    })