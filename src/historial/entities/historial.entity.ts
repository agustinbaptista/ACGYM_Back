import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('historial')
export class Historial {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  idUser: string;

  @Column()
  fecha: string;

  @Column()
  actividad: string;

}