import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder,SwaggerModule} from '@nestjs/swagger'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const options=new DocumentBuilder()
  .setTitle("Chatapp")
  .setDescription("Chat app in nest")
  .setVersion("1.0")
  .addBearerAuth({
    type:"http",
    scheme:"bearer",
    bearerFormat:"JWT",
    name:"JWT",
    description:"Enter jwt token",
    in:"header"
  },"JWT-auth").build()
  const document=SwaggerModule.createDocument(app,options)
  SwaggerModule.setup("api",app,document)
  await app.listen(3000);
}
bootstrap();
