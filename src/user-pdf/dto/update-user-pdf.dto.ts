import { PartialType } from '@nestjs/swagger';
import { CreateUserPdfDto } from './create-user-pdf.dto';

export class UpdateUserPdfDto extends PartialType(CreateUserPdfDto) {}
