import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserCOntroller } from "./user.controller";
import { userservice } from "./user.service";
import { User } from "./user";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserCOntroller],
    providers: [userservice],
  })
export class UserMode{}