import { Box, VStack } from "@chakra-ui/react";
import DataWrapper from "../../component/DataWrapper";
import Header from "../../component/Header";
import Hero from "./component/Hero";
import { useEffect, useContext, useRef } from "react";
import DataContext from "../../contexts/DataContext";
import CateoryCardList from "./component/CateoryCardList";
import { fetchData } from "../../utils/fetcher";

const DataSources = () => {
  const mounted = useRef(true);
  const {
    dataSources,
    handleDataSources,
    handleCategories,
    selectedCategory,
    searchVal,
    sortby,
    filter,
  } = useContext(DataContext);

  const getDataSources = async () => {
    const data = await fetchData("/api/data-sources");
    handleDataSources(data);
  };

  useEffect(() => {
    if (mounted.current && dataSources == null) {
      mounted.current = false;
      getDataSources();
    } else console.log("data is here");
  }, []);

  useEffect(() => {
    console.log(dataSources);
    handleCategories();
  }, [dataSources, selectedCategory, searchVal, sortby, filter]);

  return (
    <Box textAlign="center" fontSize="xl" bg={"bgLight"} minW={"205px"}>
      <VStack justifyContent={"stretch"} minH="100vh" spacing={0}>
        <Header />
        <Hero />
        <DataWrapper>
          <CateoryCardList />
        </DataWrapper>
      </VStack>
    </Box>
  );
};
export default DataSources;
