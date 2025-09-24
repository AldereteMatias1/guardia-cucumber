import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,        // quita propiedades que no estén en el DTO
      forbidNonWhitelisted: false, // (opcional) lanza error si mandan propiedades extra
      transform: false,        // transforma los tipos (string -> number, etc.)
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
