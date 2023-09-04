import {isEnum,IsEmail,MinLength,IsNotEmpty,IsNumber,IsString} from 'class-validator'

export class SignupDto{
    @IsNotEmpty()
    @IsString()
    readonly name:string

    @IsNotEmpty()
    @IsNumber({},{message:"Phone number cannot be string"})
    readonly p_number:number
}