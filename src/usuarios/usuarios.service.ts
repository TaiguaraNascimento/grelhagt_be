import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsuariosService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarNovoUsuario(data: Prisma.UsuariosCreateInput) {
    return this.databaseService.usuarios.create({ data: data });
  }
}
