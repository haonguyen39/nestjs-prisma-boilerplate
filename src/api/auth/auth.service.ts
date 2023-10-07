import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Prisma, User } from '@prisma/client';
import { UserAlreadyException } from './auth.exceptions';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signUp(signUpDto: Prisma.UserCreateInput): Promise<User> {
    const { email, username } = signUpDto;

    const user = await this.userService.findUserByEmailOrUsername(
      email,
      username,
    );
    if (user) {
      throw new UserAlreadyException();
    }
    const registeredUser = await this.userService.createUser(signUpDto);

    return registeredUser;
  }
}
