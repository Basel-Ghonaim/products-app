import { useProducts } from "..";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "../entities/Product";
import type { ProductsParams } from "../types/ProductParams";

const Get_ALL_PRODUCTS_QUERY_KEY = ["products"];
export const useGetAllProducts = () => {
  interface SelectedProducts {
    all: Product[];
    productsWithDiscountHigherThan10: Product[];
    productsWithDiscountLowerThan10: Product[];
  }
  const params: ProductsParams = {
    limit: 30,
    skip: 0,
  };
  const { getAll } = useProducts();

  const {
    data = {
      all: [],
      productsWithDiscountHigherThan10: [],
      productsWithDiscountLowerThan10: [],
    },
    isLoading,
    error,
  } = useQuery({
    queryKey: [Get_ALL_PRODUCTS_QUERY_KEY, params],
    queryFn: () => getAll(params),
    select: (data: Product[]): SelectedProducts => {
      return {
        all: data,
        productsWithDiscountHigherThan10: data.filter(
          (product) => product.hasDiscount && product.discountPercentage > 10,
        ),
        productsWithDiscountLowerThan10: data.filter(
          (product) => product.hasDiscount && product.discountPercentage <= 10,
        ),
      };
    },
  });
  return {
    allProducts: data.all,
    productsWithDiscountHigherThan10: data.productsWithDiscountHigherThan10,
    productsWithDiscountLowerThan10: data.productsWithDiscountLowerThan10,
    isLoading,
    isEmpty: data.all.length === 0,
    error,
  };
};

useGetAllProducts.queryKey = Get_ALL_PRODUCTS_QUERY_KEY;
