import { Env } from '../constants';

const isDevelopmentEnv = (): boolean =>
  ![Env.PRODUCTION, Env.STAGING].includes(getEnv());
const getEnv = (): string => process.env.NODE_ENV || Env.DEVELOPMENT;

export { getEnv, isDevelopmentEnv };
