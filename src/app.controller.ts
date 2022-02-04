import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): string {
    return `All products: limit=> ${limit}, offset=> ${offset} and brand=> ${brand}`;
  }

  @Get('products/filter')
  getProductFilter(): string {
    return `I am a Product Filter`;
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
