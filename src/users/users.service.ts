import { UsersRepository } from './repository/users.repository';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOneById(id: string) {
    return this.userRepository.findOneById(id);
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOneByEmail(email);
  }

  updateById(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.updateById(id, updateUserDto);
  }

  updateByEmail(email: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.updateByEmail(email, updateUserDto);
  }

  removeById(id: string) {
    return this.userRepository.removeById(id);
  }

  removeByEmail(email: string) {
    return this.userRepository.removeByEmail(email);
  }
}
