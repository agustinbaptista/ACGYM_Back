import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDiaDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  idRutina: string;
}