import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): string {
    return `All products: limit=> ${limit}, offset=> ${offset} and brand=> ${brand}`;
  }

  @Get('filter')
  getProductFilter(): string {
    return `I am a Product Filter`;
  }

  @Get(':id')
  getProduct(@Param('id') id: string): string {
    return `Product ${id}`;
  }
}
