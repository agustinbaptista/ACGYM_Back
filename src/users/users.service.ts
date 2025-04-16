import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find();
  }
  


  async findOne(usuario: string): Promise<User | undefined> {
    const users = await this.userRepository.find({ where: { usuario: usuario } });
    return users.length > 0 ? users[0] : undefined;
  }


  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const users = await this.userRepository.find({ where: { id: id } });
  
    if (users.length === 0) {
      throw new NotFoundException(`User #${id} not found`);
    }
  
    const user = users[0];

    if (updateUserDto.nombre) user.nombre = updateUserDto.nombre;
    if (updateUserDto.apellido) user.apellido = updateUserDto.apellido;
    if (updateUserDto.dni) user.dni = updateUserDto.dni;
    if (updateUserDto.edad) user.edad = updateUserDto.edad;
    if (updateUserDto.peso) user.peso = updateUserDto.peso;
    if (updateUserDto.genero) user.genero = updateUserDto.genero;
    if (updateUserDto.altura) user.altura = updateUserDto.altura;
    if (updateUserDto.telefono) user.telefono = updateUserDto.telefono;
    if (updateUserDto.usuario) user.usuario = updateUserDto.usuario;
    if (updateUserDto.contacto) user.contacto= updateUserDto.contacto;
    if (updateUserDto.isActive) user.isActive = updateUserDto.isActive;
    if (updateUserDto.email) user.email = updateUserDto.email;
    if (updateUserDto.contrasena) {
      user.contrasena = await bcryptjs.hash(updateUserDto.contrasena, 10);
    }
    if (updateUserDto.fecha_registro) user.fecha_registro = updateUserDto.fecha_registro;

    if (updateUserDto.role) user.role = updateUserDto.role;

    return await this.userRepository.save(user);
  }
  


  async remove(id: string): Promise<User> {
    const users = await this.userRepository.find({ where: { id: id } });

    if (users.length === 0) {
      throw new NotFoundException(`User #${id} not found`);
    }
    
    const user = users[0];
    user.isActive = false;
    return await this.userRepository.save(user);
  }
  

  
  //Metodos utilizado para el Login
  async findOneByUsername(usuario: string): Promise<User | undefined> {
    const users = await this.userRepository.find({ where: { usuario: usuario } });
    return users.length > 0 ? users[0] : undefined;
  }

  
  async findByUsernameWithPassword(usuario: string){
    return this.userRepository.findOne({
      where: {usuario},
      select:['id', 'usuario', 'contrasena', 'role'],
    });
  }
  
}
