import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(): string {
    return "Products controller works!";
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
