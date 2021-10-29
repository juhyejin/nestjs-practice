import { EntityRepository,Repository } from "typeorm";
import { User } from "./entitles/user.entity";

@EntityRepository(User)
export class userRepository extends Repository<User>{}