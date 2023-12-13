import { Controller, Param, Patch } from '@nestjs/common';
import { Get, Body, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CargosService } from './cargos.service';
import { Req, Res } from '@nestjs/common';

@Controller('cargos')
export class CargosController {
  constructor(private readonly cargosService: CargosService) {}

  @Post('novo')
  adicionarNovoCargo(@Body() cargo: Prisma.CargosCreateInput) {
    return this.cargosService.adicionarNovoCargo(cargo);
  }

  @Get()
  listarCargos() {
    return this.cargosService.listarCargos();
  }

  @Patch(':id')
  atualizarCargos(
    @Param('id') id: string,
    @Body() cargo: Prisma.CargosUpdateInput,
  ) {
    if (!id) {
      throw new Error('O ID não foi informado para esse procedimento');
    } else if (!cargo) {
      throw new Error(
        'O conteúdo para atualização não foi corretamente definido.',
      );
    } else {
      return this.cargosService.atualizarCargo(id, cargo);
    }
  }
}
