import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "@fontsource/open-sans";
import { Routes, Route, Navigate } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";

import DataSources from "./pages/data-sources/data-sources";
import DataConnectors from "./pages/data-connectors/data-connectors";
import SourceData from "./pages/source-data/source-data";
import ConnectorData from "./pages/connector-data/connector-data";
import PageNotFound from "./pages/PageNotFound";

export const App = () => (
  <ChakraProvider theme={theme}>
    <DataProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/data-sources" />} />
        <Route path="/data-sources">
          <Route index element={<DataSources />} />
          <Route path=":name" element={<SourceData />} />
        </Route>
        <Route path="/data-connectors">
          <Route index element={<DataConnectors />} />
          <Route path=":name" element={<ConnectorData />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </DataProvider>
  </ChakraProvider>
);
