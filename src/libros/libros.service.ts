import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private libroRepository: Repository<Libro>,
  ) {}

  async create(createLibroDto: CreateLibroDto) {
    const libro = this.libroRepository.create(createLibroDto);
    return await this.libroRepository.save(libro);
  }

  async findAll() {
    return await this.libroRepository.find();
  }

  async findOne(id: number): Promise<Libro> {
    return await this.libroRepository.findOne({ where: { libr_id: id } });
  }

  async update(id: number, updateLibroDto: UpdateLibroDto) {
    return await this.libroRepository.update(id, updateLibroDto);
  }

  async remove(id: number) {
    return await this.libroRepository.softDelete(id);
  }
}
