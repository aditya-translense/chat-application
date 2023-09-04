import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { User } from "../user-schemas/user.schema";
import { LoginDto } from "users/dto/loginDto";
import {JwtService} from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs'
import { Sign } from "crypto";
import { SignupDto } from "users/dto/signupDto";
@Injectable()
export class UserService{
  constructor(
    @InjectModel(User.name)
    private userModel:mongoose.Model<User>,
    private jwtService:JwtService
  ){}
  async findAll():Promise<User[]>{
        const users=await this.userModel.find();
        return users;
  }

  async createUser(user:SignupDto):Promise<{token:string,name:string}>{
     const {name,p_number}=user;
     const data={name,p_number}
     const res=await this.userModel.create(data)
     const token=this.jwtService.sign({id:res._id})
     console.log(token)
     return {token,name:data.name};
  }

   async loginUser(loginData:LoginDto):Promise<{token:string,name:string}>{
      const {p_number}=loginData
      const user=await this.userModel.findOne({p_number})
      if(!user){
        throw new NotFoundException("user not found")
      }
      const token=this.jwtService.sign({id:user._id})
      return {token:token,name:user.name};
  }

  async create(user:User):Promise<User>{
       const res=await this.userModel.create(user);
       return res;
  }

//   async findByNumber(loginData:LoginDto):Promise<User>{
//       let res=await this.userModel.findOne({p_number})
//        if(!res){
//         throw new NotFoundException("user not found")
//        }
//       return res;
//   }
}