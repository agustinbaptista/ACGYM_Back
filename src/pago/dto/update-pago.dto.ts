
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdatePagoDto {

  @IsOptional()
  @IsString()
  idUser?: string;

  @IsOptional()
  @IsString()
  mes?: string;

  @IsOptional()
  @IsString()
  fecha?: string;

  @IsOptional()
  @IsString()
  monto?: string;



  

}