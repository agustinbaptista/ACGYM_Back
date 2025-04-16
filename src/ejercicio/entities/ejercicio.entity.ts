import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ejercicios')
export class Ejercicio {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  idDia: string;
}