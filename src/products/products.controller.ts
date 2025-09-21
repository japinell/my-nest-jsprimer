import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(): any {
    return this.productsService.getProducts();
  }

  @Get(":id")
  getProduct(@Param("id") id: number): any {
    return this.productsService.getProduct(id);
  }

  @Post()
  addProduct(
    @Body("name") name: string,
    @Body("description") description: string,
    @Body("price") price: number,
  ): any {
    const product = this.productsService.addProduct(name, description, price);

    return product;
  }
}
