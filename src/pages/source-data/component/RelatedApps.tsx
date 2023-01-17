import DataContext from "../../../contexts/DataContext";
import DataCard from "../../data-sources/component/DataCard";
import { useState, useContext, useEffect, useRef } from "react";
import { Flex, Icon, IconButton, Text, VStack } from "@chakra-ui/react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

interface Props {
  relatedApps: string;
}

const RelatedApps = ({ relatedApps }: Props) => {
  const { dataSources } = useContext(DataContext);

  const filtered =
    relatedApps !== "" &&
    dataSources.filter(
      (item: any) => item.relatedApps.formula.string === relatedApps
    );

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
            filtered.map((item: any) => (
              <DataCard
                name={item.Name.title[0].plain_text}
                status={item.Status_.select}
                isDynamic={item["Dynamic Data"].has_more}
              />
            ))}
        </Flex>
      </VStack>
    )
  );
};
export default RelatedApps;
