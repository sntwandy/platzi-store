import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  products(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): string {
    return `All products: limit=> ${limit}, offset=> ${offset} and brand=> ${brand}`;
  }

  @Get('filter')
  filter(): string {
    return `I am a Product Filter`;
  }

  @Get(':id')
  product(@Param('id') id: string): string {
    return `Product ${id}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: `Product created.`,
      payload,
    };
  }
}
