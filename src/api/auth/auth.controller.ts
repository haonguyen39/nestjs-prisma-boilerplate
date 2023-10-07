import { Body } from '@nestjs/common';
import authRoutes from './auth.routes';
import { InjectController } from '@/common/decorators/controller.decorator';
import { AuthService } from './auth.service';
import { InjectRoute } from '@/common/decorators/api.decorator';
import { Prisma, User } from '@prisma/client';

@InjectController({ name: authRoutes.index, isCore: true })
export class AuthController {
  constructor(private authService: AuthService) {}
  @InjectRoute(authRoutes.signup)
  signUp(@Body() signUpDto: Prisma.UserCreateInput): Promise<User> {
    return this.authService.signUp(signUpDto);
  }
}
