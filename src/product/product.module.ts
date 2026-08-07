import { Module } from '@nestjs/common';
import { KategoryController } from './kategory/kategory.controller';
import { ProductController } from './product/product.controller';

@Module({
  controllers: [KategoryController, ProductController]
})
export class ProductModule {}
