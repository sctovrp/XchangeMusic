import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('createAccount')
    async createAccount(@Body() CreateUserDto: CreateUserDto) {
        this.authService.createAccount(CreateUserDto);
    }
}
