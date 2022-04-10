import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ database: "paama_people" })
export class Employees {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({ length: 60 })
  password: string;
}
