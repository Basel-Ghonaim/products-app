import { createContext, useContext, type PropsWithChildren } from "react";

const ProductsContext = createContext<string | null>(null);

interface Props extends PropsWithChildren {
  value?: string;
}
export const ProductsProvider = ({ children }: Props) => {
  return (
    <ProductsContext.Provider value={"products"}>
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
