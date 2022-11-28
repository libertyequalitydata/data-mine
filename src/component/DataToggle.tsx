import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const DataToggle = () => {
  let navigate = useNavigate();

  const location = useLocation();

  return (
    <Box width={"full"}>
      <Tabs
        defaultIndex={location.pathname.includes("/data-connectors") ? 1 : 0}
        variant="unstyled"
        color={"whiteText"}
        bgGradient={{
          base: "linear(to-r, bgLight 80%, primary 95%)",
          xl: "linear(to-r, bgLight 40%, primary 70%)",
        }}
      >
        <TabList
        // maxW={"container.xl"} mx={"auto"}
        >
          <Tab
            px={10}
            noOfLines={2}
            fontSize={["xs", "sm", "lg"]}
            fontWeight={600}
            _selected={{ borderBottom: "2px solid #6AD9C1" }}
            _hover={{ backgroundColor: "bgDark" }}
            onClick={() => navigate("/data-sources")}
          >
            DATA SOURCES
          </Tab>
          <Tab
            noOfLines={2}
            px={8}
            fontSize={["xs", "sm", "lg"]}
            fontWeight={600}
            _selected={{ borderBottom: "2px solid #6AD9C1" }}
            _hover={{ backgroundColor: "bgDark" }}
            onClick={() => navigate("/data-connectors")}
          >
            DATA CONNECTORS
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};
export default DataToggle;
