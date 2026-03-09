import { useProducts } from "..";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "../entities/Product";

export const useGetAllProducts = () => {
  interface SelectedProducts {
    all: Product[];
    productsWithDiscountHigherThan10: Product[];
    productsWithDiscountLowerThan10: Product[];
  }
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
    queryKey: ["products"],
    queryFn: getAll,
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
