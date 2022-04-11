import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employees } from './entities/employees.entity';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Employees])],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
