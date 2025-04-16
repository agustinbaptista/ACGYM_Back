import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { Express } from 'express';
import * as path from 'path';

@Injectable()
export class UploadService {
  private storage: Storage;
  private bucketName: string;

  constructor() {
    const gcsKey = {
      type: process.env.GCS_TYPE,
      project_id: process.env.GCS_PROJECT_ID,
      private_key_id: process.env.GCS_PRIVATE_KEY_ID,
      private_key: process.env.GCS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GCS_CLIENT_EMAIL,
      client_id: process.env.GCS_CLIENT_ID,
      auth_uri: process.env.GCS_AUTH_URI,
      token_uri: process.env.GCS_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.GCS_AUTH_PROVIDER_CERT_URL,
      client_x509_cert_url: process.env.GCS_CLIENT_CERT_URL,
      universe_domain: process.env.GCS_UNIVERSE_DOMAIN,
    };

    this.storage = new Storage({ credentials: gcsKey });
    this.bucketName = process.env.GCS_BUCKET_NAME;
  }

  async uploadFile(file: Express.Multer.File, fileName: string): Promise<string> {
    try {
      const bucket = this.storage.bucket(this.bucketName);
      const filePath = `uploads/${fileName}`;
      const fileUpload = bucket.file(filePath);

      const stream = fileUpload.createWriteStream({
        metadata: { contentType: file.mimetype },
      });

      return new Promise((resolve, reject) => {
        stream.on('error', (err) =>
          reject(new InternalServerErrorException(err.message)),
        );
        stream.on('finish', async () => {
          await fileUpload.makePublic();
          resolve(`https://storage.googleapis.com/${this.bucketName}/${filePath}`);
        });

        stream.end(file.buffer);
      });
    } catch (error) {
      throw new InternalServerErrorException('Error al subir el archivo a GCS.');
    }
  }

  async getFileUrl(fileName: string): Promise<string> {
    const filePath = `uploads/${fileName}`;
    const bucket = this.storage.bucket(this.bucketName);
    const file = bucket.file(filePath);

    const [exists] = await file.exists();
    if (!exists) {
      throw new NotFoundException('Archivo no encontrado en GCS.');
    }

    return `https://storage.googleapis.com/${this.bucketName}/${filePath}`;
  }
}



// import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
// import { Storage } from '@google-cloud/storage';
// import * as path from 'path';
// import * as dotenv from 'dotenv';

// dotenv.config(); // Cargar variables de entorno desde .env

// @Injectable()
// export class UploadService {
//   private storage: Storage;
//   private bucketName: string;

//   constructor() {
//     this.storage = new Storage({
//       keyFilename: path.resolve(process.env.GCS_KEY_FILE),
//     });
    
    

//     this.bucketName = process.env.GCS_BUCKET_NAME;
//   }

//   async uploadFile(file: Express.Multer.File, fileName: string): Promise<string> {
//     try {
//       const bucket = this.storage.bucket(this.bucketName);
//       const filePath = `uploads/${fileName}`;
//       const fileUpload = bucket.file(filePath);

//       const stream = fileUpload.createWriteStream({
//         metadata: { contentType: file.mimetype },
//       });

//       return new Promise((resolve, reject) => {
//         stream.on('error', (err) => reject(new InternalServerErrorException(err)));
//         stream.on('finish', async () => {
//           await fileUpload.makePublic(); // Permitir acceso público al archivo
//           resolve(`https://storage.googleapis.com/${this.bucketName}/${filePath}`);
//         });

//         stream.end(file.buffer);
//       });
//     } catch (error) {
//       throw new InternalServerErrorException('Error al subir el archivo a Google Cloud Storage.');
//     }
//   }

//   async getFileUrl(fileName: string): Promise<string> {
//     const filePath = `uploads/${fileName}`;
//     const bucket = this.storage.bucket(this.bucketName);
//     const file = bucket.file(filePath);

//     const [exists] = await file.exists();
//     if (!exists) {
//       throw new NotFoundException('Archivo no encontrado en Google Cloud Storage.');
//     }

//     return `https://storage.googleapis.com/${this.bucketName}/${filePath}`;
//   }
// }
