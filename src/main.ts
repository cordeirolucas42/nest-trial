import { NestFactory } from '@nestjs/core';
import { createConnection } from 'typeorm';
import { AppModule } from './app.module';
import {Users} from "./users/users.entity";
import * as dotenv from "dotenv";
import { Position } from './positions/entities/position.entity';

dotenv.config()

async function bootstrap() {
  await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    },
    entities: [Users, Position]
  })
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
