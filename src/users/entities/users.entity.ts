import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ database: "paama_core" })
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: "zoho_id", type: 'bigint'})
  zohoId: string;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({ length: 60 })
  password: string;
}
