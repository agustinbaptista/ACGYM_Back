import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({ required: false })
    nombre?: string;

    @ApiProperty({ required: false })
    apellido?: string;

    @ApiProperty({ required: false })
    dni?: string;

    @ApiProperty({ required: false })
    edad?: string;

    @ApiProperty({ required: false })
    peso?: string;

    @ApiProperty({ required: false })
    altura?: string;

    @ApiProperty({ required: false })
    genero?: string;

    @ApiProperty({ required: false })
    telefono?: string;

    @ApiProperty({ required: false })
    usuario?: string;

    @ApiProperty({ required: false })
    contrasena?: string;

    @ApiProperty({ required: false })
    role?: string;

    @ApiProperty({ required: false })
    isActive?: boolean;

    @ApiProperty({ required: false })
    email?: string;

    @ApiProperty({ required: false })
    fecha_registro?: string;

}
