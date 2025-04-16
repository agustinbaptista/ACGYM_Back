import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('pregunta')
export class Pregunta {

    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    idUser: string;
  
    @Column()
    pregunta1: string;
  
    @Column()
    pregunta2: string;
  
    @Column()
    pregunta3: string;   

    @Column({ nullable: true, default: 0 })
    strikes: number;   
}
