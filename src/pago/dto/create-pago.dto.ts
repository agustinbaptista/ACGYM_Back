import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreatePagoDto {
  @IsNotEmpty()
  @IsString()
  idUser: string;

  @IsNotEmpty()
  @IsString()
  mes: string;

  @IsNotEmpty()
  @IsString()
  fecha: string;

  @IsNotEmpty()
  @IsString()
  monto: string;

}