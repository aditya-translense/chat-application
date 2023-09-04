import { kMaxLength } from 'buffer'
import {isEnum,IsEmail,MinLength,IsNotEmpty,IsNumber,IsString} from 'class-validator'

export class LoginDto{

    @IsNotEmpty()
    @MinLength(10)
    readonly p_number:number

}