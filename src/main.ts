import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UndefinedNullInterceptor } from './common/interceptors/undefined.null.interceptor';
import config from 'config';
import { HttpExceptionFilter } from './common/filters/httpException.filter';
import { ValidationPipe } from '@nestjs/common';

const SERVER_CONFIG = config.get('server');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = SERVER_CONFIG.port || 3000;

  const swaggerConfig = new DocumentBuilder()
    .setTitle('sleact API')
    .setDescription('API Doc for Sleact Development')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument);

  app.useGlobalInterceptors(new UndefinedNullInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(port);

  console.log(`Listening on port ${port}`);
}
bootstrap();
