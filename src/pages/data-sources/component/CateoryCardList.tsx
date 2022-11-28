import CategoryContainner from "./CategoryContainner";
import { Text, VStack } from "@chakra-ui/react";
import { useEffect, useContext } from "react";
import DataContext from "../../../contexts/DataContext";
import RequestDataSources from "./RequestDataSources";
import SimilarDataSources from "./SimilarDataSources";

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
                <CategoryContainner category={category} />
              )
          )}
        {categories && categories.every((cat: any) => cat.items.length === 0) && (
          <Text color={"whiteText"} fontSize={"24px"} fontWeight={600}>
            No Results Found
          </Text>
        )}
        {!categories && (
          <Text color={"whiteText"} fontSize={"24px"} fontWeight={600}>
            Loading ...
          </Text>
        )}
      </VStack>
      <RequestDataSources />
      {categories && categories.every((cat: any) => cat.items.length === 0) && (
        <SimilarDataSources />
      )}
    </>
  );
};
export default CateoryCardList;
