import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RutinasService } from './rutina.service';
import { RutinasController } from './rutina.controller';
import { Rutina } from './entities/rutina.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rutina])],
  controllers: [RutinasController],
  providers: [RutinasService],
})
export class RutinasModule {}