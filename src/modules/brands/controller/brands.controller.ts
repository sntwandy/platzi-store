import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(): string {
    return 'Brands';
  }

  @Get(':id')
  getBrand(@Param('id') id: string): string {
    return `Brand: ${id}`;
  }
}
