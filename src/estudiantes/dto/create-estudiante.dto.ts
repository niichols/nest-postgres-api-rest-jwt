import { IsOptional, IsString } from 'class-validator';

export class CreateEstudianteDto {
  @IsOptional()
  @IsString()
  estu_nombre: string;

  @IsOptional()
  @IsString()
  estu_codigo: string;

  @IsOptional()
  @IsString()
  estu_correo: string;

  @IsOptional()
  @IsString()
  estu_programa: string;
}
