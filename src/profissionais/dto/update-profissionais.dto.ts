import { PartialType } from '@nestjs/mapped-types';
import { CreateProfissionaisDTO } from './create-profissionais.dto';

export class UpdateProfissionaisDTO extends PartialType(
  CreateProfissionaisDTO,
) {}

// Essa forma evita a redundância de criação de DTOS para create e update
