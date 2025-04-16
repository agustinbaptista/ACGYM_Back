import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreatePreguntaDto {

    @IsNotEmpty()
    @IsString()
    idUser: string;
  
    @IsNotEmpty()
    @IsString()
    pregunta1: string;
  
    @IsNotEmpty()
    @IsString()
    pregunta2: string;
  
    @IsNotEmpty()
    @IsString()
    pregunta3: string;

    @IsNotEmpty()
    @IsNumber()
    strikes: number; 


}
