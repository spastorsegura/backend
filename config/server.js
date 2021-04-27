// const express=require("express")
import express from "express";
import {tareas_router} from "../routes/tareas";
import {json} from "body-parser";

export class Server{
    constructor(){
        this.app=express();
        this.puerto=process.env.PORT || 8000;
        this.app.use(json());
        this.rutas();
    }
    rutas(){
        this.app.get('/',(req,res)=>{
            res.send("Hola, bienvenido a mi API");
        });
        //?middleware, conglomerado de rutas
        this.app.use(tareas_router);
    }

    iniciarServidor(){
        this.app.listen(this.puerto,()=>{
            console.log(`Servidor corriendo exitosamente: 127.0.0.1:${this.puerto}`)
        });
    }
}

/* module.exports={
    Server,
}; */