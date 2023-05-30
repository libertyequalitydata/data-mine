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
        gridColumnStart={{ base: 2, lg: 1 }}
      >
        Data Category
      </Text>
      <Text
        p={4}
        whiteSpace={"nowrap"}
        bg={"bgItem"}
        color={"#FFFFFF80"}
        borderBottom={"1px"}
        gridColumnStart={{ base: 1, lg: 2 }}
        gridRowStart={1}
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
        Users with this
      </Text>
    </>
  );
};
export default TableHead;
