import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from "./user.dto";
import { Users } from './users.entity';
import {Repository} from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        // @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>
    ) {}
    async findAll(page?: number): Promise<Users[]> {
        page = page + 2;
        return this.usersRepository.find({ skip: page })
    }

    async updateUser(id: number, userDto: UserDto): Promise<Users> {
        const {name, last_name} = userDto;
        const user = await this.usersRepository.findOne(id);

        if (!user) {
            throw new NotFoundException("User not found");
        }

        const userMerged = this.usersRepository.merge(user, userDto);

        return this.usersRepository.save(userMerged);
    }
}
