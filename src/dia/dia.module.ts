import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiasService } from './dia.service';
import { DiasController } from './dia.controller';
import { Dia } from './entities/dia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dia])],
  controllers: [DiasController],
  providers: [DiasService],
})
export class DiasModule {}