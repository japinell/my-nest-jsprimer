import { Controller, Get, Post } from "@nestjs/common";

@Controller("products")
export class ProductsController {
  @Get()
  getProducts(): string {
    return "Products controller works!";
  }

  @Post()
  addProduct(): string {
    return "Product created!";
  }
}
