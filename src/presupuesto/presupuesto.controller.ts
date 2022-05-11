/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { CreatePresupuestoDto } from './dto/presupuesto.dto';
import { PresupuestoService } from "./presupuesto.service";
@Controller('presupuesto')
export class PresupuestoController {

  constructor(private presupuestoService:PresupuestoService){}

  @Post()
  async createPresupuesto(@Res() res, @Body() createPresupuestoDto:CreatePresupuestoDto) {
   
   const presupuesto=await this.presupuestoService.createPresupuesto(createPresupuestoDto);
    return res.status(HttpStatus.OK).json({
      message: 'presupuesto creado con exito',
      presupuesto:presupuesto
    });
  }

  @Get()
  async getAllPresupuestos(@Res() res){
    
    const presupuesto=await this.presupuestoService.getAllPresupuestos();
    res.status(HttpStatus.OK).json(presupuesto);
  }
  @Get('/:presupuestoID')
   async getOnePresupuesto(@Res() res,@Param('presupuestoID') presupuestoID){
    const presupuesto= await this.presupuestoService.getOnePresupuesto(presupuestoID);
    if(!presupuesto) throw new NotFoundException('el presupuesto no existe.');
    return res.status(HttpStatus.OK).json(presupuesto);
  }
  @Put('/:presupuestoID')
  async presupuestoUpdate(@Res() res,@Param('presupuestoID') presupuestoID,@Body() newPresupuestoDto:CreatePresupuestoDto){
    const presupuestoUpdated = await this.presupuestoService.updatePresupuesto(presupuestoID,newPresupuestoDto);
    return res.status(HttpStatus.CREATED).json({
      message:"Actualizado con exio",
      presupuestoUpdated
    })
  }
  @Delete('/:presupuestoID')
  async deletePresupuesto(@Res() res , @Param('presupuestoID') presupuestoID){
    const presupuestoDeleted= await this.presupuestoService.deletePresupuesto(presupuestoID);
    if(!presupuestoDeleted) throw new NotFoundException('presupuesto no encontrado.')
    res.status(HttpStatus.OK).json({
      message:'presupuesto eliminado con exito',
      presupuestoDeleted
    })
  } 

}
