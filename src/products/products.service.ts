import { Injectable, NotFoundException } from "@nestjs/common";

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

  getProduct(id: number) {
    const product = this.products.find((prod) => prod.id === id);

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return { ...product };
  }
}
