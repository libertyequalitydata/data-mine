import { Text, VStack } from "@chakra-ui/react";
import { RequestBannerButton } from "../../../component/RequestBannerButton";

const RequestDataSources = () => {
  return (
    <VStack
      backgroundImage="url('./request-data-sources.png')"
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"65%"}
      alignItems={"left"}
      flexDirection={"column"}
      gap={4}
      p={8}
      borderRadius={"xl"}
      overflow={"hidden"}
      alignSelf={"flex-start"}
      width={"916px"}
    >
      <Text
        fontSize={"24px"}
        fontStyle={"bold"}
        color={"whiteText"}
        fontWeight={700}
        textAlign={"left"}
      >
        Request Data Source
      </Text>
      <Text
        fontSize={"md"}
        fontStyle={"bold"}
        color={"whiteText"}
        fontWeight={"normal"}
        textAlign={"left"}
        width={["95%", "80%", "60%"]}
      >
        What data source would you like to utilize? Put in a request for our
        community data source shortlist.
      </Text>
      <RequestBannerButton />
    </VStack>
  );
};
export default RequestDataSources;
