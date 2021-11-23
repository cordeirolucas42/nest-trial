import { Position } from "src/positions/entities/position.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("positions")
export class Users extends BaseEntity {
    constructor(name: string, last_name: string) {
        super();
        this.name = name;
        this.last_name = last_name;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    last_name: string;

    @ManyToMany(() => Position)
    @JoinTable()
    positions: Position[];
}

// create table users_positions_positions (usersId PRIMARY KEY FOREIGN KEY, positionsId PRIMARY KEY FOREIGN KEY);