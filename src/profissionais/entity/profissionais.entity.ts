import { Profissionais } from '@prisma/client';

export class ProfissionaisEntity implements Profissionais {
  id: string;
  nomeDoProfissional: string;
  dataDeNascimento: Date;
  email: string;
  dataDeEntrada: Date;
  dataDeDesligamento: Date;
  comentarios: string;
}
