import { IsEmail, IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsDefined()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    password: string;
}