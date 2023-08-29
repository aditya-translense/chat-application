import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getHello(): string {
    return 'Hello World!';
  }
  verifyNumber(pNumber:number):boolean{
    return true;
  }
}
