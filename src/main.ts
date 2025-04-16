import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';
import { AppModule } from './app.module';
import { resolve } from 'path';
import { writeFileSync } from 'fs';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);



  app.enableCors({
    origin: ['http://localhost:3000','http://localhost:3005', 'http://localhost:8081', 'https://acgym-front.vercel.app'], // Permitir cualquier origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Authorization, Content-Type, Accept, Origin, X-Requested-With, Content-Type, Accept, Authentication,  Access-control-allow-credentials, Access-control-allow-headers, Access-control-allow-methods, Access-control-allow-origin, User-Agent, Referer, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Cache-Control, Pragma',
  });

  const config = new DocumentBuilder()
    .setTitle('Proyecto 01')
    .setDescription('The proyecto01 API description')
    .setVersion('1.0')
    .addTag('users', 'Endpoints de manejo de usuarios')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const theme = new SwaggerTheme();
  const options = {
    explorer: true,
    customCss: theme.getBuffer(SwaggerThemeNameEnum.ONE_DARK)
  };
  SwaggerModule.setup('/api', app, document, options);


  await app.listen(3005);

  if (process.env.NODE_ENV === 'development') {
    const pathToSwaggerStaticFolder = resolve(process.cwd(), 'swagger-static');

    const pathToSwaggerJson = resolve(
      pathToSwaggerStaticFolder,
      'swagger.json',
    );
    const swaggerJson = JSON.stringify(document, null, 2);
    writeFileSync(pathToSwaggerJson, swaggerJson);
    console.log(`Swagger JSON file written to: '/swagger-static/swagger.json'`);
  }

}
bootstrap();


