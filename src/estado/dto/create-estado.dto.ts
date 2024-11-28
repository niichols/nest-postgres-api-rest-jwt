import { IsOptional, IsString } from 'class-validator';

export class CreateEstadoDto {
  @IsOptional()
  @IsString()
  esta_email: string;

  @IsOptional()
  @IsString()
  esta_nombre: string;
}
