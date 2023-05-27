import { Text, VStack } from "@chakra-ui/react";
import { RequestBannerButton } from "../layout/RequestBannerButton";

const RequestConnectors = () => {
  return (
    <VStack
      backgroundImage="url('./request-data-connectors.png')"
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"40%"}
      alignItems={"left"}
      flexDirection={"column"}
      gap={4}
      p={8}
      borderRadius={"xl"}
      overflow={"hidden"}
      alignSelf={"flex-start"}
    >
      <Text
        fontSize={"24px"}
        fontStyle={"bold"}
        color={"whiteText"}
        fontWeight={700}
        textAlign={"left"}
      >
        Request Data Connectors
      </Text>
      <Text
        fontSize={"md"}
        fontStyle={"bold"}
        color={"whiteText"}
        fontWeight={"normal"}
        textAlign={"left"}
        width={["80%", "70%", "60%"]}
      >
        Create Data Connectors to mix data objects in new ways. Leverage in your
        app and publish to power other innovative apps
      </Text>
      <RequestBannerButton />
    </VStack>
  );
};
export default RequestConnectors;
