import DataContext from "../../../contexts/DataContext";
import { useContext } from "react";
import { Flex, Text, VStack } from "@chakra-ui/react";
import DataCard from "./DataCard";

const SimilarDataSources = () => {
  const { similarDataSources } = useContext(DataContext) || [];
  return (
    <VStack gap={10}>
      <Text
        color={"whiteText"}
        textAlign={"left"}
        width={"full"}
        fontSize={"24px"}
      >
        Similar Data Sources
      </Text>
      <Flex
        gap={8}
        width={"full"}
        wrap={"wrap"}
        justify={["center", "center", "left"]}
      >
        {similarDataSources &&
          similarDataSources.items.map((item: any) => (
            <DataCard
              name={item.Name.title[0].plain_text}
              status={item.Status_.select}
              isDynamic={item["Dynamic Data"].relation[0]?.id !== undefined}
            />
          ))}
      </Flex>
    </VStack>
  );
};
export default SimilarDataSources;
