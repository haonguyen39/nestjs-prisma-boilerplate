import * as dotenv from 'dotenv';
dotenv.config();
const Env = {
  STAGING: 'staging',
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
};
const ROLES_KEY = 'roles';
const IS_PUBLIC_KEY = 'isPublic';
export { Env, ROLES_KEY, IS_PUBLIC_KEY };
