import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotasService } from './notas.service';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('nota')
@ApiBearerAuth()
@Controller('notas')
export class NotasController {
  constructor(private readonly notasService: NotasService) {}

  @Post()
  create(@Body() createNotaDto: CreateNotaDto) {
    return this.notasService.create(createNotaDto);
  }

  @Get()
  findAll() {
    return this.notasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notasService.findOne(id);
  }

  @Get('ejercicio/:idEjercicio')
  findByEjercicio(@Param('idEjercicio') idEjercicio: string) {
    return this.notasService.findByEjercicio(idEjercicio);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotaDto: UpdateNotaDto) {
    return this.notasService.update(id, updateNotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notasService.remove(id);
  }
}