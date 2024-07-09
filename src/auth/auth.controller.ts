import { Body, Controller, HttpCode, Get, Post, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    @HttpCode(200)
    async login(@Request() req) {
      return this.authService.login(req.user);
    }
  
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }

}
