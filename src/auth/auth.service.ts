import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  registerUser() {
    /**
     * 1. check fields are valid and not empty
     * 2. check the email is already exists
     * 3. hash the password
     * 4. create a new user and store in the database
     * 5. generate a token
     * 6. return the token
     */
    return {
      messagge: 'User registered successfully',
    };
  }
}
