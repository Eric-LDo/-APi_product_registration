import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUser {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name: string;
  @IsEmail({}, { message: 'Email inválido' })
  email: string;
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  password: string;
}
export class UpdateUser {
  @IsNotEmpty({ message: 'id é obrigatório' })
  id: string;
  name?: string;
  email?: string;
  password?: string;
}
export class LoginUser{
  @IsEmail({}, { message: 'Email inválido' })
  email: string; 
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  password: string;
}
export class DeleteUser{
  @IsNotEmpty({ message: 'id é obrigatório' })
  id: string;
}

