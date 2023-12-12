import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FeriadoService {
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

  async listarTiposDeFeriadosCadastrados() {
    return this.databaseService.tipoDeFeriado.findMany();
  }

  async consolidacaoDosFeriados() {
    const relatorio = await this.databaseService.feriados.groupBy({
      by: ['nomeDoFeriado'],
      orderBy: {
        nomeDoFeriado: 'asc',
      },
      _count: {
        nomeDoFeriado: true,
      },
    });

    return relatorio;
  }
}
