import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class UserPdf {

    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    constructor() {
      this.id = uuidv4();
    }
  
    @Column()
    idUser: string;

    @Column()
    nombre: string;
  
    @Column()
    pagina: string;

}
