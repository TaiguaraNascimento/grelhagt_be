import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProfissionaisService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarProfissionais(profissionais: Prisma.ProfissionaisCreateInput) {
    this.databaseService.profissionais.create({
      data: profissionais,
    });
  }
}
