import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ProfissionaisEntity } from '../entity/profissionais.entity';
import { CreateProfissionaisDTO } from '../dto/create-profissionais.dto';
import { UpdateProfissionaisDTO } from '../dto/update-profissionais.dto';

@Injectable()
export class ProfissionaisRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(
    createProfissionaisDTO: CreateProfissionaisDTO,
  ): Promise<ProfissionaisEntity> {
    const profissional = await this.prisma.profissionais.create({
      data: createProfissionaisDTO,
    });
    return profissional;
  }

  async findAll(): Promise<ProfissionaisEntity[]> {
    const profissionais = await this.prisma.profissionais.findMany({
      orderBy: {
        nomeDoProfissional: 'asc',
      },
    });
    return profissionais;
  }

  async finOne(id: string): Promise<ProfissionaisEntity> {
    const profissional = await this.prisma.profissionais.findUnique({
      where: {
        id,
      },
    });
    return profissional;
  }

  async update(
    id: string,
    updateProfissionaisDTO: UpdateProfissionaisDTO,
  ): Promise<ProfissionaisEntity> {
    const profissionais = await this.prisma.profissionais.update({
      where: {
        id,
      },
      data: updateProfissionaisDTO,
    });
    return profissionais;
  }

  async removeById(id: string): Promise<ProfissionaisEntity> {
    return this.prisma.profissionais.delete({
      where: {
        id,
      },
    });
  }
}
