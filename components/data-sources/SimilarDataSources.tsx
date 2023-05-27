import DataContext from "../../context/DataContext";
import { useContext } from "react";
import { Flex, Text, VStack } from "@chakra-ui/react";
import DataCard from "./DataCard";
import { DataSource } from "@/@types/types";

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
          similarDataSources.items.map((item: DataSource, idx: number) => (
            <DataCard
              key={idx}
              name={item.name}
              status={item.status}
              isDynamic={item.isDynamic}
            />
          ))}
      </Flex>
    </VStack>
  );
};
export default SimilarDataSources;
