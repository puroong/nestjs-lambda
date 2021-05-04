import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/encrypt')
  encrypt(
    @Query('value') value: string,
  ): Promise<string> {
    return this.appService.encrypt(value);
  }
}
