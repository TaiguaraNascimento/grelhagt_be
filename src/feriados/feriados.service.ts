import { DatabaseService } from 'src/database/database.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class FeriadoService {
  constructor(private databaseService: DatabaseService) {}

  async listarFeriadosCadastrados() {
    return this.databaseService.feriados.findMany({
      include: {
        tipoDeFeriado: true,
        filial: true,
      },
    });
  }

  async cadastrarFeriado(data: Prisma.FeriadosCreateInput) {
    return this.databaseService.feriados.create({
      data: data,
    });
  }
}
