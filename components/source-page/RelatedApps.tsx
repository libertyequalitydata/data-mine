import DataContext from "@/context/DataContext";
import DataCard from "../data-sources/DataCard";
import { useState, useContext, useEffect, useRef } from "react";
import { Flex, Icon, IconButton, Text, VStack } from "@chakra-ui/react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { DataSource } from "@/@types/types";

interface Props {
  relatedApps: string;
}

const RelatedApps = ({ relatedApps }: Props) => {
  const { dataSources } = useContext(DataContext);

  const filtered =
    relatedApps !== "" &&
    dataSources.filter((item: DataSource) => relatedApps === item.relatedApps);

  return (
    filtered[0] && (
      <VStack gap={10}>
        <Text
          color={"whiteText"}
          textAlign={"left"}
          width={"full"}
          fontSize={"24px"}
        >
          Related Apps
        </Text>

        <Flex
          gap={8}
          width={"full"}
          wrap={"wrap"}
          justify={["center", "center", "left"]}
        >
          {filtered &&
            filtered.map((item: DataSource, idx: number) => (
              <DataCard
                key={idx}
                name={item.name}
                status={item.status}
                isDynamic={item.isDynamic}
              />
            ))}
        </Flex>
      </VStack>
    )
  );
};
export default RelatedApps;
