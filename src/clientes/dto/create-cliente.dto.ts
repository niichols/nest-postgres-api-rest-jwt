import { IsOptional, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsOptional()
  @IsString()
  clie_email: string;

  @IsOptional()
  @IsString()
  clie_nombre: string;
}
