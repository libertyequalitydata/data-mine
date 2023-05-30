import {
  Button,
  color,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useContext } from "react";
import { IoChevronDown, IoFunnelOutline } from "react-icons/io5";
import CircleIcon from "../assets/Circle";
import FunnelIcon from "../assets/FunnelIcon";
import DataContext from "../../context/DataContext";

const filterArr = ["All", "Dynamic Data", "Non-Dynamic Data"];

const FilterMenu = () => {
  const { filter, setFilter } = useContext(DataContext);
  return (
    <Menu>
      <MenuButton
        // display={{ base: "flex", "2xl": "none" }}

        width={{ base: "100px", md: "150px" }}
        textAlign={"left"}
        as={Button}
        px={4}
        py={2}
        transition="all 0.2s"
        bg={"bgItem"}
        _focus={{ outline: "none", bg: "bgItem" }}
        _hover={{ bg: "bgItem" }}
        _expanded={{ bg: "bgItem" }}
      >
        <CircleIcon
          display={filter == "All" ? "none" : "flex"}
          right={-2}
          top={-2}
          position={"absolute"}
          boxSize={5}
          color={"primary"}
        />
        <FunnelIcon boxSize={5} mr={2} />
        Filter
      </MenuButton>
      <MenuList
        bg={"bgItem"}
        border={"none"}
        zIndex={200}
        // p={4}
        py={0}
        gap={2}
        fontSize={"md"}
      >
        {filterArr.map((item) => (
          <MenuItem
            key={item}
            borderRadius={"4px"}
            py={2}
            // border={item === filter ? "2px" : "none"}
            bg={item === filter ? "menuSelect" : "bgItem"}
            color={item === filter ? "black" : "whiteText"}
            _hover={{
              bg: "catHover",
              color: "whiteText",
            }}
            // _focus={{ bg: `${item === filter ? "menuSelect" : "bgItem"}` }}
            onClick={() => setFilter(item)}
          >
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default FilterMenu;
