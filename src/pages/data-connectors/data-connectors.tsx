import { Box, Text, VStack } from "@chakra-ui/react";
import DataWrapper from "../../component/DataWrapper";
import Header from "../../component/Header";
import Hero from "./component/Hero";
import { useEffect, useContext, useState } from "react";
import DataContext from "../../contexts/DataContext";
import ConnectorCard from "./component/ConnectorCard";
import ConnectorCardList from "./component/ConnectorCardList";
import axios from "axios";
import { RequestBannerButton } from "../../component/RequestBannerButton";

const DataConnectors = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/data-connectors")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <Box textAlign="center" fontSize="xl" bg={"bgLight"}>
      <VStack justifyContent={"stretch"} minH="100vh" spacing={0}>
        <Header />
        <Hero />
        <DataWrapper>
          <ConnectorCardList />
        </DataWrapper>
      </VStack>
    </Box>
  );
};
export default DataConnectors;
