import { Module } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';
import { PreguntasController } from './preguntas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pregunta } from './entities/pregunta.entity'; // con p minúscula

@Module({
  imports: [TypeOrmModule.forFeature([Pregunta])],
  controllers: [PreguntasController],
  providers: [PreguntasService],
})
export class PreguntasModule {}
