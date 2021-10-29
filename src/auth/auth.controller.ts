// import { Controller,Request,Post,UseGuards, Get } from '@nestjs/common';
// import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';
// import { AuthService } from './auth.service';
// import { LocalAuthGuard } from './local-auth.guard';


// @Controller('auth')
// export class AuthController {
//     constructor(private authService: AuthService){}

//     @UseGuards(LocalAuthGuard)
//     @Post('auth/login')
//     async login(@Request() req){
//       return this.authService.login(req.user);
//     }

//     @UseGuards(JwtAuthGuard)
//     @Get('profile')
//     getProfile(@Request() req){
//         return req.user;
//     }
// }
