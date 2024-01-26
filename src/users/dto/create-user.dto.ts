import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  usuario: string;

  @IsEmail()
  email: string;

  @IsString()
  senha: string;

  @IsBoolean()
  status: boolean;

  @IsString()
  profissionaisId: string;
}
