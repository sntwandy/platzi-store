import { Controller, Get, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers(): string {
    return 'Customers';
  }

  @Get(':id')
  getCustomer(@Param('id') id: string): string {
    return `Customer: ${id}`;
  }
}
