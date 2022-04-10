import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ database: "paama_core" })
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("zoho_id")
  zohoId: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({ length: 60 })
  password: string;
}
