import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserMode } from './user.module';
import { User } from "./user";

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'testnest',
    entities:[User],
    synchronize:true,
  }),UserMode],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
