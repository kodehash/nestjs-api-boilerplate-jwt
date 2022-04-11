import { MaxLength, IsNotEmpty, IsEmail, IsString } from "class-validator";

export class EmployeeDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsEmail()
  readonly emailId: string;

  @IsString()
  readonly gender: string;

  @IsString()
  readonly employeeRole: string;

  readonly employeeId: string;

}
