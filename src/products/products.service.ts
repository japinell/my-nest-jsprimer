import { Injectable } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  addProduct(name: string, description: string, price: number) {
    const id = this.products.length + 1;
    const newProduct = new Product(id, name, description, price);
    this.products.push(newProduct);

    return newProduct;
  }

  getProducts() {
    return [...this.products];
  }
}
