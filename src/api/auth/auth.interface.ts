import { EUserRole } from '@/common/enum/user-role.enum';

export interface IValidateUserParams {
  username: string;
  email: string;
  password: string;
}

export interface ITokenPayload {
  email: string;
  role: EUserRole;
  username: string;
}
