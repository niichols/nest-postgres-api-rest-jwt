import { PartialType } from '@nestjs/swagger';
import { CreateEstadoDto } from './create-estado.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateEstadoDto extends PartialType(CreateEstadoDto) {
  @IsOptional()
  @IsString()
  esta_email: string;

  @IsOptional()
  @IsString()
  esta_nombre: string;
}
