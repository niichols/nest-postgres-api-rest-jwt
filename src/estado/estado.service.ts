import { Injectable } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { Estado } from './entities/estado.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoService {
  constructor(
    @InjectRepository(Estado)
    private estadoRepository: Repository<Estado>,
  ) {}

  async create(createEstadoDto: CreateEstadoDto) {
    const cliente = this.estadoRepository.create(createEstadoDto);
    return await this.estadoRepository.save(cliente);
  }

  async findAll() {
    return await this.estadoRepository.find();
  }

  async findOne(id: number): Promise<Estado> {
    return await this.estadoRepository.findOne({ where: { esta_id: id } });
  }

  async update(id: number, updateEstadoDto: UpdateEstadoDto) {
    return await this.estadoRepository.update(id, updateEstadoDto);
  }

  async remove(id: number) {
    return await this.estadoRepository.softDelete(id);
  }
}
