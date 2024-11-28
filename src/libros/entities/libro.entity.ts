import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Libro {
  @PrimaryGeneratedColumn()
  libr_id: number;

  @Column()
  libr_nombre: string;

  @Column()
  libr_autor: string;

  @Column()
  libr_editorial: string;

  @Column()
  libr_ano: string;

  @CreateDateColumn()
  libr_created_at: Date;

  @DeleteDateColumn({ select: false })
  libr_deleted_at: Date;

  @UpdateDateColumn({ select: false })
  libr_updated_at: Date;
}
