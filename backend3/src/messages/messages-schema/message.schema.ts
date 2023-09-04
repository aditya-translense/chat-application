import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps:true
})
export class Message{
    @Prop()
    name:string

    @Prop()
    message:string
}

export const messageSchema=SchemaFactory.createForClass(Message);