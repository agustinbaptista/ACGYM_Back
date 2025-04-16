import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Pago } from './entities/pago.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PagoService {
  constructor(
    @InjectRepository(Pago)
    private pagosRepository: Repository<Pago>,
  ) {}

  async create(createPagoDto: CreatePagoDto): Promise<Pago> {
    const pago = this.pagosRepository.create(createPagoDto);
    return await this.pagosRepository.save(pago);
  }

  async findAll(): Promise<Pago[]> {
    return await this.pagosRepository.find();
  }

  async findOne(id: string): Promise<Pago> {
    const pago = await this.pagosRepository.findOne({ where: { id } });
    if (!pago) {
      throw new NotFoundException(`Nota with ID ${id} not found`);
    }
    return pago;
  }

  async update(id: string, updatePagoDto: UpdatePagoDto): Promise<Pago> {
    const pago = await this.findOne(id);
    Object.assign(pago, updatePagoDto);
    return await this.pagosRepository.save(pago);
  }

  async remove(id: string): Promise<void> {
    const result = await this.pagosRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Nota with ID ${id} not found`);
    }
  }

  async findByPago(idUser: string): Promise<Pago[]> {
    return await this.pagosRepository.find({ where: { idUser } });
  }
}