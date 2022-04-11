import { MaxLength, IsNotEmpty, IsEmail, IsString } from "class-validator";

export class UserDto {

  constructor(zohoId, email, name, password) {
    this.email = email;
    this.zohoId = zohoId;
    this.name = name;
    this.password = password;
  }

  @IsString()
  @MaxLength(30)
  readonly name: string;

  @IsNotEmpty()
  zohoId: string;

  @IsString()
  @MaxLength(40)
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(60)
  password: string;

}
