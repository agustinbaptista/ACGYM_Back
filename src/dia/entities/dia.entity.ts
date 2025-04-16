import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dias')
export class Dia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  idRutina: string;
}