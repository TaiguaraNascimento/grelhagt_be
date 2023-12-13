import {
  Controller,
  Get,
  Body,
  Post,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { FeriadoService } from './feriados.service';
import { Prisma } from '@prisma/client';
import Utilidades from '../../backend/utils/Utilidades';
import { HttpException, HttpStatus } from '@nestjs/common';

@Controller('feriados')
export class FeriadosController {
  constructor(private feriadosService: FeriadoService) {}

  @Get('todos')
  listarFeriadosCadastrados() {
    return this.feriadosService.listarFeriadosCadastrados();
  }

  @Post('novo')
  cadastrarFeriado(@Body() data: Prisma.FeriadosCreateInput) {
    if (this.validarFeriadoDto(data)) {
      return this.feriadosService.cadastrarFeriado(data);
    } else {
      throw new Error('erro');
    }
  }

  // Função para validação dos dados recebidos pela rota
  private validarFeriadoDto(data: Prisma.FeriadosCreateInput): boolean {
    const erroDeValidacao = (mensagem) => {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: mensagem,
        },
        HttpStatus.FORBIDDEN,
      );
    };

    // Validação do nome do feriado
    if (
      data.nomeDoFeriado === '' ||
      data.nomeDoFeriado === null ||
      data.nomeDoFeriado === 'teste'
    ) {
      erroDeValidacao('Nome do Feriado incorreto');
    }

    // Validação da data
    try {
      data.dataDoFeriado = new Date(data.dataDoFeriado).toISOString();
    } catch {
      erroDeValidacao('A data do feriado enviada não é válida');
    }

    // Validação do tipo de feriado
    if (data.tipoDeFeriado === null) {
      erroDeValidacao('O feriado precisa ter um tipo definido.');
    }

    return true;
  }

  // Método para realizar efetivamente a exclusão
  private excluirRegistroDeFeriado(id: string) {
    return this.feriadosService.deletarFeriado(id);
  }

  @Delete('excluir/:id')
  excluirFeriado(@Param('id') id) {
    // Usando params, a rota deve ser assim http://localhost:3000/feriados/excluir/657864dc6ace573e0586c6be
    this.excluirRegistroDeFeriado(id);
  }

  @Delete(':id/excluir')
  excuirFeriadoOpcao2(@Param('id') id) {
    // Usando params, a rota deve ser assim http://localhost:3000/feriados/657864dc6ace573e0586c6be/excluir/
    this.excluirRegistroDeFeriado(id);
  }

  @Delete('excluir')
  excluirFeriadoOpcao3(@Query('id') id: string) {
    // Usando query, a rota deve ser assim http://localhost:3000/feriados/excluir?id=657864dc6ace573e0586c6be
    this.excluirRegistroDeFeriado(id);
  }

  @Get()
  filtrarFeriados(
    @Query('datainicial') dataInicial: string,
    @Query('datafinal') dataFinal: string,
    @Query('filial') filial: string,
    @Query('tipo') tipo: string,
  ) {
    const novaDataInicial = Utilidades.DateFromString(dataInicial);
    const novaDataFinal = Utilidades.DateFromString(dataFinal);

    return this.feriadosService.filtrarFeriados(
      novaDataInicial,
      novaDataFinal,
      filial,
      tipo,
    );
  }
}
