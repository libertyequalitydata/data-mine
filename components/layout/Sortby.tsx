import { RequestButton } from "./RequestButton";
import { Flex, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import SortbyMenu from "./SortbyMenu";
import CategoriesMenu from "./CategoriesMenu";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import FilterMenu from "./FilterMenu";

const sortArr = ["All", "Live", "Upcoming ", "Requested", "Sandbox"];

const Sortby = () => {
  const { sortby, setSortby } = useContext(DataContext);

  return (
    <>
      <Flex
        maxW={"1040px"}
        color={"whiteText"}
        gap={6}
        // pl={{ base: "none", "2xl": 6 }}
        width={"full"}
        flexWrap={{ base: "wrap", sm: "nowrap" }}
      >
        {/* <Text
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
                  backgroundColor: "catHover",
                  borderBottom: "4px solid #ffffff",
                }}
                onClick={() => setSortby(tab)}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Tabs> */}

        <CategoriesMenu />
        <Flex flexGrow={[0, 0, 1]}>
          <FilterMenu />
        </Flex>
        <SortbyMenu />
        <RequestButton />
      </Flex>
    </>
  );
};
export default Sortby;
