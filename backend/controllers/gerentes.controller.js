import { modeloGerentes } from "../models/gerentes.model.js";

const test = () => {
    console.log("conexion a Gerente exitosa ")
}
export default test

modeloGerentes.create({
    nombre: "Axel",

    apellido: "De luna",
    
    edad: 30,
    
    sueldo:200
})