import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string {
    //return 'Hello everyone'; - NestJS의 방법을 따르기 위해서는 이 부분이 service로 옮겨져야 함
    return this.appService.sayHello();
  }
}
