import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { createProductsModule } from "./modules/Products/index.tsx";

const { Provider: ProductsProvider } = createProductsModule();
createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </MantineProvider>,
);
