import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EventosPadraoService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarTipoDeEventoPadrao(
    tipoDeEventoPadrao: Prisma.TipoDeEventosPadraoCreateInput,
  ) {
    this.databaseService.tipoDeEventosPadrao.create({
      data: tipoDeEventoPadrao,
    });
  }
}
