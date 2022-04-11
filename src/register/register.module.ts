import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { UsersService } from '../users/users.service';
import { PeopleService } from '../people/people.service';
import { Users } from '../users/entities/users.entity';
import { Employees } from 'src/people/entities/employees.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Employees])],
  controllers: [RegisterController],
  providers: [RegisterService, UsersService, PeopleService],
})
export class RegisterModule {}
