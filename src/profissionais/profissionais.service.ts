import { Injectable } from '@nestjs/common';
import { UpdateProfissionaisDTO } from './dto/update-profissionais.dto';
import { ProfissionaisRepository } from './repository/profissionais.repository';
import { CreateProfissionaisDTO } from './dto/create-profissionais.dto';

@Injectable()
export class ProfissionaisService {
  constructor(
    private readonly profissionaisRepository: ProfissionaisRepository,
  ) {}

  cadastrarProfissionais(profissionais: CreateProfissionaisDTO) {
    return this.profissionaisRepository.create(profissionais);
  }

  listagemDeProfissionais() {
    return this.profissionaisRepository.findAll();
  }

  atualizarProfissionais(id: string, profissional: UpdateProfissionaisDTO) {
    return this.profissionaisRepository.update(id, profissional);
  }

  selecionarUm(id: string) {
    return this.profissionaisRepository.finOne(id);
  }
}
