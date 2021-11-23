import { IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreatePositionDto } from "../dto/create-position.dto";

@Entity()
export class Position extends BaseEntity {
    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({unique: true})
    name: string;

    @Column()
    description: string;
}
