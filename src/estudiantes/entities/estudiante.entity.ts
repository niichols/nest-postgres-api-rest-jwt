import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  estu_id: number;

  @Column()
  estu_nombre: string;

  @Column()
  estu_codigo: string;

  @Column()
  estu_correo: string;

  @Column()
  estu_programa: string;

  @CreateDateColumn()
  estu_created_at: Date;

  @DeleteDateColumn({ select: false })
  estu_deleted_at: Date;

  @UpdateDateColumn({ select: false })
  estu_updated_at: Date;
}
