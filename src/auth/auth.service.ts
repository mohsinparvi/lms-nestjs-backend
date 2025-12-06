import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './register.dto';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async registerUser(registerUserDto: RegisterDto) {
    /**
     * 1. check fields are valid and not empty
     * 2. check the email is already exists
     * 3. hash the password
     * 4. create a new user and store in the database
     * 5. generate a token
     * 6. return the token
     */
    const saltRounds = 10;
    const hash = await bcrypt.hash(registerUserDto.email, saltRounds);
    const user = await this.userService.createUser({
      ...registerUserDto,
      password: hash,
    });
    const payload = {
      sub: user._id,
      name: user.fname,
      email: user.email,
    };
    const accessToken = this.jwtService.signAsync(payload);

    return { user, accessToken };
  }
}
