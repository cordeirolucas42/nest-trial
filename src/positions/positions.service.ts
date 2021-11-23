import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { Position } from './entities/position.entity';

@Injectable()
export class PositionsService {
  async create(createPositionDto: CreatePositionDto) {
    const {name, description} = createPositionDto
    const position = new Position(name, description);
    await position.save();
    return position;
  }

  async findAll() {
    return await Position.find();
  }

  async findOne(id: number) {
    return await Position.findOne(id);
  }

  async update(id: number, updatePositionDto: UpdatePositionDto) {
    const {name, description} = updatePositionDto;
    const position = await Position.findOne(id);
    position.name = name ? name : position.name;
    position.description = description ? description : position.description;
    position.save();
    return position;
  }

  async remove(id: number) {
    const position = await Position.findOne(id);
    await position.remove()
    return position
  }
}
