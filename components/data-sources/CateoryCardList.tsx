import CategoryContainner from "./CategoryContainner";
import { Flex, Skeleton, Stack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useContext } from "react";
import DataContext from "../../context/DataContext";
import RequestDataSources from "./RequestDataSources";
import SimilarDataSources from "./SimilarDataSources";
import LoadingSources from "./LoadingSources";

const CateoryCardList = () => {
  const { categories } = useContext(DataContext);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <>
      <VStack width={"full"} spacing={10}>
        {categories &&
          categories.map(
            (category: any) =>
              category.items.length && (
                <CategoryContainner key={category.name} category={category} />
              )
          )}
        {categories &&
          categories.every((cat: any) => cat.items.length === 0) && (
            <Text color={"whiteText"} fontSize={"24px"} fontWeight={600}>
              No Results Found
            </Text>
          )}
        {!categories && <LoadingSources />}
      </VStack>
      <RequestDataSources />
      {categories && categories.every((cat: any) => cat.items.length === 0) && (
        <SimilarDataSources />
      )}
    </>
  );
};
export default CateoryCardList;
