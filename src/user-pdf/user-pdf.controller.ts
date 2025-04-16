import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserPdfService } from './user-pdf.service';
import { CreateUserPdfDto } from './dto/create-user-pdf.dto';
import { UpdateUserPdfDto } from './dto/update-user-pdf.dto';

@Controller('user-pdf')
export class UserPdfController {
  constructor(private readonly userPdfService: UserPdfService) {}

  @Post()
  create(@Body() createUserPdfDto: CreateUserPdfDto) {
    return this.userPdfService.create(createUserPdfDto);
  }

  @Get()
  findAll() {
    return this.userPdfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userPdfService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserPdfDto: UpdateUserPdfDto) {
    return this.userPdfService.update(+id, updateUserPdfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userPdfService.remove(+id);
  }
}
