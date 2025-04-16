import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiasService } from './dia.service';
import { CreateDiaDto } from './dto/create-dia.dto';
import { UpdateDiaDto } from './dto/update-dia.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('dia')
@ApiBearerAuth()
@Controller('dias')
export class DiasController {
  constructor(private readonly diasService: DiasService) {}

  @Post()
  create(@Body() createDiaDto: CreateDiaDto) {
    return this.diasService.create(createDiaDto);
  }

  @Get()
  findAll() {
    return this.diasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diasService.findOne(id);
  }

  @Get('rutina/:idRutina')
  findByRutina(@Param('idRutina') idRutina: string) {
    return this.diasService.findByRutina(idRutina);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiaDto: UpdateDiaDto) {
    return this.diasService.update(id, updateDiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diasService.remove(id);
  }
}