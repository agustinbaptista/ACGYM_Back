import { Module } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';
import { PreguntasController } from './preguntas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pregunta } from './entities/Pregunta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pregunta])],
  controllers: [PreguntasController],
  providers: [PreguntasService],
})
export class PreguntasModule {}
