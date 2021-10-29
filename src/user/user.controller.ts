import { Controller, Get, Param, Post, UseGuards,Request} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './entitles/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    findAll(): Promise<User[]>{
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string): Promise<User>{
        return this.userService.findOne(id);
    }
    @UseGuards(AuthGuard('local'))
    @Post()
    async login(@Request()req){
        return req.user;
    }
}
