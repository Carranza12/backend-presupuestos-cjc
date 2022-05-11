import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PresupuestoModule } from './presupuesto/presupuesto.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PresupuestoModule,
    MongooseModule.forRoot(
      'mongodb+srv://carranza:12323bueno@cluster0.wu8is.mongodb.net/database-cjc?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
