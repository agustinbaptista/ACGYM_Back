import { Module } from '@nestjs/common';
import { UserPdfService } from './user-pdf.service';
import { UserPdfController } from './user-pdf.controller';

@Module({
  controllers: [UserPdfController],
  providers: [UserPdfService],
})
export class UserPdfModule {}
