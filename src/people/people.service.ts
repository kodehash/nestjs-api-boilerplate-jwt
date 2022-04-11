import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Employees } from './entities/employees.entity';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(Employees)
    private readonly empRepository: Repository<Employees>,
  ) {}

  public async findEmployeeByEmail(email: string): Promise<Employees> {
    const emp = await this.empRepository.findOne({
      where: {
        emailId: email,
      },
    });

    if (!emp) {
      throw new NotFoundException(`User ${email} not found`);
    }

    return emp;
  }

  public async findById(userId: string): Promise<Employees> {
    const user = await this.empRepository.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException(`User #${userId} not found`);
    }

    return user;
  }

  // public async create(userDto: EmployeeDto): Promise<IUsers> {
  //   try {
  //     return await this.empRepository.save(userDto);
  //   } catch (err) {
  //     throw new HttpException(err, HttpStatus.BAD_REQUEST);
  //   }
  // }

  // public async updateByEmail(email: string): Promise<Employees> {
  //   try {
  //     const user = await this.empRepository.findOne({ email: email });
  //     user.password = bcrypt.hashSync(
  //       Math.random()
  //         .toString(36)
  //         .slice(-8),
  //       8,
  //     );
      
  //     return await this.empRepository.save(user);
  //   } catch (err) {
  //     throw new HttpException(err, HttpStatus.BAD_REQUEST);
  //   }
  // }

  // public async updateByPassword(
  //   email: string,
  //   password: string,
  // ): Promise<Employees> {
  //   try {
  //     const user = await this.empRepository.findOne({ email: email });
  //     user.password = bcrypt.hashSync(password, 8);

  //     return await this.empRepository.save(user);
  //   } catch (err) {
  //     throw new HttpException(err, HttpStatus.BAD_REQUEST);
  //   }

  // }

  // public async updateProfileUser(id: string, userProfileDto: UserProfileDto): Promise<Employees> {
  //   try {
  //     const user = await this.empRepository.findOne({id: +id});
  //     user.name = userProfileDto.name;
  //     user.email = userProfileDto.email;
  //     user.username = userProfileDto.username;
      
  //     return await this.empRepository.save(user);
  //   } catch (err) {
  //     throw new HttpException(err, HttpStatus.BAD_REQUEST);
  //   }
  // }

}
