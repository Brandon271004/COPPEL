import { modeloPromociones } from "../models/promociones.model.js";

const test = () => {
    console.log("Promocion furulando xd")
}
export default test

modeloPromociones.create({
    objeto: "Xbox",
    marca: "Series X",
    precio: "7000",
    descuento: "20%",
    Total: "5000"
})