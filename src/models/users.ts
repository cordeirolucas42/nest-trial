import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {
    constructor(name: string, last_name: string) {
        super();
        this.name = name;
        this.last_name = last_name
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    last_name: string
}