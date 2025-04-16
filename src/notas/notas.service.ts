import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nota } from './entities/nota.entity';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';

@Injectable()
export class NotasService {
  constructor(
    @InjectRepository(Nota)
    private notasRepository: Repository<Nota>,
  ) {}

  async create(createNotaDto: CreateNotaDto): Promise<Nota> {
    const nota = this.notasRepository.create(createNotaDto);
    return await this.notasRepository.save(nota);
  }

  async findAll(): Promise<Nota[]> {
    return await this.notasRepository.find();
  }

  async findOne(id: string): Promise<Nota> {
    const nota = await this.notasRepository.findOne({ where: { id } });
    if (!nota) {
      throw new NotFoundException(`Nota with ID ${id} not found`);
    }
    return nota;
  }

  async update(id: string, updateNotaDto: UpdateNotaDto): Promise<Nota> {
    const nota = await this.findOne(id);
    Object.assign(nota, updateNotaDto);
    return await this.notasRepository.save(nota);
  }

  async remove(id: string): Promise<void> {
    const result = await this.notasRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Nota with ID ${id} not found`);
    }
  }

  async findByEjercicio(idEjercicio: string): Promise<Nota[]> {
    return await this.notasRepository.find({ where: { idEjercicio } });
  }
}