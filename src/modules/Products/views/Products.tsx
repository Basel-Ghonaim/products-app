import { Grid } from "@mantine/core";
import { useGetAllProducts } from "../hooks/useGetAllProducts";
import { Product } from "./Product";
export const Products = () => {
  const { allProducts } = useGetAllProducts();
  return (
    <Grid>
      {allProducts.map((product) => (
        <Grid.Col span={4}>
          <Product key={product.id} product={product} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
