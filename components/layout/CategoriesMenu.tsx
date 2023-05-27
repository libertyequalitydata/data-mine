import {
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  Tooltip,
} from "@chakra-ui/react";
import CategoryIcon from "../assets/CategoryIcon";
import { CategoryButton } from "./CategoryButton";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const categories = [
  "All",
  "Appliances",
  "Blogging",
  "Calenders",
  "Clocks",
  "Cloud Storage",
  "Communication",
  "Entertainment",
  "Finance",
  "Games",
  "Health and Fitness",
  "Location and Navigation",
  "Security",
];

const CategoriesMenu = () => {
  const { selectedCategory } = useContext(DataContext);
  return (
    <Flex display={{ base: "flex", "2xl": "none" }}>
      <Menu closeOnSelect={false}>
        <Tooltip bg={"black"} label="Categories">
          <MenuButton
            as={Button}
            mr={4}
            px={0}
            py={2}
            transition="all 0.2s"
            bg={"bgItem"}
            _focus={{ outline: "none", bg: "bgItem" }}
            _hover={{ bg: "bgItem" }}
            _expanded={{ bg: "bgItem" }}
          >
            <CategoryIcon color={"whiteText"} boxSize={6} />
          </MenuButton>
        </Tooltip>
        <Badge
          ml="-6"
          mt="-2"
          colorScheme="green"
          height={"5"}
          width={"5"}
          borderRadius={"full"}
          zIndex="210"
          bg={"primary"}
          display={selectedCategory[0] === "All" ? "none" : "flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {selectedCategory.length}
        </Badge>
        <Box width={"fullS"} overflow={"hidden"}>
          <MenuList
            bg={"bgItem"}
            border={"none"}
            zIndex={200}
            p={4}
            height={"360px"}
            overflowY={"scroll"}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {categories.map((category, idx) => (
              <MenuItem
                as={Box}
                key={idx}
                bg={"bgItem"}
                _hover={{ bg: "catHover" }}
                _focus={{ bg: "bgItem" }}
                textOverflow={"clip"}
              >
                <CategoryButton category={category} />
              </MenuItem>
            ))}
          </MenuList>
        </Box>
      </Menu>
    </Flex>
  );
};
export default CategoriesMenu;
