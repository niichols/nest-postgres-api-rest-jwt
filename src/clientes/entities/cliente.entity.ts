import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  clie_id: number;

  @Column()
  clie_email: string;

  @Column()
  clie_nombre: string;

  @CreateDateColumn()
  clie_created_at: Date;

  @DeleteDateColumn({ select: false })
  clie_deleted_at: Date;

  @UpdateDateColumn({ select: false })
  clie_updated_at: Date;
}
