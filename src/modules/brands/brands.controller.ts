import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands() {
    return {
      message: 'Brands',
    };
  }

  @Get(':id')
  getBrand(@Param('id') id: string) {
    return {
      message: `Brand: ${id}`,
    };
  }

  @Post()
  createBrand(@Body() payload: any) {
    return {
      message: 'Brand created',
      payload,
    };
  }
}
