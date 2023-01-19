import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { HttpExceptionFilter } from './core/interceptors/http-exception.filter';

const logger = new Logger('Microservice');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle(configService.get('APP_NAME'))
    .setDescription(
      configService.get('APP_DESCRIPTION') +
        ' By ' +
        configService.get('AUTHOR'),
    )
    .setVersion(configService.get('APP_VERSION'))
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(configService.get('PORT'), () => {
    logger.log(`http://localhost:${configService.get('PORT')}/api/docs`);
  });
}
bootstrap();
