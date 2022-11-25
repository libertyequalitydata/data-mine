import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import DataCard from "./DataCard";
const CategoryContainner = ({ category }: any) => {
  return (
    <>
      <Text color={"whiteText"} textAlign={"center"} width={"full"}>
        {category.name}
      </Text>
      <Flex
        gap={8}
        width={"full"}
        wrap={"wrap"}
        justify={["center", "center", "left"]}
      >
        {category.items.map((item: any) => (
          <DataCard
            name={item.Name.title[0].plain_text}
            img={item.iconURL.url}
          />
        ))}
      </Flex>
    </>
  );
};

export default CategoryContainner;
