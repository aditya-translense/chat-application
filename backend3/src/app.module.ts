 // module for chat app
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesModule } from './messages/messages.module';
import { UserModule } from 'users/user.module';

@Module({
  imports: [UserModule,MessagesModule],

})

export class AppModule {}

