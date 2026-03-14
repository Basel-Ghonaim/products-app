import type { Product } from "../entities/Product";
import type { ProductsParams } from "../types/ProductParams";

export interface ProductsRepository {
  getAll: (params: ProductsParams) => Promise<Product[]>;
  delete: (id: number) => Promise<void>;
}
