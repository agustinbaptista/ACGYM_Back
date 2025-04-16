
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateEstadisticaDto {
  @IsOptional()
  @IsString()
  fecha?: string;

  @IsOptional()
  @IsNumber()
  kilo?: string;
}