import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FeriadoService {
  constructor(private prisma: PrismaService) {}

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
