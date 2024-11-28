import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Estado {
  @PrimaryGeneratedColumn()
  esta_id: number;

  @Column()
  esta_nombre: string;

  @CreateDateColumn()
  esta_created_at: Date;

  @DeleteDateColumn({ select: false })
  esta_deleted_at: Date;

  @UpdateDateColumn({ select: false })
  esta_updated_at: Date;
}
