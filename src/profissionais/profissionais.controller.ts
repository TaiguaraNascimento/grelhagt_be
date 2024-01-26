import { Controller, Param, Patch } from '@nestjs/common';
import { Get, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProfissionaisService } from './profissionais.service';
import Utilidades from 'backend/utils/Utilidades';
import { UpdateProfissionaisDTO } from './dto/update-profissionais.dto';

@Controller('profissionais')
export class ProfissionaisController {
  constructor(private readonly profissionaisService: ProfissionaisService) {}

  @Post('novo')
  adicionarNovoProfissional(
    @Body() profissional: Prisma.ProfissionaisCreateInput,
  ) {
    if (profissional.dataDeEntrada.toString() != null) {
      profissional.dataDeEntrada = Utilidades.DateFromString(
        profissional.dataDeEntrada.toString(),
      );
    }

    if (profissional.dataDeNascimento.toString() != null) {
      profissional.dataDeNascimento = Utilidades.DateFromString(
        profissional.dataDeNascimento.toString(),
      );
    }

    return this.profissionaisService.cadastrarProfissionais(profissional);
  }

  @Get()
  listagemDeProfissionais() {
    return this.profissionaisService.listagemDeProfissionais();
  }

  @Patch('atualizar/:id')
  atualizarProfissionais(
    @Param('id') id,
    @Body() profissionais: UpdateProfissionaisDTO,
  ) {
    return this.profissionaisService.atualizarProfissionais(id, profissionais);
  }
}
