import CateoryCardList from "@/components/data-sources/CateoryCardList";
import Hero from "@/components/data-sources/Hero";
import DataWrapper from "@/components/layout/DataWrapper";
import Header from "@/components/layout/Header";
import DataContext from "@/context/DataContext";
import { Box, VStack } from "@chakra-ui/react";
import { useContext, useEffect } from "react";

// export { getStaticPaths } from "@/context/DataContext";
export { getStaticProps } from "@/context/DataContext";

const DataSources = () => {
  const {
    handleDataSources,
    handleCategories,
    selectedCategory,
    searchVal,
    sortby,
    filter,
    dataSources,
    categories,
  } = useContext(DataContext);

  useEffect(() => {
    handleDataSources();
  }, []);

  useEffect(() => {
    // console.log("this is results", results);
    handleCategories();
  }, [dataSources, selectedCategory, searchVal, sortby, filter]);
  return (
    <VStack minH={"100vh"} bg={"bgLight"} spacing={0}>
      <Header />
      <Hero />
      <DataWrapper>
        <CateoryCardList />
      </DataWrapper>
    </VStack>
  );
};
export default DataSources;
