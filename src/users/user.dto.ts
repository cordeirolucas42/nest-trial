import {IsString, MaxLength} from "class-validator";

export class UserDto {
    @MaxLength(30)
    name: string;

    @MaxLength(30)
    last_name: string;

    description?: string;
}