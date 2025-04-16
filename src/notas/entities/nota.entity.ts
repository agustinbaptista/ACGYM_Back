import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notas')
export class Nota {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  descripcion: string;

  @Column()
  serie: string;

  @Column()
  repeticion: string;

  @Column()
  kilo: string;

  @Column()
  idEjercicio: string;
}