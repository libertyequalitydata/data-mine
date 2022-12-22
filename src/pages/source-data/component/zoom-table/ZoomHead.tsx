import { GridItem, Text } from "@chakra-ui/react";

const ZoomHead = () => {
  return (
    <>
      <Text
        p={4}
        whiteSpace={"nowrap"}
        bg={"bgItem"}
        color={"#FFFFFF80"}
        borderBottom={"1px"}
      >
        {" "}
      </Text>
      <GridItem colSpan={{ base: 4, lg: 1 }}>
        <Text
          p={4}
          whiteSpace={"nowrap"}
          bg={"bgItem"}
          color={"#FFFFFF80"}
          borderBottom={"1px"}
        >
          Source Attribute
        </Text>
      </GridItem>
      <Text
        p={4}
        whiteSpace={"nowrap"}
        bg={"bgItem"}
        color={"#FFFFFF80"}
        borderBottom={"1px"}
        display={{ base: "none", lg: "block" }}
      >
        Prifina Attribute
      </Text>
      <Text
        p={4}
        whiteSpace={"nowrap"}
        bg={"bgItem"}
        color={"#FFFFFF80"}
        borderBottom={"1px"}
        display={{ base: "none", lg: "block" }}
      >
        Aggregate
      </Text>
      <Text
        p={4}
        bg={"bgItem"}
        color={"#FFFFFF80"}
        borderBottom={"1px"}
        whiteSpace={"nowrap"}
        display={{ base: "none", lg: "block" }}
      >
        Data Category
      </Text>
    </>
  );
};
export default ZoomHead;
