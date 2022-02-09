import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers() {
    return {
      message: 'Customers',
    };
  }

  @Get(':id')
  getCustomer(@Param('id') id: string) {
    return {
      message: `Customer: ${id}`,
    };
  }

  @Post()
  createCustomer(@Body() payload: any) {
    return {
      message: 'Customer created',
      payload,
    };
  }
}
