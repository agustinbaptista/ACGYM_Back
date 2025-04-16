import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rutina } from './entities/rutina.entity';
import { CreateRutinaDto } from './dto/create-rutina.dto';
import { UpdateRutinaDto } from './dto/update-rutina.dto';

@Injectable()
export class RutinasService {
  constructor(
    @InjectRepository(Rutina)
    private rutinasRepository: Repository<Rutina>,
  ) {}

  async create(createRutinaDto: CreateRutinaDto): Promise<Rutina> {
    const rutina = this.rutinasRepository.create(createRutinaDto);
    return await this.rutinasRepository.save(rutina);
  }

  async findAll(): Promise<Rutina[]> {
    return await this.rutinasRepository.find();
  }

  async findOne(id: string): Promise<Rutina> {
    const rutina = await this.rutinasRepository.findOne({ where: { id } });
    if (!rutina) {
      throw new NotFoundException(`Rutina with ID ${id} not found`);
    }
    return rutina;
  }

  async update(id: string, updateRutinaDto: UpdateRutinaDto): Promise<Rutina> {
    const rutina = await this.findOne(id);
    Object.assign(rutina, updateRutinaDto);
    return await this.rutinasRepository.save(rutina);
  }

  async remove(id: string): Promise<void> {
    const result = await this.rutinasRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Rutina with ID ${id} not found`);
    }
  }

  async findByUser(idUser: string): Promise<Rutina[]> {
    return await this.rutinasRepository.find({ where: { idUser } });
  }
}