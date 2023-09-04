// import { Controller, Post,Body } from "@nestjs/common";
// import { LoginDto } from "users/dto/loginDto";
// import { SignupDto } from "users/dto/signupDto";
// import { AuthService } from "users/services/auth.services";
// import {ApiTags} from '@nestjs/swagger'
// @Controller('auth')
// @ApiTags("auth")
// export class AuthController{
//     constructor(private authService:AuthService){}
//     @Post('/signup')
//     async signup(@Body() signupDto:SignupDto):Promise<{token:string}>{
//         const res=await this.authService.signup(signupDto)
//         return res;
//     }

//     @Post('/login')
//     async login(@Body() logindto:LoginDto):Promise<{token:string}>{
//         const res=await this.authService.login(logindto)
//         return res;
//     }

// }