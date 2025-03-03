import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { CounterProvider } from "./CounterContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider
      toastOptions={{ defaultOptions: { position: "top-right" } }}
    >
      <CounterProvider defaultCount={0}>
        <App />
      </CounterProvider>
    </ChakraProvider>
  </StrictMode>
);
