import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
import { UploadModule } from './upload/upload.module';
import { UserPdfModule } from './user-pdf/user-pdf.module';
import { RutinasModule } from './rutina/rutina.module';
import { DiasModule } from './dia/dia.module';
import { EjerciciosModule } from './ejercicio/ejercicio.module';
import { NotasModule } from './notas/notas.module';
import { EstadisticaModule } from './estadistica/estadistica.module';
import { PagoModule } from './pago/pago.module';
import { HistorialModule } from './historial/historial.module';
import { PreguntasModule } from './preguntas/preguntas.module';




@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      entities: [User],
      synchronize: true,
      ssl: { rejectUnauthorized: false },
      
    }),

    UsersModule,

    AuthModule,

    UploadModule,

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/api',
    }),

    UserPdfModule,

    RutinasModule,

    DiasModule,

    EjerciciosModule,

    NotasModule,

    EstadisticaModule,

    PagoModule,

    HistorialModule,

    PreguntasModule,


  ],
  controllers: [AppController, UploadController],
  providers: [AppService, UploadService],
})
export class AppModule {}

