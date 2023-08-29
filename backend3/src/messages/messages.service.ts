import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import {Message} from './entities/message.entity'


@Injectable()
export class MessagesService {
  
  messages:Message[]=[{name:'Aditya',message:'good morning'}]
  clientToUser={}

  identify(name:string,clientId:string){
      this.clientToUser[clientId]=name
      return Object.values(this.clientToUser)
  }

  getClientName(clientId:string){
    return this.clientToUser[clientId];  
  }

  create(createMessageDto: CreateMessageDto,clientId:string) {
    const message={
      name:this.clientToUser[clientId],
      message:createMessageDto.message
    }
      //updating the messages array
     this.messages.push(message);
     console.log(this.messages)
     return message;
  }

  findAll() {
  
    console.log(this.messages)
    return this.messages;
  }


}
