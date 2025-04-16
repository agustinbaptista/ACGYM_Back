import { Injectable } from '@nestjs/common';
import { CreateUserPdfDto } from './dto/create-user-pdf.dto';
import { UpdateUserPdfDto } from './dto/update-user-pdf.dto';

@Injectable()
export class UserPdfService {
  create(createUserPdfDto: CreateUserPdfDto) {
    return 'This action adds a new userPdf';
  }

  findAll() {
    return `This action returns all userPdf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userPdf`;
  }

  update(id: number, updateUserPdfDto: UpdateUserPdfDto) {
    return `This action updates a #${id} userPdf`;
  }

  remove(id: number) {
    return `This action removes a #${id} userPdf`;
  }
}
