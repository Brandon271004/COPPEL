import { Schema, model } from "mongoose";

export const esquema2 = new Schema({

    nombre:{ type:String},
    
    apellido:{type:String},
    
    edad:{ type: Number},

        sueldo:{type: Number }
})

export const modeloGerentes = new model('Gerentes', esquema2)
