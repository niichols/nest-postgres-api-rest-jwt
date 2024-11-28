import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Libro } from '../../libros/entities/libro.entity';
import { Equipo } from '../../equipos/entities/equipo.entity';
import { Cliente } from '../../clientes/entities/cliente.entity';
import { Estado } from '../../estado/entities/estado.entity';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  rese_id: number;

  @Column()
  rese_observacion: string;

  @Column()
  rese_entrega: Date;

  @CreateDateColumn()
  rese_created_at: Date;

  @DeleteDateColumn({ select: false })
  rese_deleted_at: Date;

  @UpdateDateColumn({ select: false })
  rese_updated_at: Date;

  @Column({ select: false })
  libr_id: number;

  @Column({ select: false })
  equi_id: number;

  @Column({ select: false })
  clie_id: number;

  @Column({ select: false })
  esta_id: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.clie_id)
  @JoinColumn({ name: 'clie_id', referencedColumnName: 'clie_id' })
  clientes: Cliente;

  @ManyToOne(() => Libro, (libro) => libro.libr_id)
  @JoinColumn({ name: 'libr_id', referencedColumnName: 'libr_id' })
  libros: Libro;

  @ManyToOne(() => Equipo, (equipo) => equipo.equi_id)
  @JoinColumn({ name: 'equi_id', referencedColumnName: 'equi_id' })
  equipos: Equipo;

  @ManyToOne(() => Estado, (estado) => estado.esta_id)
  @JoinColumn({ name: 'esta_id', referencedColumnName: 'esta_id' })
  estados: Estado;
}
