import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEstadisticaDto } from './dto/create-estadistica.dto';
import { UpdateEstadisticaDto } from './dto/update-estadistica.dto';
import { Estadistica } from './entities/estadistica.entity';
import { Repository } from 'typeorm';



@Injectable()
export class EstadisticaService {
  constructor(
    @InjectRepository(Estadistica)
    private estadisticaRepository: Repository<Estadistica>,
  ) {}

  async create(createEstadisticaDto: CreateEstadisticaDto): Promise<Estadistica> {
    const estadistica = this.estadisticaRepository.create(createEstadisticaDto);
    return await this.estadisticaRepository.save(estadistica);
  }

  async findAll(): Promise<Estadistica[]> {
    return await this.estadisticaRepository.find();
  }

  async findOne(id: string): Promise<Estadistica> {
    const estadistica = await this.estadisticaRepository.findOne({ where: { id } });
    if (!estadistica) {
      throw new NotFoundException(`Estadistica with ID ${id} not found`);
    }
    return estadistica;
  }

  async update(id: string, updateEstadisticaDto: UpdateEstadisticaDto): Promise<Estadistica> {
    const estadistica = await this.findOne(id);
    Object.assign(estadistica, updateEstadisticaDto);
    return await this.estadisticaRepository.save(estadistica);
  }

  async remove(id: string): Promise<void> {
    const result = await this.estadisticaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Estadistica with ID ${id} not found`);
    }
  }

  async findByEjercicio(idEjercicio: string): Promise<Estadistica[]> {
    return await this.estadisticaRepository.find({ where: { idEjercicio } });
  }
}