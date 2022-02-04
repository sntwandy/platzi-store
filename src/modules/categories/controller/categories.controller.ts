import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories(): string {
    return 'Categories';
  }

  @Get(':id/products/:productId')
  getCategoryProduct(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ): string {
    return `Category ${id} and Product ${productId}`;
  }
}
