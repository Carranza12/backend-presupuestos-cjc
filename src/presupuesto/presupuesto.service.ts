/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { PresupuestoI } from "./interfaces/presupuesto.interface";
import { CreatePresupuestoDto } from "./dto/presupuesto.dto";
@Injectable()
export class PresupuestoService {
    totalArray:Array<number>=[];
    constructor(@InjectModel('Presupuesto') private readonly presupuestoModel:Model<PresupuestoI>){}

    async getAllPresupuestos():Promise<PresupuestoI[]>{
        const presupuestos= await this.presupuestoModel.find();
        return presupuestos;
    }

    async getOnePresupuesto(presupuestoID:string):Promise<PresupuestoI>{
        const presupuesto=await this.presupuestoModel.findById(presupuestoID);
        return presupuesto;
    }

    async createPresupuesto(createPresupuestoDto: CreatePresupuestoDto):Promise<PresupuestoI>{
        this.totalArray=[];
        createPresupuestoDto.actividades.map(a=>{
            a.importe=a.cantidad*a.precioUnitario;
            this.totalArray.push(a.importe);
        })
        let suma=0;
        this.totalArray.forEach (function(numero){
            suma += numero;
        });
        createPresupuestoDto.total=suma;
        const newPresupuesto= await new this.presupuestoModel(createPresupuestoDto);
         newPresupuesto.save();
        return newPresupuesto;
    }

    async updatePresupuesto(PresupuestoID:string, createPresupuesto:CreatePresupuestoDto):Promise<PresupuestoI>{
        const presupuestoUpdated=await this.presupuestoModel.findByIdAndUpdate(PresupuestoID,createPresupuesto,{new:true});
        return presupuestoUpdated;
    }

    async deletePresupuesto(PresupuestoID:string):Promise<PresupuestoI>{
        const presupuestoDeleted=await this.presupuestoModel.findByIdAndDelete(PresupuestoID);
        return presupuestoDeleted;
    }
}
