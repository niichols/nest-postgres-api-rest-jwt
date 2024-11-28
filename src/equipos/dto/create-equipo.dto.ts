import { IsOptional, IsString } from 'class-validator';

export class CreateEquipoDto {
  @IsOptional()
  equi_cantidad: number;

  @IsOptional()
  @IsString()
  equi_nombre: string;
}
