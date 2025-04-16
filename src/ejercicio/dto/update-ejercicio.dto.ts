import { IsString, IsOptional } from 'class-validator';

export class UpdateEjercicioDto {
  @IsOptional()
  @IsString()
  nombre?: string;
}