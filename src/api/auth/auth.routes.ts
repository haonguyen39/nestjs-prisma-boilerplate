import { IRouteParams } from '@/common/decorators/api.decorator';
import { HttpStatus, RequestMethod } from '@nestjs/common';

export default {
  index: 'auth',
  signup: <IRouteParams>{
    jwtSecure: false,
    path: '/signup',
    code: HttpStatus.CREATED,
    method: RequestMethod.POST,
    swaggerInfo: {
      responses: [{ status: HttpStatus.CREATED }],
    },
  },
};
