import {
  Controller,
  Put,
  Get,
  Body,
  Res,
  Param,
  UseGuards,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
// import { UsersService } from './people.service';
import { AuthGuard } from '@nestjs/passport';
// import { UserProfileDto } from './dto/user-profile.dto';
import { IUsers } from './interfaces/people.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('people')
@UseGuards(AuthGuard('jwt'))
@Controller('people')
export class PeopleController {
  constructor() {}

  // @Get('/:userId/profile')
  // public async getUser(
  //   @Res() res,
  //   @Param('userId') userId: string,
  // ): Promise<IUsers> {
  //   const user = await this.usersService.findById(userId);

  //   if (!user) {
  //     throw new NotFoundException('User does not exist!');
  //   }

  //   return res.status(HttpStatus.OK).json({
  //     user: user,
  //     status: 200,
  //   });
  // }

  // @Put('/:userId/profile')
  // public async updateProfileUser(
  //   @Res() res,
  //   @Param('userId') userId: string,
  //   @Body() userProfileDto: UserProfileDto,
  // ): Promise<any> {
  //   try {
  //     await this.usersService.updateProfileUser(userId, userProfileDto);

  //     return res.status(HttpStatus.OK).json({
  //       message: 'User Updated successfully!',
  //       status: 200,
  //     });
  //   } catch (err) {
  //     return res.status(HttpStatus.BAD_REQUEST).json({
  //       message: 'Error: User not updated!',
  //       status: 400,
  //     });
  //   }
  // }
}
