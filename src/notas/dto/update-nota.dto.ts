import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateNotaDto {
  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsNumber()
  serie?: string;

  @IsOptional()
  @IsNumber()
  repeticion?: string;

  @IsOptional()
  @IsNumber()
  kilo?: string;
}