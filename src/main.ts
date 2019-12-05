import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from '../config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const documentOptions = new DocumentBuilder()
    .setTitle(config.TITLE)
    .setDescription(config.DESCRIPTION)
    .setVersion(config.VERSION)
    // .setBasePath(`/${config.PREFIX}`)
    .build();
  const document = SwaggerModule.createDocument(app, documentOptions);
  // app.setGlobalPrefix(config.PREFIX);
  app.enableCors();
  SwaggerModule.setup(config.API_EXPLORER_PATH, app, document);
  await app.listen(config.PORT, () => console.log(`Application is listening on port ${config.PORT}.`));
}
bootstrap();