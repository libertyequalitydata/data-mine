import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "@fontsource/open-sans";
import { Routes, Route, Navigate } from "react-router-dom";

import DataSources from "./pages/data-sources/data-sources";
import DataConnectors from "./pages/data-connectors/data-connectors";
import { DataProvider } from "./contexts/DataContext";

export const App = () => (
  <ChakraProvider theme={theme}>
    <DataProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/data-sources" />} />
        <Route path="/data-sources" element={<DataSources />} />
        <Route path="/data-connectors" element={<DataConnectors />} />
      </Routes>
    </DataProvider>
  </ChakraProvider>
);
