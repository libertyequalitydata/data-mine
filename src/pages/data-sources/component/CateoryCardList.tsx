import CategoryContainner from "./CategoryContainner";
import { VStack } from "@chakra-ui/react";
import { useEffect, useContext } from "react";
import DataContext from "../../../contexts/DataContext";
import RequestDataSources from "./RequestDataSources";

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
      </VStack>
      <RequestDataSources />
    </>
  );
};
export default CateoryCardList;
