import express from "express"
import {json} from "body-parser";
import {conexion} from "./sequelize"
import * as prueba from "./relaciones";

export default class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT || 8000;
        this.bodyParser();
    }

    bodyParser(){
        this.app.use(json());
    }

    start(){
        this.app.listen(this.port,async()=>{
            console.log(`Servidor corriendo en: http://127.0.0.1:${this.port}`);
            try {
                //no usar force(borra y vuelve a cargar {force:true}), sino alter(solo carga cambios)
                await conexion.sync();
                console.log('Base de datos sincronizada correctamente');
            } catch (error) {
                console.error(error);
            }
        });
    }
}