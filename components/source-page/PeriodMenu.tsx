import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { useState } from "react";
const periodArr = ["Day", "Week", "Month", "Year"];

const PeriodMenu = () => {
  const [period, setPeriod] = useState<string>("Day");
  return (
    <>
      <Tabs
        index={periodArr.findIndex((item) => item === period)}
        borderBottomColor={"#130C45"}
        display={{ base: "none", lg: "flex" }}
      >
        <TabList>
          {periodArr.map((tab) => (
            <Tab
              key={tab}
              w={{ lg: "100px", xl: "120px" }}
              px={4}
              mb={-1}
              _selected={{ borderBottom: "6px solid #6AD9C1" }}
              _hover={{
                backgroundColor: "catHover",
                borderBottom: "6px solid #ffffff",
              }}
              onClick={() => setPeriod(tab)}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Menu>
        <MenuButton
          display={{ base: "flex", lg: "none" }}
          width={"150px"}
          textAlign={"left"}
          px={4}
          py={2}
          transition="all 0.2s"
          bg={"bgItem"}
          _focus={{ outline: "none", bg: "bgItem" }}
          _hover={{ bg: "bgItem" }}
          _expanded={{ bg: "bgItem" }}
        >
          {period}
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
          {periodArr.map((item) => (
            <MenuItem
              key={item}
              borderRadius={"4px"}
              py={2}
              // border={item === filter ? "2px" : "none"}
              bg={item === period ? "menuSelect" : "bgItem"}
              color={item === period ? "black" : "whiteText"}
              _hover={{ bg: "catHover", color: "whiteText" }}
              _focus={{ bg: `${item === period ? "menuSelect" : "bgItem"}` }}
              onClick={() => setPeriod(item)}
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};
export default PeriodMenu;
