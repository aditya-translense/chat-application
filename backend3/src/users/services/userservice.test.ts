import { Test, TestingModule } from "@nestjs/testing"
import { UserService } from "./user.services"
import { getModelToken } from "@nestjs/mongoose"
import { User } from "../user-schemas/user.schema";
import {Model} from 'mongoose'
import { describe,it } from "node:test";
import exp from "node:constants";
import { NotFoundException } from "@nestjs/common";
describe("UserService",()=>{
   
     let userService:UserService
     let model:Model<User>

    const mockUserService={
        findOne:jest.fn(),
        create:jest.fn()
    };

    const mockCreatedUser={
        token:"abcdefghijklmnopqrstuvwxyz",
        name:"aditya"
    }

    const mockUser={
        _id:"64f066574501421b058c4ea8",
        name:"Aditya",
        p_number:6398284735
    }
   beforeEach(async()=>{
     const module:TestingModule=await Test.createTestingModule({
        // here we register the services in providers section which we are going to test
         providers:[
            UserService,
            {
                provide:getModelToken(User.name),
                useValue:mockUserService
            }
         ]
     }).compile();

     userService=module.get<UserService>(UserService)
     model=module.get<Model<User>>(getModelToken(User.name))
    }
   )

    

     describe('loginUser',()=>{
       
        it("should return the token after matching details",async()=>{
             jest.spyOn(model,'findOne').mockResolvedValue(mockUser)

             const result=await userService.loginUser({p_number:mockUser.p_number});

             expect(model.findOne).toHaveBeenCalledWith(mockUser.p_number)
             expect(result).toEqual(mockUser);
        })

        it("should return not found exception if invalid p_number is provided",async()=>{
            jest.spyOn(model,'findOne').mockResolvedValue(null)
            await expect(userService.loginUser({p_number:mockUser.p_number})).rejects.toThrow(NotFoundException);
        }
            )

        }
     )

     
     
     })

  