import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import * as cookie from 'cookie';

@Injectable()
export class AuthjsGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const cookies = cookie.parse(request.headers.cookie);
    const sessionToken = cookies['authjs.session-token'];
    if (sessionToken) {
      return true;
    }
    return false;
  }
}
