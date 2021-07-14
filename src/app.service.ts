import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs'
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  encrypt(value: string): Promise<string> {
    return bcrypt.hash(value, 10);
  }
}
