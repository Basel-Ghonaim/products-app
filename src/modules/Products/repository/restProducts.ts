import { toProduct } from "../adabter/toProduct";
import type { Product } from "../entities/Product";
import type { ProductsRepository } from "./ProductsRepository";

const baseUrl = "https://dummyjson.com/products";

export const resetProducts = (): ProductsRepository => {
  return {
    getAll: async (): Promise<Product[]> => {
      const response = await fetch(`${baseUrl}?limit=100`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json().then((data) => toProduct(data.products));
    },
    delete: async (id: number): Promise<void> => {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
    },
  };
};
