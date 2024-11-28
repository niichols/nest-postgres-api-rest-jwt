import { PartialType } from '@nestjs/swagger';
import { CreateEquipoDto } from './create-equipo.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateEquipoDto extends PartialType(CreateEquipoDto) {
  @IsOptional()
  equi_cantidad: number;

  @IsOptional()
  @IsString()
  equi_nombre: string;
}
