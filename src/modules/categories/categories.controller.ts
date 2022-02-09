import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories() {
    return {
      message: 'Categories',
    };
  }

  @Get(':id/products/:productId')
  getCategoryProduct(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return {
      message: `Category: ${id}`,
      payload: {
        productId: productId,
      },
    };
  }

  @Post()
  createCategory(@Body() payload: any) {
    return {
      message: 'Category created',
      payload,
    };
  }
}
