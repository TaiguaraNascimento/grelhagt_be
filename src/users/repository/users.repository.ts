import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.prisma.users.create({
      data: createUserDto,
    });
    return user;
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.prisma.users.findMany();
  }

  async findOneById(id: string): Promise<UserEntity> {
    const usuario = await this.prisma.users.findUnique({
      where: {
        id,
      },
    });

    return usuario;
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    const usuario = await this.prisma.users.findUnique({
      where: {
        email: email, // reverted to full syntax to match the expected type
      },
    });

    return usuario;
  }

  async updateByEmail(
    email: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const usuarioAtualizado = await this.prisma.users.update({
      where: {
        email,
      },
      data: updateUserDto,
    });

    return usuarioAtualizado;
  }
  async updateById(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    const usuarioAtualizado = await this.prisma.users.update({
      where: {
        id,
      },
      data: updateUserDto,
    });

    return usuarioAtualizado;
  }

  async removeById(id: string) {
    const usuarioDeletado = await this.prisma.users.delete({
      where: {
        id,
      },
    });
    return usuarioDeletado;
  }

  async removeByEmail(email: string) {
    const usuarioDeletado = await this.prisma.users.delete({
      where: {
        email,
      },
    });
    return usuarioDeletado;
  }
}
