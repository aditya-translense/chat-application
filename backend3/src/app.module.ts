 // module for chat app
import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import { MessagesModule } from './messages/messages.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath:'.env',
    isGlobal:true
  }),UserModule,MessagesModule],

})

export class AppModule {}

