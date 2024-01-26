import { Users } from '@prisma/client';

export class UserEntity implements Users {
  id: string;
  usuario: string;
  email: string;
  senha: string;
  status: boolean;
  profissionaisId: string;
  createdAt: Date;
  updatedAt: Date;
}
