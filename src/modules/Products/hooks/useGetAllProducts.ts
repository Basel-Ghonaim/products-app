import { useEffect, useState } from "react";
import { useProducts } from "..";
import type { Product } from "../entities/Product";

export const useGetAllProducts = () => {
  const { getAll } = useProducts();

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getAll()
      .then((product) => setProducts(product))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  return { products };
};
