import { modeloProductos } from "../models/productos.model.js";

const test = () => {
    console.log("Conexion exitosa en productos ;) ")
}
export default test

modeloProductos.create({
    objeto: "Xbox",

    modelo: "Series X",
    
    total: 7000
})