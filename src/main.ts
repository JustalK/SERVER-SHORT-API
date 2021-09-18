import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { MyLogger } from './experiences/experience11/logger.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyLogger(),
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
}
bootstrap();
