import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useProducts } from "..";
import { useGetAllProducts } from "./useGetAllProducts";
import type { Product } from "../entities/Product";

export const useDeleteProduct = () => {
  const { delete: deleteProduct } = useProducts();
  const queryClient = useQueryClient();

  const { mutate, isError, isPending, isSuccess } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (_data, productId) => {
      queryClient.setQueryData(
        [useGetAllProducts.queryKey],
        (oldData: Product[]) => {
          return oldData.filter((product) => product.id !== productId);
        },
      );
    },
  });

  return { mutate, isError, isPending, isSuccess };
};
