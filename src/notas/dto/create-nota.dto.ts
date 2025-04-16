import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateNotaDto {
  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  serie: string;

  @IsNotEmpty()
  @IsNumber()
  repeticion: string;

  @IsNotEmpty()
  @IsNumber()
  kilo: string;

  @IsNotEmpty()
  @IsString()
  idEjercicio: string;
}