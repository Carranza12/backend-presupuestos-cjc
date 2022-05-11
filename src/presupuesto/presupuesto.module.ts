/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PresupuestoController } from './presupuesto.controller';
import { PresupuestoService } from './presupuesto.service';
import { MongooseModule } from "@nestjs/mongoose";
import { PresupuestoSchema } from "./schemas/presupuesto.schema";
@Module({
  imports:[
    MongooseModule.forFeature([
      {name:'Presupuesto',schema:PresupuestoSchema}
    ])
  ],
  controllers: [PresupuestoController],
  providers: [PresupuestoService]
})
export class PresupuestoModule {}
