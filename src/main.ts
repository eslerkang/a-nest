import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UndefinedNullInterceptor } from './common/interceptors/undefined.null.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3000;

  const swaggerConfig = new DocumentBuilder()
    .setTitle('sleact API')
    .setDescription('API Doc for Sleact Development')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument);

  app.useGlobalInterceptors(new UndefinedNullInterceptor());

  await app.listen(port);

  console.log(`Listening on port ${port}`);
}
bootstrap();
