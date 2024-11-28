import { PartialType } from '@nestjs/swagger';
import { CreateReservaDto } from './create-reserva.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateReservaDto extends PartialType(CreateReservaDto) {
  @IsOptional()
  @IsString()
  rese_observacion: string;

  @IsOptional()
  rese_entrega: Date;

  @IsOptional()
  libr_id: number;

  @IsOptional()
  equi_id: number;

  @IsOptional()
  clie_id: number;

  @IsOptional()
  esta_id: number;
}
