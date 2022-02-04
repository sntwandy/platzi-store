import { Controller, Get, Param } from '@nestjs/common';
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

  @Get('products/:id')
  getProduct(@Param('id') id: string): string {
    return `Product ${id}`;
  }

  @Get('categories/:id/products/:productId')
  getCategoryProduct(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ): string {
    return `Category ${id} and Product ${productId}`;
  }
}
