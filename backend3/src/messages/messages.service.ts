import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import {Message} from './entities/message.entity'
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';


@Injectable()
export class MessagesService {
  
  constructor(
    @InjectModel(Message.name)
    private messageModel:mongoose.Model<Message>
  ){}

  
  // messages:Message[]=[{name:'Aditya',message:'good morning'}]
  clientToUser={}

  identify(name:string,clientId:string){
      this.clientToUser[clientId]=name
      return Object.values(this.clientToUser)
  }

  getClientName(clientId:string){
    return this.clientToUser[clientId];  
  }

  async create(createMessageDto: CreateMessageDto,clientId:string):Promise<Message> {
    console.log("this is the recieved message",createMessageDto)

    const res=await this.messageModel.create(createMessageDto);

    
      //updating the messages array
    //  this.messages.push(createMessageDto);
     
     console.log("this is created message",res)
     return res;
  }

  async findAll() {
  
    const res=await this.messageModel.find();

    // console.log(this.messages)
    return res;
  }


}
