import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://adityasolankias2402:adityasolankias2402@chat-db.jjntr9f.mongodb.net/chat-db2")],

})

export class UserModule {}
console.log("this is users module")