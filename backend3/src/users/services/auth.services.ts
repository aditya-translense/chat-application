// import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
// import { InjectModel } from "@nestjs/mongoose";
// import * as mongoose from "mongoose";
// import { UserAuth } from "users/user-schemas/userAuth.schema";
// import * as bcrypt from 'bcryptjs'
// import {JwtService} from '@nestjs/jwt'
// import { SignupDto } from "users/dto/signupDto";
// import { LoginDto } from "users/dto/loginDto";
// import { User } from "users/user-schemas/user.schema";
// @Injectable()
// export class AuthService{
//     constructor( 
//      @InjectModel(UserAuth.name)
//     private userAuthModel:mongoose.Model<UserAuth>,
//     private jwtService:JwtService
//     ){}
    
//     // async signup(signupDto:SignupDto):Promise<{token:string}>{
//     //     const {name,email,password}=signupDto
//     //     const hashedPassword=await bcrypt.hash(password,10);
//     //     const user =await this.userAuthModel.create({
//     //         name,
//     //         email,
//     //         password:hashedPassword
//     //     })

//         // const token=this.jwtService.sign({id:user._id})
//         // return {token}

//     }

//     async login(logindto:LoginDto):Promise<{token:string}>{
//          const {email,password}=logindto;
//          const currUser=await this.userAuthModel.findOne({email})   
//          if(!currUser){
//             throw new UnauthorizedException('Invalid email or password')
//          }
//          const isPasswordMatched=await bcrypt.compare(password,currUser.password)
//          if(isPasswordMatched){
//            const token=this.jwtService.sign({id:currUser._id})
//            return {token};
//          }
//          else{
//             throw new UnauthorizedException('Invalid email or password')
//          }
//     }

       
//     }
