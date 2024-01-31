import { Get, Body, Post, Controller, Param, Patch } from '@nestjs/common';
import { ProfissionaisService } from './profissionais.service';
import Utilidades from 'backend/utils/Utilidades';
import { UpdateProfissionaisDTO } from './dto/update-profissionais.dto';
import { CreateProfissionaisDTO } from './dto/create-profissionais.dto';

@Controller('profissionais')
export class ProfissionaisController {
  constructor(private readonly profissionaisService: ProfissionaisService) {}

  @Post('novo')
  adicionarNovoProfissional(
    @Body() createProfissionalDTO: CreateProfissionaisDTO,
  ) {
    if (createProfissionalDTO.dataDeEntrada.toString() != null) {
      createProfissionalDTO.dataDeEntrada = Utilidades.DateFromString(
        createProfissionalDTO.dataDeEntrada.toString(),
      );
    }

    if (createProfissionalDTO.dataDeNascimento.toString() != null) {
      createProfissionalDTO.dataDeNascimento = Utilidades.DateFromString(
        createProfissionalDTO.dataDeNascimento.toString(),
      );
    }

    return this.profissionaisService.cadastrarProfissionais(
      createProfissionalDTO,
    );
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
