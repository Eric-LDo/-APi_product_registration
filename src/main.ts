import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet())
  app.useGlobalPipes(new ValidationPipe());
  const corsOptions: CorsOptions = {
    origin: process.env.FRONT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  };
  app.enableCors(corsOptions);
  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
