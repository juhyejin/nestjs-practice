// import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { userRepository } from 'src/user/users.repository';
// import {handleRequest}

// @Injectable()
// export class JwtAuthGuard extends AuthGuard('jwt') {
//     canActivate(context:ExecutionContext){
//         return super.canActivate(context);
//     }
//     handleRequest(err,user,info){
//         if(err||!user){
//         throw err || new UnauthorizedException();
//     }
//     return user;
// }
// }