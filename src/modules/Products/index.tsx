import { createContext, useContext, type PropsWithChildren } from "react";
import type { ProductsRepository } from "./repository/ProductsRepository";
import { resetProducts } from "./repository/restProducts";

const ProductsContext = createContext<ProductsRepository | null>(null);

interface Props extends PropsWithChildren {
  value: ProductsRepository;
}
export const ProductsProvider = ({ children, value }: Props) => {
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

export const createProductsModule = () => {
  const value = resetProducts();
  return {
    Provider: ({ children }: PropsWithChildren) => (
      <ProductsProvider value={value}>{children}</ProductsProvider>
    ),
  };
};
