import { Body, Controller, Delete, Get, Param, Post, Put, NotFoundException, HttpCode, HttpStatus } from "@nestjs/common";
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
        return user.save();
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
        return this.usersService.updateUser(id, userDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: string): Promise<void> {
        const user = await Users.findOne(id);
        return user.remove();
    }
}