import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ejercicio } from './entities/ejercicio.entity';
import { CreateEjercicioDto } from './dto/create-ejercicio.dto';
import { UpdateEjercicioDto } from './dto/update-ejercicio.dto';

@Injectable()
export class EjerciciosService {
  constructor(
    @InjectRepository(Ejercicio)
    private ejerciciosRepository: Repository<Ejercicio>,
  ) {}

  async create(createEjercicioDto: CreateEjercicioDto): Promise<Ejercicio> {
    const ejercicio = this.ejerciciosRepository.create(createEjercicioDto);
    return await this.ejerciciosRepository.save(ejercicio);
  }

  async findAll(): Promise<Ejercicio[]> {
    return await this.ejerciciosRepository.find();
  }

  async findOne(id: string): Promise<Ejercicio> {
    const ejercicio = await this.ejerciciosRepository.findOne({ where: { id } });
    if (!ejercicio) {
      throw new NotFoundException(`Ejercicio with ID ${id} not found`);
    }
    return ejercicio;
  }

  async update(id: string, updateEjercicioDto: UpdateEjercicioDto): Promise<Ejercicio> {
    const ejercicio = await this.findOne(id);
    Object.assign(ejercicio, updateEjercicioDto);
    return await this.ejerciciosRepository.save(ejercicio);
  }

  async remove(id: string): Promise<void> {
    const result = await this.ejerciciosRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Ejercicio with ID ${id} not found`);
    }
  }

  async findByDia(idDia: string): Promise<Ejercicio[]> {
    return await this.ejerciciosRepository.find({ where: { idDia } });
  }
}