import { modeloClientes } from "../models/clientes.model.js";



const test = () => {
    console.log("La Conexión ha sido exitosa en clientes ;)")
}


export default test



modeloClientes.create({
    
    
    nombre: "Brandon",

    apellidos:"Martinez",

    edad: "19",

    Total: "200"
})