import { DatabaseService } from 'src/database/database.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import Utilidades from '../../backend/utils/Utilidades';

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

  async deletarFeriado(id: string) {
    try {
      const registro = await this.databaseService.feriados.findFirst({
        where: {
          id: id,
        },
      });

      if (registro) {
        return this.databaseService.feriados.delete({
          where: {
            id: id,
          },
        });
      } else {
        // throw new Error('Registro inexistente');
        console.log('erro');
      }
    } catch {
      console.log('erros');
      // throw new Error('O registo não existe no banco de dados');
    }
  }

  async filtrarFeriados(
    dataInicial: Date,
    dataFinal: Date,
    filial: string,
    tipo: string,
  ) {
    const whereClause: Prisma.FeriadosWhereInput = {};

    whereClause.dataDoFeriado = {
      ...(Utilidades.verificarDataValida(dataInicial)
        ? { gte: dataInicial }
        : {}),
    };

    whereClause.dataDoFeriado = {
      ...(Utilidades.verificarDataValida(dataFinal) ? { lte: dataFinal } : {}),
    };

    whereClause.filialId = {
      ...(filial != null ? { equals: filial } : {}),
    };

    whereClause.tipoDeFeriadoId = {
      ...(tipo != null ? { equals: tipo } : {}),
    };

    const resultado = await this.databaseService.feriados.findMany({
      where: whereClause,
      include: {
        tipoDeFeriado: true,
        filial: true,
      },
    });

    return resultado;
  }
}
