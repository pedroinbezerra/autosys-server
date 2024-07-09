import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

const jwtService = new JwtService;

@Injectable()
export class AppService {
  getCompanyId(req: any): string {
    return jwtService.decode(req.headers.authorization.split('Bearer ')[1])['companyId'];
  }
}