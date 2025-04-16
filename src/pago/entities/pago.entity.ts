import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pagos')
export class Pago {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  idUser: string;

  @Column()
  mes: string;

  @Column()
  fecha: string;

  @Column()
  monto: string;

}