const express=requiere("express")
class Server{
    constructor(){
        this.app=express()
        this.puerto=process.env.PORT || 8000;
    }
    iniciarServidor(){
        this.app.listen(this.puerto,()=>{
            console.log('Servidor corriendo exitosamente: 127.0.0.1:${this.puerto}')
        });
    }
}

module.exports={
    Server,
};