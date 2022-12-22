import { Text } from "@chakra-ui/react";

const TableHead = () => {
  return (
    <>
      <Text
        p={4}
        whiteSpace={"nowrap"}
        bg={"bgItem"}
        color={"#FFFFFF80"}
        borderBottom={"1px"}
      >
        Source Attribute
      </Text>
      <Text
        p={4}
        whiteSpace={"nowrap"}
        bg={"bgItem"}
        color={"#FFFFFF80"}
        borderBottom={"1px"}
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
        Attribute Description
      </Text>
      <Text
        p={4}
        whiteSpace={"nowrap"}
        bg={"bgItem"}
        color={"#FFFFFF80"}
        borderBottom={"1px"}
        display={{ base: "none", lg: "block" }}
      >
        Data Category
      </Text>
    </>
  );
};
export default TableHead;
