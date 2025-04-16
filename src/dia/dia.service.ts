import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dia } from './entities/dia.entity';
import { CreateDiaDto } from './dto/create-dia.dto';
import { UpdateDiaDto } from './dto/update-dia.dto';

@Injectable()
export class DiasService {
  constructor(
    @InjectRepository(Dia)
    private diasRepository: Repository<Dia>,
  ) {}

  async create(createDiaDto: CreateDiaDto): Promise<Dia> {
    const dia = this.diasRepository.create(createDiaDto);
    return await this.diasRepository.save(dia);
  }

  async findAll(): Promise<Dia[]> {
    return await this.diasRepository.find();
  }

  async findOne(id: string): Promise<Dia> {
    const dia = await this.diasRepository.findOne({ where: { id } });
    if (!dia) {
      throw new NotFoundException(`Dia with ID ${id} not found`);
    }
    return dia;
  }

  async update(id: string, updateDiaDto: UpdateDiaDto): Promise<Dia> {
    const dia = await this.findOne(id);
    Object.assign(dia, updateDiaDto);
    return await this.diasRepository.save(dia);
  }

  async remove(id: string): Promise<void> {
    const result = await this.diasRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Dia with ID ${id} not found`);
    }
  }

  async findByRutina(idRutina: string): Promise<Dia[]> {
    return await this.diasRepository.find({ where: { idRutina } });
  }
}