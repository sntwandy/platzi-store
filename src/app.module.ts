import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './modules/products/controller/products.controller';
import { CategoriesController } from './modules/categories/controller/categories.controller';
import { OrdersController } from './modules/orders/controller/orders.controller';
import { UsersController } from './modules/users/controller/users.controller';
import { CustomersController } from './modules/customers/controller/customers.controller';
import { BrandsController } from './modules/brands/controller/brands.controller';

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
