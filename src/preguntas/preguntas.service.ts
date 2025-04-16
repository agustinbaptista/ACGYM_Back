import { Injectable,NotFoundException } from '@nestjs/common';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
import { Pregunta } from './entities/Pregunta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class PreguntasService {
  constructor(
    @InjectRepository(Pregunta)
    private PreguntaRepository: Repository<Pregunta>,
  ){}

  async create(createPreguntaDto: CreatePreguntaDto): Promise<Pregunta> {
    const pregunta = this.PreguntaRepository.create(createPreguntaDto);
    return await this.PreguntaRepository.save(pregunta);
  }

  async findAll(): Promise<Pregunta[]> {
    return await this.PreguntaRepository.find();
  }

  async findOne(id: string): Promise<Pregunta> {
    const pregunta = await this.PreguntaRepository.findOne({ where: { id } });
    if (!pregunta) {
      throw new NotFoundException(`Nota with ID ${id} not found`);
    }
    return pregunta;
  }

  async update(id: string, updatePreguntaDto: UpdatePreguntaDto): Promise<Pregunta> {
    const pregunta = await this.findOne(id);
    Object.assign(pregunta, updatePreguntaDto);
    return await this.PreguntaRepository.save(pregunta);
  }

  async remove(id: string): Promise<void> {
    const result = await this.PreguntaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Nota with ID ${id} not found`);
    }
  }

  async findByPregunta(idUser: string): Promise<Pregunta[]> {
    return await this.PreguntaRepository.find({ where: { idUser } });
  }
}
