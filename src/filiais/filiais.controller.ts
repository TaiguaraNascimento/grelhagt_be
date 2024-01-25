import { Controller, Get, Body, Post } from '@nestjs/common';
import { FiliaisService } from './filiais.service';
import { Prisma } from '@prisma/client';

@Controller('filiais')
export class FiliaisController {
  constructor(private readonly filiaisService: FiliaisService) {}

  @Get()
  async listarFiliaisCadastradas() {
    return this.filiaisService.listarFiliais();
  }

  @Post('nova')
  async criarNovaFilial(@Body() data: Prisma.FiliaisCreateInput) {
    return this.filiaisService.criarFilial(data);
  }
}
