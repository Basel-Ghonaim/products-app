import { buildQueryStringFromParams } from "../../../shared/utils/buildQuery";
import { toProduct } from "../adabter/toProduct";
import type { Product } from "../entities/Product";
import type { ProductsRepository } from "./ProductsRepository";

const baseUrl = "https://dummyjson.com/products";

export const resetProducts = (): ProductsRepository => {
  return {
    getAll: async (params): Promise<Product[]> => {
      const queryString = buildQueryStringFromParams(params);

      const response = await fetch(
        params.category
          ? `${baseUrl}/category/${params.category}?${queryString}`
          : `${baseUrl}?${queryString}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json().then((data) => toProduct(data.products));
    },

    getCategoryList: async (): Promise<string[]> => {
      const response = await fetch(`${baseUrl}/category-list`);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      return response.json().then((data) => data);
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
