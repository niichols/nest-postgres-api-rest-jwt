import { IsOptional, IsString } from 'class-validator';

export class CreateLibroDto {
  @IsOptional()
  @IsString()
  libr_nombre: string;

  @IsOptional()
  @IsString()
  libr_autor: string;

  @IsOptional()
  @IsString()
  libr_editorial: string;

  @IsOptional()
  @IsString()
  libr_ano: string;
}
