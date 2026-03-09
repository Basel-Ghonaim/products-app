import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { createProductsModule } from "./modules/Products/index.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const { Provider: ProductsProvider } = createProductsModule();
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <MantineProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </MantineProvider>
  </QueryClientProvider>,
);
