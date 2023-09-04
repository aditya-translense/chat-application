import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})

export class UserAuth{
  @Prop()
  name:string

  @Prop({unique:true})
  email:string

  @Prop()
  password:string
}

export const userAuthentication=SchemaFactory.createForClass(UserAuth)