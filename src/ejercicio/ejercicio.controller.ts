import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EjerciciosService } from './ejercicio.service';
import { CreateEjercicioDto } from './dto/create-ejercicio.dto';
import { UpdateEjercicioDto } from './dto/update-ejercicio.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('ejercicio')
@ApiBearerAuth()
@Controller('ejercicios')
export class EjerciciosController {
  constructor(private readonly ejerciciosService: EjerciciosService) {}

  @Post()
  create(@Body() createEjercicioDto: CreateEjercicioDto) {
    return this.ejerciciosService.create(createEjercicioDto);
  }

  @Get()
  findAll() {
    return this.ejerciciosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ejerciciosService.findOne(id);
  }

  @Get('dia/:idDia')
  findByDia(@Param('idDia') idDia: string) {
    return this.ejerciciosService.findByDia(idDia);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEjercicioDto: UpdateEjercicioDto) {
    return this.ejerciciosService.update(id, updateEjercicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ejerciciosService.remove(id);
  }
}