/* eslint-disable prettier/prettier */

import { ActividadI } from "../interfaces/actividad.interface";

/* eslint-disable @typescript-eslint/no-unused-vars */
export class CreatePresupuestoDto{
  // eslint-disable-next-line prettier/prettier
  nombreCliente: string;
  direccionTrabajo:string;
  asunto:string;
  fechaPresupuesto:Date;
  actividades:Array<ActividadI>;
  correoCliente:string;
  total:number;
  nombreIngeniero:string;
}
