import { Box, Button, Center, Flex, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Center>
      <VStack
        color={"white"}
        mt={12}
        fontSize={"24px"}
        fontWeight={700}
        p={8}
        bg={"bgItemD"}
        borderRadius={"10px"}
        gap={4}
      >
        <Text>404 Page Not Found!</Text>
        <Text fontSize={"16px"} fontWeight={300}>
          Go back to
        </Text>
        <Flex gap={4}>
          <Button
            p={4}
            variant="solid"
            bg={"primary"}
            color={"bgItem"}
            width={"fit-content"}
            _hover={{
              backgroundColor: "hover",
            }}
            _active={{
              backgroundColor: "active",
            }}
            onClick={() => navigate("/data-sources")}
          >
            Data Sources
          </Button>
          <Button
            p={4}
            variant="solid"
            bg={"primary"}
            color={"bgItem"}
            width={"fit-content"}
            _hover={{
              backgroundColor: "hover",
            }}
            _active={{
              backgroundColor: "active",
            }}
            onClick={() => navigate("/data-connectors")}
          >
            Data Connectors
          </Button>
        </Flex>
      </VStack>
    </Center>
  );
};
export default PageNotFound;
