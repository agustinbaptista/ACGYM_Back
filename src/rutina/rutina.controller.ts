import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RutinasService } from './rutina.service';
import { CreateRutinaDto } from './dto/create-rutina.dto';
import { UpdateRutinaDto } from './dto/update-rutina.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('rutina')
@ApiBearerAuth()
@Controller('rutinas')
export class RutinasController {
  constructor(private readonly rutinasService: RutinasService) {}

  @Post()
  create(@Body() createRutinaDto: CreateRutinaDto) {
    return this.rutinasService.create(createRutinaDto);
  }

  @Get()
  findAll() {
    return this.rutinasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rutinasService.findOne(id);
  }

  @Get('user/:idUser')
  findByUser(@Param('idUser') idUser: string) {
    return this.rutinasService.findByUser(idUser);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRutinaDto: UpdateRutinaDto) {
    return this.rutinasService.update(id, updateRutinaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rutinasService.remove(id);
  }
}