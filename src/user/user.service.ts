import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entitles/user.entity';


@Injectable()
export class UserService {
constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
){}
async findAll(): Promise<User[]>{
    return this.userRepository.find({
        select:["seq","userId","userName"],
    });
}
findOne(id:string):Promise<User>{
    return this.userRepository.findOne({userId:id},{
        select:["seq","userId","userName"],
    });
}
}