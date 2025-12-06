import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  async register(@Body() registerUserDto: RegisterDto) {
    const createdUser = await this.authService.registerUser(registerUserDto);
    console.log('createdUser', createdUser);
    return createdUser;
  }
}
