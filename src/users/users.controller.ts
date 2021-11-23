import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Users } from "src/users/users.entity";
import { UserDto } from "./user.dto"
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    async create(@Body() userDto: UserDto): Promise<Users> {
        const {name, last_name} = userDto;
        let user = new Users(name, last_name);
        await user.save();
        return user;
    }

    @Get()
    async findAll(): Promise<Users[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Users> {
        return await Users.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() userDto: UserDto): Promise<Users> {
        const {name, last_name} = userDto;
        const user = await Users.findOne(id);
        user.name = name ? name : user.name;
        user.last_name = last_name ? last_name : user.last_name;
        user.save();
        return user;
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Users> {
        const user = await Users.findOne(id);
        await user.remove();
        return user;
    }
}