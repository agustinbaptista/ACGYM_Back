import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { SampleDto } from './dto/upload.dto';
import { UploadService } from './upload.service';

@ApiTags('Upload')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('file')
  @ApiConsumes('multipart/form-data') 
  @ApiBody({
    description: 'Carga de archivo',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' }, 
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadFile(
    @Body() body: SampleDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('No se ha recibido ningún archivo.');
    }

    const fileName = `${body.name}.jpg`;
    const fileUrl = await this.uploadService.uploadFile(file, fileName);

    return {
      message: 'Archivo cargado correctamente',
      url: fileUrl, 
    };
  }

  @Get(':fileName')
  async getFileUrl(@Param('fileName') fileName: string) {
    const fileUrl = await this.uploadService.getFileUrl(fileName);
    return { url: fileUrl };
  }
}
