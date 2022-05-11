/* eslint-disable prettier/prettier */


import { ActividadI } from "./actividad.interface";

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface PresupuestoI{
    nombreCliente:string,
    direccionTrabajo:string,
    asunto:string,
    fechaPresupuesto:Date,
    actividades:Array<ActividadI>,
    correoCliente:string,
    total:number,
    nombreIngeniero:string,
}