import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Equipo {
  @PrimaryGeneratedColumn()
  equi_id: number;

  @Column()
  equi_cantidad: number;

  @Column()
  equi_nombre: string;

  @CreateDateColumn()
  equi_created_at: Date;

  @DeleteDateColumn({ select: false })
  equi_deleted_at: Date;

  @UpdateDateColumn({ select: false })
  equi_updated_at: Date;
}
