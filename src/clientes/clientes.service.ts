import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const cliente = this.clienteRepository.create(createClienteDto);
    return await this.clienteRepository.save(cliente);
  }

  async findAll() {
    return await this.clienteRepository.find();
  }

  async findOne(id: number): Promise<Cliente> {
    return await this.clienteRepository.findOne({ where: { clie_id: id } });
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    return await this.clienteRepository.update(id, updateClienteDto);
  }

  async remove(id: number) {
    return await this.clienteRepository.softDelete(id);
  }
}