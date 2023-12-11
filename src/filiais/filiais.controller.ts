import { Controller, Get, Body, Post } from '@nestjs/common';
import { FiliaisService } from './filiais.service';
import { Prisma } from '@prisma/client';

@Controller('filiais')
export class FiliaisController {
  constructor(private filiaisService: FiliaisService) {}

  @Get()
  listarFiliaisCadastradas() {
    return this.filiaisService.listarFiliais();
  }

  @Post()
  async criarNovaFilial(@Body() data: Prisma.FiliaisCreateInput) {
    return this.filiaisService.criarFilial(data);
  }
}
