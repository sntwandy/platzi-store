import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders() {
    return {
      message: 'Orders',
    };
  }

  @Get(':id')
  getOrder(@Param('id') id: string) {
    return {
      message: `Order: ${id}`,
    };
  }

  @Post()
  createOrder(@Body() payload: any) {
    return {
      message: 'Order created',
      payload,
    };
  }
}
