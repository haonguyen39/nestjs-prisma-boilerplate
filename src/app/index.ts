import { INestApplication, LogLevel } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { isDevelopmentEnv } from '@/utils/helper/CheckingEnvironment';

export const initApplication = async (): Promise<INestApplication> => {
  const isDevEnv = isDevelopmentEnv();
  let logLevels: LogLevel[] = ['error', 'log', 'warn'];
  if (isDevEnv) {
    logLevels = ['error', 'warn', 'log', 'verbose', 'debug'];
  }
  const app = await NestFactory.create(AppModule, {
    logger: logLevels,
  });
  return app;
};
