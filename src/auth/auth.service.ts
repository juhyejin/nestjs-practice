// import { Injectable } from '@nestjs/common';
// import { UserService } from '../user/user.service';
// import { JwtService } from '@nestjs/jwt';
// import { CannotReflectMethodParameterTypeError } from 'typeorm';
// import {compare} from 'bcrypt';

// @Injectable()
// export class AuthService {
//   constructor(
//     private userService:UserService
//   ) {}

//   async validateUser(username: string, password: string): Promise<any> {
//     const user = await this.userService.findOne(username);
//     if (!user && (user && !compare(password, user.password))) {
//       return null;
//     }
//     return await this.userService.findUser(user.id);
//   }

//   async login(user: any) {
//     const payload = { username: user.username, sub: user.userId };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }
// }