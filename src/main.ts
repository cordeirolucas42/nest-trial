import { NestFactory } from '@nestjs/core';
import { createConnection } from 'typeorm';
import { AppModule } from './app.module';
import {Users} from "./models/users";
import * as dotenv from "dotenv";

dotenv.config()

async function bootstrap() {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Users]
  })
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
