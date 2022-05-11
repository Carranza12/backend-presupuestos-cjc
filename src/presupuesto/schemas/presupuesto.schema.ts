/* eslint-disable prettier/prettier */
import { Schema} from 'mongoose';



const ActividadSchema = new Schema({
    descripcion: String,
    cantidad: Number,
    unidad: String,
    precioUnitario: Number,
    importe: Number,
  });

export const PresupuestoSchema =new Schema({
    nombreCliente:String,
    direccionTrabajo:String,
    asunto:String,
    fechaPresupuesto:{
        type:Date,
        default:Date.now
    },
    actividades:{
        type:[ActividadSchema]
    },
    correoCliente:String,
    total:Number,
    nombreIngeniero:String,
})

