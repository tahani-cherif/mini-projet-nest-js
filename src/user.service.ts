import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user";

@Injectable()
export class userservice{

    constructor(
        @InjectRepository(User)
    private userRepository:Repository<User>){}

    findAll():Promise<User[]>{
        return this.userRepository.find();
    }
   /* findOne(user:):Promise<User>{
        return this.userRepository.findOne(this.userRepository.getId);
    }*/

    create(user:User):Promise<User>{
        return this.userRepository.save(user);
    }

    async updite(id:number,user:User){
        await this.userRepository.update(id,user);
    }

    async supp(id:number):Promise<void>{
        await this.userRepository.delete(id);
    }
}
