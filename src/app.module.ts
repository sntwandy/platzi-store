import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './modules/products/products.controller';
import { CategoriesController } from './modules/categories/categories.controller';
import { OrdersController } from './modules/orders/orders.controller';
import { UsersController } from './modules/users/users.controller';
import { CustomersController } from './modules/customers/customers.controller';
import { BrandsController } from './modules/brands/brands.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrdersController,
    UsersController,
    CustomersController,
    BrandsController,
  ],
  providers: [AppService],
})
export class AppModule {}
