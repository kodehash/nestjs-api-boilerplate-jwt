import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserDto } from '../users/dto/user.dto';
import { PeopleService } from "../people/people.service";
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from './dto/register-user.dto';
import { IUsers } from './../users/interfaces/users.interface';

@Injectable()
export class RegisterService {
  constructor(
    private readonly usersService: UsersService,
    private readonly peopleService: PeopleService
  ) {}

  public async register(registerUserDto: RegisterUserDto): Promise<IUsers> {
    if (await this.usersService.userExists(registerUserDto.email)) {
      throw new BadRequestException(`User with ${registerUserDto.email} already exists`);
    }
    const emp = this.peopleService.findEmployeeByEmail(registerUserDto.email);
    const zohoId = (await emp).id;
    const password = bcrypt.hashSync(registerUserDto.password, 8);
  
    let userDto = new UserDto(zohoId, 
      registerUserDto.email, registerUserDto.name, password);
  
    return this.usersService.create(userDto);
  }

  // private sendMailRegisterUser(user): void {
  //   this.mailerService
  //     .sendMail({
  //       to: user.email,
  //       from: 'from@example.com',
  //       subject: 'Registration successful ✔',
  //       text: 'Registration successful!',
  //       template: 'index',
  //       context: {
  //         title: 'Registration successfully',
  //         description:
  //           "You did it! You registered!, You're successfully registered.✔",
  //         nameUser: user.name,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       console.log('User Registration: Send Mail successfully!');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       console.log('User Registration: Send Mail Failed!');
  //     });
  // }
}
