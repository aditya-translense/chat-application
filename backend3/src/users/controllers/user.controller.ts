import { Controller, Get, Post, Body, Param,Res } from '@nestjs/common';
import { promises } from 'dns';
import { UserService } from 'users/services/user.services';
import { User } from 'users/user-schemas/user.schema';
import {ApiTags} from '@nestjs/swagger'
import { SignupDto } from 'users/dto/signupDto';
import { Response } from 'express';
import { LoginDto } from 'users/dto/loginDto';
@Controller('users') // Base route for this controller
@ApiTags("users")
export class UserController {
  constructor(private readonly userService: UserService) {} // Inject the UserService
   @Get()
    getUsers():Promise<User[]>{
        console.log("inside get users")
        return this.userService.findAll();
    }


    @Post('/signup')
    async createUser2(@Body() body:SignupDto):Promise<{token:string,name:string}>{
        console.log("inside signup controller")
        const resp=await this.userService.createUser(body);
        // res.cookie('token',resp);
        return resp
    }

    @Post('/login')
     async loginUser(@Body() body:LoginDto):Promise<{token:string,name:string}>{
         let user=await this.userService.loginUser(body);
         console.log("user login",user)
         return user
     }

//   @Post()
//     createUser(@Body() body):Promise<User>{
//         console.log("inside post request")
//         const res=this.userService.create(body);
//         return res
//     }
  
//    @Post('/:p_number')
//     findUserByNumber(@Param() params:Record<string,string>):Promise<User>{
//         const res=this.userService.findByNumber(params.p_number)
//         return res
//     }

}

console.log("this is user constraller")





