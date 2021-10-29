import { IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
  @IsNotEmpty()
  readonly userId: string;

  @IsNotEmpty()
  readonly userName: string;

  @IsNotEmpty()
  readonly password: string;

}