import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('megan')
  getMeganName(): string {
    return 'Megan Herrera';
  }

  @Get('zeus/name')
  getZeusName(): string {
    return 'Zeus Amenadiel';
  }
}
