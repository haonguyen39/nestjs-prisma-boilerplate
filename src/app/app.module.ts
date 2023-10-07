import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { configuration } from '@/common/configs';
import * as dotenv from 'dotenv';
import { AuthModule } from '@/api/auth/auth.module';
import { PrismaModule } from '@/database/prisma.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PrismaModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
