import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FiliaisService {
  constructor(private readonly databaseService: DatabaseService) {}

  async listarFiliais() {
    return this.databaseService.filiais.findMany();
  }

  async criarFilial(criarFilialDto: Prisma.FiliaisCreateInput) {
    const filialExistente = await this.databaseService.filiais.findFirst({
      where: {
        nomeDaFilial: criarFilialDto.nomeDaFilial,
      },
    });

    if (filialExistente) {
      throw new Error('Filial já está cadastrada');
    } else {
      return this.databaseService.filiais.create({
        data: criarFilialDto,
      });
    }
  }
}
