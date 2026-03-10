import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useProducts } from "..";
import { useGetAllProducts } from "./useGetAllProducts";

export const useDeleteProduct = () => {
  const { delete: deleteProduct } = useProducts();
  const queryClient = useQueryClient();

  const { mutate, isError, isPending, isSuccess } = useMutation({
    mutationFn: (id: number) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [useGetAllProducts.queryKey] });
    },
  });

  return { mutate, isError, isPending, isSuccess };
};
