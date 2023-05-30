import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { DataProvider } from "@/context/DataContext";
import { ConnectorProvider } from "@/context/ConnectorContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DataProvider
        results={pageProps.results}
        attributes={pageProps.attributes}
      >
        <ConnectorProvider
        results={pageProps.results}
        attributes={pageProps.attributes}
         >
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </ConnectorProvider>
      </DataProvider>
    </ChakraProvider>
  );
}
