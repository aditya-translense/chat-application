import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './services/user.services';
import { User, userSchema } from './user-schemas/user.schema';
import {UserController} from './controllers/user.controller'
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'
import { UserAuth,userAuthentication } from './user-schemas/userAuth.schema';
// import { AuthController } from './controllers/auth.controller';
// import { AuthService } from './services/auth.services';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PassportModule.register({defaultStrategy:'jwt'}),
  JwtModule.register({
    global:true,
    secret:"aditya is a good ",
    signOptions:{expiresIn:'3d'}
  }),
  MongooseModule.forRoot("mongodb://localhost:27017/chat-db")
  ,MongooseModule.forFeature([{name:'User',schema:userSchema},{name:'UserAuth',schema:userAuthentication}])],
  controllers:[UserController],
  providers:[UserService,JwtStrategy]
})



export class UserModule {}
console.log("this is users modules")


