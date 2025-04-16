import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEjercicioDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  idDia: string;
}