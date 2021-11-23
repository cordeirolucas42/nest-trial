import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import {Repository} from "typeorm";


describe('UsersService', () => {
  const usersRepository = {} as Repository<Users>
  let service = new UsersService(usersRepository);

  it('service to work', async () => {
    usersRepository.find = jest.fn().mockResolvedValue([])
    const users = await service.findAll(5);

    expect(users).toStrictEqual([])
    expect(usersRepository.find).toBeCalledTimes(1);
    expect(usersRepository.find).toBeCalledWith({ skip: 6 })
  });

  it("should catch an error", async () => {
    usersRepository.find = jest.fn().mockRejectedValue(new Error())

  })
});
