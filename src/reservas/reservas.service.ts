import { Injectable } from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReservasService {
  constructor(
    @InjectRepository(Reserva)
    private reservaRepository: Repository<Reserva>,
  ) {}

  async create(createReservaDto: CreateReservaDto) {
    const reserva = this.reservaRepository.create(createReservaDto);
    return await this.reservaRepository.save(reserva);
  }

  async findAll() {
    return await this.reservaRepository.find();
  }

  async findOne(id: number): Promise<Reserva> {
    return await this.reservaRepository.findOne({ where: { rese_id: id } });
  }

  async update(id: number, updateReservaDto: UpdateReservaDto) {
    return await this.reservaRepository.update(id, updateReservaDto);
  }

  async remove(id: number) {
    return await this.reservaRepository.softDelete(id);
  }
}
