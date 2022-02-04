import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders(): string {
    return 'Orders';
  }

  @Get(':id')
  getOrder(@Param('id') id: string): string {
    return `Order: ${id}`;
  }
}
