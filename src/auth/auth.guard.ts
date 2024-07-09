import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(
        private apiKey: string,
    ) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();

        const apiKey = request.headers.apikey;

        if (apiKey == this.apiKey) {
            return true;
        }

        throw new HttpException('apiKey is invalid or not informed', HttpStatus.BAD_REQUEST)
    }
}