import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EjerciciosService } from './ejercicio.service';
import { EjerciciosController } from './ejercicio.controller';
import { Ejercicio } from './entities/ejercicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ejercicio])],
  controllers: [EjerciciosController],
  providers: [EjerciciosService],
})
export class EjerciciosModule {}