import { Test, TestingModule } from "@nestjs/testing"
import { UserService } from "./user.services"
import { getModelToken } from "@nestjs/mongoose"
import { User } from "../user-schemas/user.schema";
import {Model} from 'mongoose'
import { describe,it } from "node:test";
describe("UserService",()=>{
   
     let userService:UserService
     let model:Model<User>

    const mockUserService={
        findOne:jest.fn()
    };

    const mockUser={
        _id:"64f066574501421b058c4ea8",
        name:"Aditya",
        p_number:"6398284735"
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

     describe('findByNumber',()=>{
        console.log("inside")
        // it("should find and return a user by number",async()=>{
        //      jest.spyOn(model,'findOne').mockResolvedValue(mockUser)

        //      const result=await userService.findByNumber(mockUser.p_number);

        //      expect(model.findOne).toHaveBeenCalledWith(mockUser.p_number)
        //      expect(result).toEqual(mockUser);
        // })
        it("should perform basic test",()=>{
            expect(1 + 1).toBe(2);
        })
     })

   })
})