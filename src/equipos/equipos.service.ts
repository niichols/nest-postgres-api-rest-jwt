import { Injectable } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipo } from './entities/equipo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EquiposService {
  constructor(
    @InjectRepository(Equipo)
    private equipoRepository: Repository<Equipo>,
  ) {}

  async create(createClienteDto: CreateEquipoDto) {
    const cliente = this.equipoRepository.create(createClienteDto);
    return await this.equipoRepository.save(cliente);
  }

  async findAll() {
    return await this.equipoRepository.find();
  }

  async findOne(id: number): Promise<Equipo> {
    return await this.equipoRepository.findOne({ where: { equi_id: id } });
  }

  async update(id: number, updateClienteDto: UpdateEquipoDto) {
    return await this.equipoRepository.update(id, updateClienteDto);
  }

  async remove(id: number) {
    return await this.equipoRepository.softDelete(id);
  }
}
