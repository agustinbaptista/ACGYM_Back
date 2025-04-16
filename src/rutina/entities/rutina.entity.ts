import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rutinas')
export class Rutina {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  idUser: string;

  @Column({ default: true })
  activa: boolean;

  @Column({ default: false })
  favorita: boolean;
}