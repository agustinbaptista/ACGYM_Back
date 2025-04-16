
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateHistorialDto {

  @IsOptional()
  @IsString()
  idUser?: string;

  @IsOptional()
  @IsString()
  fecha?: string;

  @IsOptional()
  @IsString()
  actividad?: string;

}