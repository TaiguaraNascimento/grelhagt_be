import { DatabaseService } from 'src/database/database.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class TipoDeFeriadoService {
  constructor(private databaseService: DatabaseService) {}

  async criarTipoDeFeriado(data: Prisma.TipoDeFeriadoCreateInput) {
    const tipoDeFeriadoExiste =
      await this.databaseService.tipoDeFeriado.findFirst({
        where: {
          tipoDoFeriado: data.tipoDoFeriado,
        },
      });

    if (tipoDeFeriadoExiste) {
      throw new Error('Tipo de Feriado já está cadastrado');
    } else {
      // Realiza o cadastro
      const novoTipoDeFeriado = this.databaseService.tipoDeFeriado.create({
        data: data,
      });

      return novoTipoDeFeriado;
    }
  }

  async listarTiposDeFeriadosCadastrados() {
    return this.databaseService.tipoDeFeriado.findMany();
  }
}
