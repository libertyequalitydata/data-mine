import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { IoChevronDown } from "react-icons/io5";
import DataContext from "../../context/DataContext";

const sortArr = ["All", "Live", "Upcoming ", "Requested", "Sandbox"];

const SortbyMenu = () => {
  const { sortby, setSortby } = useContext(DataContext);

  return (
    <Menu>
      <MenuButton
        // display={{ base: "flex", "2xl": "none" }}
        width={"185px"}
        textAlign={"left"}
        as={Button}
        px={4}
        py={2}
        transition="all 0.2s"
        bg={"bgItem"}
        _focus={{ outline: "none", bg: "bgItem" }}
        _hover={{ bg: "bgItem" }}
        _expanded={{ bg: "bgItem" }}
        rightIcon={<IoChevronDown />}
      >
        {sortby}
        <Text
          top={"-4"}
          position={"absolute"}
          fontSize={"10px"}
          fontWeight={"600"}
          display={["none", "flex"]}
        >
          SORT BY
        </Text>
      </MenuButton>
      <MenuList
        bg={"bgItem"}
        border={"none"}
        zIndex={200}
        py={0}
        gap={2}
        fontSize={"md"}
      >
        {sortArr.map((item) => (
          <MenuItem
            key={item}
            borderRadius={"4px"}
            py={2}
            // border={item === filter ? "2px" : "none"}
            bg={item === sortby ? "menuSelect" : "bgItem"}
            color={item === sortby ? "black" : "whiteText"}
            _hover={{ bg: "catHover", color: "whiteText" }}
            // _focus={{ bg: `${item === sortby ? "menuSelect" : "bgItem"}` }}
            onClick={() => setSortby(item)}
          >
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default SortbyMenu;
