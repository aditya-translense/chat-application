import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { timestamp } from "rxjs";

@Schema({
    timestamps:true
}
)
export class User{
    @Prop()
    name:string

    @Prop()
    p_number:number
}

export const userSchema=SchemaFactory.createForClass(User)