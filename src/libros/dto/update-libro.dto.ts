import { PartialType } from '@nestjs/swagger';
import { CreateLibroDto } from './create-libro.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateLibroDto extends PartialType(CreateLibroDto) {
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
