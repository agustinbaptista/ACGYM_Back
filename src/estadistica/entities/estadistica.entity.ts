
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('estadistica')
export class Estadistica {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fecha: string;

  @Column()
  kilo: string;

  @Column()
  idEjercicio: string;
}