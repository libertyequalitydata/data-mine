import { RequestButton } from "./RequestButton";
import { Flex, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import SortbyMenu from "./SortbyMenu";
import CategoriesMenu from "./CategoriesMenu";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";

const sortArr = ["All", "Recently Updated", "New", "Upcoming"];

const Sortby = () => {
  const { sortby, setSortby } = useContext(DataContext);

  return (
    <>
      <Flex
        color={"whiteText"}
        gap={6}
        pl={{ base: "none", "2xl": 6 }}
        width={"full"}
      >
        <Text
          fontSize="xl"
          fontWeight={600}
          display={{ base: "none", "2xl": "flex" }}
        >
          Sort By
        </Text>
        <Tabs
          index={sortArr.findIndex((item) => item === sortby)}
          bg={"bgItem"}
          borderBottom={"2px solid #4A4A4A"}
          display={{ base: "none", "2xl": "flex" }}
        >
          <TabList>
            {sortArr.map((tab) => (
              <Tab
                mb={-1}
                _selected={{ borderBottom: "4px solid #ffffff" }}
                _hover={{
                  backgroundColor: "bgDark",
                  borderBottom: "4px solid #ffffff",
                }}
                onClick={() => setSortby(tab)}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Tabs>
        <CategoriesMenu />
        <SortbyMenu />
        <RequestButton />
      </Flex>
    </>
  );
};
export default Sortby;
