import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    async findAll(): Promise<Users[]> {
        return await Users.find()
    }
}
