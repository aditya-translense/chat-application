import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {PassportStrategy} from '@nestjs/passport'
import {Strategy,ExtractJwt} from 'passport-jwt'
import { UserAuth } from "./user-schemas/userAuth.schema";
import { User } from "./user-schemas/user.schema";
import * as mongoose from 'mongoose'
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectModel(UserAuth.name)
        private userAuthModel:mongoose.Model<UserAuth>
    ){
        super({
           jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
           secretOrKey:"aditya is a good "
        })
    }

    async validate(payload){
        const {id}=payload;
        const user=await this.userAuthModel.findOne({id});
        if(!user){
            throw new UnauthorizedException('Login first to access this endpoint')
        }
        return user;
    }
}


