import { PartialType } from '@nestjs/swagger';
import { CreateEstudianteDto } from './create-estudiante.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {
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
