import { Controller } from '@nestjs/common';
import { Body, Get, Put, Post, Delete, Param, Query } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Prisma } from '@prisma/client';

@Controller('usuarsios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('novso')
  cadastrarNovoUsuario(@Body() usuario: Prisma.UsuariosCreateInput) {
    this.usuariosService.cadastrarNovoUsuario(usuario);
  }
}
