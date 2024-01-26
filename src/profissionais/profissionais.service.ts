import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { UpdateProfissionaisDTO } from './dto/update-profissionais.dto';

@Injectable()
export class ProfissionaisService {
  constructor(private readonly databaseService: DatabaseService) {}

  cadastrarProfissionais(profissionais: Prisma.ProfissionaisCreateInput) {
    return this.databaseService.profissionais.create({
      data: profissionais,
    });
  }

  listagemDeProfissionais() {
    return this.databaseService.profissionais.findMany({
      orderBy: {
        nomeDoProfissional: 'asc',
      },
    });
  }

  atualizarProfissionais(id: string, profissional: UpdateProfissionaisDTO) {
    return this.databaseService.profissionais.update({
      where: { id: id },
      data: profissional,
    });
  }
}
