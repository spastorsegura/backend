//? Con js puro 
// const {Server}=require("./config/Server");
//? Con babelrc
import {Server} from "./config/Server"

const objServer = new Server();
objServer.iniciarServidor();
// console.log("prueba");