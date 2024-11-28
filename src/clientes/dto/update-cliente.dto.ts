import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
  @IsOptional()
  @IsString()
  clie_email: string;

  @IsOptional()
  @IsString()
  clie_nombre: string;
}
