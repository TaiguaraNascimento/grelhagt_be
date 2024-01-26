import { Type } from 'class-transformer';
import { IsEmail, IsString, IsDate } from 'class-validator';

export class CreateProfissionaisDTO {
  @IsString()
  nomeDoProfissional: string;

  @Type(() => Date)
  @IsDate()
  dataDeNascimento: Date;

  @IsEmail()
  email: string;

  @Type(() => Date)
  @IsDate()
  dataDeEntrada: Date;

  @Type(() => Date)
  @IsDate()
  dataDeDesligamento: Date;

  @IsString()
  comentarios: string;
}
