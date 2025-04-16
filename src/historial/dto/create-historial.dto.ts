import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateHistorialDto {
  @IsNotEmpty()
  @IsString()
  idUser: string;

  @IsNotEmpty()
  @IsString()
  fecha: string;

  @IsNotEmpty()
  @IsString()
  actividad: string;

}
