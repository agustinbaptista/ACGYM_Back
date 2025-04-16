import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHistorialDto } from './dto/create-historial.dto';
import { UpdateHistorialDto } from './dto/update-historial.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Historial } from './entities/historial.entity';



@Injectable()
export class HistorialService {
  constructor(
    @InjectRepository(Historial)
    private historialsRepository: Repository<Historial>,
  ) {}

  async create(createHistorialDto: CreateHistorialDto): Promise<Historial> {
    const historial = this.historialsRepository.create(createHistorialDto);
    return await this.historialsRepository.save(historial);
  }

  async findAll(): Promise<Historial[]> {
    return await this.historialsRepository.find();
  }

  async findOne(id: string): Promise<Historial> {
    const historial = await this.historialsRepository.findOne({ where: { id } });
    if (!historial) {
      throw new NotFoundException(`Nota with ID ${id} not found`);
    }
    return historial;
  }

  async update(id: string, updateHistorialDto: UpdateHistorialDto): Promise<Historial> {
    const historial = await this.findOne(id);
    Object.assign(historial, updateHistorialDto);
    return await this.historialsRepository.save(historial);
  }

  async remove(id: string): Promise<void> {
    const result = await this.historialsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Nota with ID ${id} not found`);
    }
  }

  async findByHistorial(idUser: string): Promise<Historial[]> {
    return await this.historialsRepository.find({ where: { idUser } });
  }
}