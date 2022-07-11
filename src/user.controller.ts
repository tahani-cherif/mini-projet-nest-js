import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { userservice } from "./user.service";
import { User } from "./user";
@Controller('user')
  export class UserCOntroller{
        constructor(private userservice:userservice){
        }
        @Get()
        async fillAll(){
               const reponse=await this.userservice.findAll();
               return reponse;
        }
     /*   @Get(':id')
        async findOne(@Param('id')id:number){
               const reponse=await this.userservice.findOne(id);
               return reponse;
        }*/
        
        @Post()
        async create(@Body() createuser:User){
            const reponse=await this.userservice.create(createuser);
            return reponse;
        }
        @Put(':id')                                                    
        async update(@Param('id') id:number,@Body() createuser:User){
            const reponse =await this.userservice.updite(id,createuser);
            return reponse

        }
        @Delete(':id')
        async delete(@Body() id:number){
            const reponse=await this.userservice.supp(id);
            return reponse
        }

    }
