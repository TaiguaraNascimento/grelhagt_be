import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FeriadoService {
  constructor(private prisma: PrismaService) {}

  async criarTipoDeFeriado(data: Prisma.TipoDeFeriadoCreateInput) {
    const novoTipoDeFeriado = this.prisma.tipoDeFeriado.create({
      data: data,
    });

    /*
    const tipoDeFeriadoExiste = await this.prisma.tipoDeFeriado.findFirst({
      where: {
        tipoDoFeriado: tipoDeFeriado.tipoDeFeriado,
      },
    });

    
    if (tipoDeFeriadoExiste) {
      throw new Error('Tipo de Feriado já está cadastrado');
    }

    */

    console.log(novoTipoDeFeriado);

    return novoTipoDeFeriado;
  }
}
