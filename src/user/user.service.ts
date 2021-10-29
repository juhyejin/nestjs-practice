import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindRelationsNotFoundError, Repository } from 'typeorm';
import { User } from './entitles/user.entity';
import { userRepository } from './users.repository';


@Injectable()
export class UserService {
constructor(
    @InjectRepository(User)
    private readonly userRepository:userRepository){}
 async findAll(): Promise<User[]>{
    return this.userRepository.find({
        select:["id","userId","userName","password"],
    });
}
findOne(id:string):Promise<User>{
    return this.userRepository.findOne({userId:id},{
        select:["id","userId","userName"],
    });

}
}