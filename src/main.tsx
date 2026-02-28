import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ProductsProvider } from "./modules/Products/index.tsx";

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </MantineProvider>,
);
