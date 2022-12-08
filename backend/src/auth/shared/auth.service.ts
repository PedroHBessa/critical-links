import { UsersService } from 'src/users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Logger } from '@nestjs/common';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(userName: string, userPassword: string) {
    const user = await this.usersService.getByUsername(userName);
    if (user && user.password === userPassword) {
      const { _id, username } = user;
      return { id: _id, username };
    }

    return null;
  }

  async login(user: any) {
    const payload = { usename: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
