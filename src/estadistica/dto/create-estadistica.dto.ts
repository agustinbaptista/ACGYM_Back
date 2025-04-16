import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateEstadisticaDto {
  @IsNotEmpty()
  @IsString()
  fecha: string;

  @IsNotEmpty()
  @IsNumber()
  kilo: string;

  @IsNotEmpty()
  @IsString()
  idEjercicio: string;
}