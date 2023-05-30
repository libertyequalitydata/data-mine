import {
    Button,
    Flex,
    GridItem,
    HStack,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
  } from "@chakra-ui/react";
  import {
    IoChevronDown,
    IoChevronBack,
    IoChevronForward,
  } from "react-icons/io5";
  
  const arr = [5, 10, 20, 30];
  
  interface Props {
    rows: number;
    setRows: any;
    endRange: number;
    setEndRange: any;
    attributes: any;
    startRange: number;
    setStartRange: any;
  }
  
  function TableFooter({
    rows,
    setRows,
    endRange,
    setEndRange,
    attributes,
    startRange,
    setStartRange,
  }: Props) {
    return (
      <GridItem
        p={4}
        whiteSpace={"nowrap"}
        bg={"bgItem"}
        color={"#FFFFFF80"}
        display={"flex"}
        justifyContent={"space-between"}
        colSpan={{ base: 2, lg: 4 }}
      >
        <Flex width={"full"} alignItems={"center"} flexWrap={"wrap"}>
          <Text color={"primary"}>Rows per page:</Text>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoChevronDown />}
              fontSize={"12px"}
              variant="ghost"
              _focus={{ outline: "none", bg: "bgItem" }}
              _hover={{ bg: "bgItem" }}
              _expanded={{ bg: "bgItem" }}
            >
              {rows}
            </MenuButton>
            <MenuList bg={"bgItem"} border={"none"} zIndex={200} gap={2}>
              {arr.map((item) => (
                <MenuItem
                  key={item}
                  borderRadius={"4px"}
                  m={2}
                  mr={0}
                  // border={item === sortby ? "2px" : "none"}
                  _hover={{ bg: "catHover" }}
                  _focus={{ bg: "bgItem" }}
                  onClick={() => {
                    setRows(item);
                    setStartRange(1);
                    setEndRange(item);
                  }}
                  width={"50px"}
                >
                  {item}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
        <HStack gap={[2, 2, 4]} flexWrap={{ base: "wrap", sm: "nowrap" }}>
          <Text color={"primary"}>
            {startRange < 0 ? 1 : startRange}-
            {endRange > attributes.length ? attributes.length : endRange} of{" "}
            {attributes.length} items
          </Text>
          <Icon
            as={IoChevronBack}
            boxSize={5}
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              if (startRange - rows > 0) {
                setEndRange(endRange - rows);
                setStartRange(startRange - rows);
              }
            }}
          />
          <Icon
            as={IoChevronForward}
            boxSize={5}
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              if (endRange < attributes.length) {
                setEndRange(endRange + rows);
                setStartRange(startRange + rows);
              }
            }}
          />
        </HStack>
      </GridItem>
    );
  }
  export default TableFooter;
  