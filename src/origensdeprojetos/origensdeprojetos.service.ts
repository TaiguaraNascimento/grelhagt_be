import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrigensDeProjetosService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarOrigemDeProjeto(
    origensDeProjetos: Prisma.OrigensDeProjetosCreateInput,
  ) {
    this.databaseService.origensDeProjetos.create({
      data: origensDeProjetos,
    });
  }
}
