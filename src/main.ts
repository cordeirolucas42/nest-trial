import { NestFactory } from '@nestjs/core';
import { createConnection } from 'typeorm';
import { AppModule } from './app.module';
import {Users} from "./models/users";
import * as dotenv from "dotenv";

dotenv.config()

async function bootstrap() {
  await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [Users]
  })
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
