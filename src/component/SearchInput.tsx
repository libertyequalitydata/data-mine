import { RequestButton } from "./RequestButton";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Flex,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { IoSearchSharp, IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import DataContext from "../contexts/DataContext";

const SearchInput = () => {
  const [focus, setFocus] = useState(false);
  const [val, setVal] = useState("");
  const { searchVal, setSearchVal } = useContext(DataContext);

  // change the button based on link
  const location = useLocation();
  const tabIndex = location.pathname.includes("/data-connectors") ? 1 : 0;

  return (
    <Flex
      gap={4}
      width={"full"}
      direction={["column", "row"]}
      justify={"center"}
      onMouseDown={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <InputGroup _hover={{ color: "searchText" }}>
        <InputLeftElement
          pointerEvents="none"
          display={{ base: "none", xl: "flex" }}
          children={
            <Icon
              as={IoSearchSharp}
              fontSize={"2xl"}
              color={focus ? "primary" : "searchText"}
              mt={3}
            />
          }
        />
        <Input
          borderRadius={{ base: "lg", xl: "lg" }}
          pl={[4, 4, 4, 4, 12]}
          py={6}
          color={"searchText"}
          type={"text"}
          borderColor={"searchBorder"}
          bg={"bgDark"}
          _hover={{ borderColor: "hover" }}
          focusBorderColor={"primary"}
          value={searchVal}
          //
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="Search for data attributes, categories or apps"
        />
        <InputRightElement
          // pointerEvents="auto"
          display={focus ? "flex" : "none"}
          children={
            <Icon
              as={IoClose}
              fontSize={"2xl"}
              color={"primary"}
              mr={{ base: 28, xl: 4 }}
              mt={3}
              onMouseDown={() => setSearchVal("")}
              _hover={{ cursor: "pointer" }}
            />
          }
        />
        <InputRightAddon
          display={{ base: "flex", xl: "none" }}
          py={6}
          bg={"primary"}
          borderColor={"primary"}
          _hover={{ bg: "hover" }}
          children={
            <Icon as={IoSearchSharp} fontSize={"2xl"} color={"bgLight"} />
          }
        />
      </InputGroup>
      <Button
        px={10}
        alignSelf={"center"}
        bg="primary"
        width={"fit-content"}
        _hover={{ bg: "hover" }}
        _active={{ bg: "active" }}
        display={{ base: "none", xl: "flex" }}
      >
        {tabIndex ? "Search Connectors" : "Search data sources"}
      </Button>
    </Flex>
  );
};
export default SearchInput;
