import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

// TODO: .env
const debug = true;
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    var user = await this.userService.getUserByUsername(username);

    const mathcPass = await bcrypt.compare(pass, user.password);

    if (user && mathcPass) {
      if (debug) {
        console.log('✅ [validateUser]: Authorized');
      }

      const { password, ...result } = user;
      return result;
    }

    if (debug) {
      console.log('⛔ [validateUser]: Incorrect password');
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user._doc.username, sub: user._doc._id.toString(), companyId: user._doc.companyId[0] };

    return {
      status: "success",
      access_token: this.jwtService.sign(payload),
    };
  }
}