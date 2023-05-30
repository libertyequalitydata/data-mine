import { DataSource } from "@/@types/types";
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
        {category.items.map((item: DataSource, idx: number) => (
          <DataCard
            key={idx}
            name={item.name}
            status={item.status}
            isDynamic={item.isDynamic}
          />
        ))}
      </Flex>
    </>
  );
};

export default CategoryContainner;
