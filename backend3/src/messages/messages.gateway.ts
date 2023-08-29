import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server,Socket } from 'socket.io';



@WebSocketGateway({
  cors:{
    origin:'*'
  }
})
export class MessagesGateway {
  @WebSocketServer()
  server:Server
  
  constructor(private readonly messagesService: MessagesService) {}
// handler for creating a new message
  @SubscribeMessage('createMessage')
 async create(@MessageBody() createMessageDto: CreateMessageDto,@ConnectedSocket() client:Socket) {

    const message=await this.messagesService.create(createMessageDto, client.id);
    console.log("returned message",message)
    //emiting message to all the users
    this.server.emit('message',message)
    return message;
    
  
  }

  @SubscribeMessage('findAllMessages')
  findAll() {
    //fetching all the previous messages
    
    const ans=this.messagesService.findAll();
    return ans;
    
  }

  @SubscribeMessage('join')
  joinRoom(@MessageBody('name') name:string,@ConnectedSocket() client:Socket){
    //handler for accepting users
     return this.messagesService.identify(name,client.id)
     
  }

  @SubscribeMessage('typing')
  async typing(@MessageBody('isTyping') isTyping:boolean,@ConnectedSocket() client:Socket){
     const name=await this.messagesService.getClientName(client.id);
     client.broadcast.emit('typing',{name,isTyping})
     
  }

 
}
