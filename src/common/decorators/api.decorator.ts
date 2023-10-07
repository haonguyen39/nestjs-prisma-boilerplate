import {
  CustomDecorator,
  Delete,
  ExecutionContext,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  RequestMethod,
  SetMetadata,
  applyDecorators,
  createParamDecorator,
} from '@nestjs/common';
import { EUserRole } from '../enum/user-role.enum';
import { ISwaggerParams, SwaggerApi } from './swagger.decorator';
import { IS_PUBLIC_KEY, ROLES_KEY } from '@/utils/constants';

export interface IRouteParams {
  path: string;
  code?: number;
  method: number;
  roles?: EUserRole[];
  jwtSecure?: boolean;
  localSecure?: boolean;
  swaggerInfo?: ISwaggerParams;
}

function Public(): CustomDecorator<string> {
  return SetMetadata(IS_PUBLIC_KEY, true);
}

export function Roles(roles: EUserRole[]): CustomDecorator<string> {
  return SetMetadata(ROLES_KEY, roles);
}

export function InjectRoute({
  path = '/',
  roles = [],
  swaggerInfo = { secure: true },
  jwtSecure = true,
  code = HttpStatus.OK,
  method = RequestMethod.GET,
}: IRouteParams) {
  const methodDecorator = {
    [RequestMethod.GET]: Get,
    [RequestMethod.PUT]: Put,
    [RequestMethod.POST]: Post,
    [RequestMethod.DELETE]: Delete,
  };
  const decorators = [
    methodDecorator[method](path),
    HttpCode(code),
    SwaggerApi({ secure: jwtSecure, ...swaggerInfo }),
  ];
  if (roles.length > 0) {
    decorators.push(Roles(roles));
  }

  if (!jwtSecure) {
    decorators.push(Public());
  }

  return applyDecorators(...decorators);
}
export const ReqUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
