import { Box, HStack, VStack } from "@chakra-ui/react";
import DataToggle from "./DataToggle";
import Sidebar from "./Sidebar";
import { ReactNode } from "react";
import SearchInput from "./SearchInput";
import ShowingCategories from "./ShowingCategories";
import Sortby from "./Sortby";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const DataWrapper = ({ children }: Props) => {
  return (
    <>
      <DataToggle />
      <Box width={"full"} pb={8}>
        <HStack
          // maxW={"container.xl"}
          // mx={"auto"}
          px={[0, 0, 0, 0, 12]}
          spacing={{ "2xl": 10 }}
          align={"start"}
        >
          <Sidebar />
          <VStack
            alignItems={"start"}
            spacing={32}
            width={"full"}
            px={[2, 4, 6, 12, 0]}
          >
            <VStack
              alignItems={"start"}
              width={"full"}
              bg={"bgLight"}
              spacing={8}
              position={"-webkit-sticky"}
              style={{
                zIndex: 90,
                position: "sticky",
                top: "60px",
              }}
              pt={8}
              pb={4}
            >
              <SearchInput />
              <Sortby />
            </VStack>
            {/* data sources */}
            {children}
          </VStack>
        </HStack>
      </Box>
    </>
  );
};
export default DataWrapper;
