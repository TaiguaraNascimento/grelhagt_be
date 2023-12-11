import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FeriadoService {
  constructor(private prisma: DatabaseService) {}

  async criarTipoDeFeriado(data: Prisma.TipoDeFeriadoCreateInput) {
    const tipoDeFeriadoExiste = await this.prisma.tipoDeFeriado.findFirst({
      where: {
        tipoDoFeriado: data.tipoDoFeriado,
      },
    });

    if (tipoDeFeriadoExiste) {
      throw new Error('Tipo de Feriado já está cadastrado');
    } else {
      // Realiza o cadastro
      const novoTipoDeFeriado = this.prisma.tipoDeFeriado.create({
        data: data,
      });

      return novoTipoDeFeriado;
    }
  }
}
