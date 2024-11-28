import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepository: Repository<Estudiante>,
  ) {}

  async create(createEstudianteDto: CreateEstudianteDto) {
    const reserva = this.estudianteRepository.create(createEstudianteDto);
    return await this.estudianteRepository.save(reserva);
  }

  async findAll() {
    return await this.estudianteRepository.find();
  }

  async findOne(id: number): Promise<Estudiante> {
    return await this.estudianteRepository.findOne({ where: { estu_id: id } });
  }

  async update(id: number, updateReservaDto: UpdateEstudianteDto) {
    return await this.estudianteRepository.update(id, updateReservaDto);
  }

  async remove(id: number) {
    return await this.estudianteRepository.softDelete(id);
  }
}
