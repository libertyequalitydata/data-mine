import { HStack, Text } from "@chakra-ui/react";
import DataContext from "../../context/DataContext";
import { useContext } from "react";

const ShowingCategories = () => {
  const { selectedCategory } = useContext(DataContext);
  return (
    <HStack color={"whiteText"} fontSize={"sm"}>
      <Text>Showing results for:</Text>
      <Text color={"primary"}>{selectedCategory.join(", ")}</Text>
    </HStack>
  );
};
export default ShowingCategories;
