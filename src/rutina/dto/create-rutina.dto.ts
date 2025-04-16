import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateRutinaDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  idUser: string;

  @IsOptional()
  @IsBoolean()
  activa?: boolean;

  
  @IsOptional()
  @IsBoolean()
  favorita?: boolean;
}