import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import {Message,messageSchema} from './messages-schema/message.schema'
@Module({
  imports:[MongooseModule.forRoot("mongodb://localhost:27017/chat-db"),MongooseModule.forFeature([{name:'Message',schema:messageSchema}])],
  providers: [MessagesGateway, MessagesService],
})
export class MessagesModule {}
console.log("this is messages module")